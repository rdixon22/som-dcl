import {SceneObject} from "./sceneobject";

/**
 * Loads a GLTF/GLB model, given a SceneObject data structure.
 * If a GLTFShape has already been loaded, it will be reused.
 */
export class ModelLoader
{
    public cache : object = {}; // simple object-based dictionary
    public filePrefix : string;

    constructor(_prefix:string = "models/")
    {
        this.filePrefix = _prefix;
    }

    /**
     * Instantiates a new scene object given JSON data that specifies a GLTF model to load, 
     * and its Transform properties.
     * @param _data A JSON object that conforms to the SceneObject structure
     * @param _parent An optional Entity to use as the parent of the spawned Entity
     */
    spawn(_data: object, _parent:Entity = null): Entity
    {
        const so = this.populate(new SceneObject(), _data); // TODO: error checking for invalid object data

        const mod = new Entity();

        // check cache to see if shape is already there
        let shape:GLTFShape;
        shape = this.cache[so.filename];
        // log("loading " + this.filePrefix + so.filename);

        if (shape == undefined)
        {
            shape = new GLTFShape(this.filePrefix + so.filename);
            this.cache[so.filename] = shape;
        }
        
        mod.addComponent(shape);

        const trans = new Transform({
            position: new Vector3(...so.pos),
            scale: new Vector3(...so.scale)
        });

        // Rotation can be specified either as a Quaternion or as Euler angles
        if (_data['rotation'] != null)
        {
            trans.rotation = new Quaternion(...so.rotation);
        }
        else if (_data['angles'] != null)
        {
            trans.rotation.eulerAngles = new Vector3(...so.angles);
        }
        
        mod.addComponent(trans);

        engine.addEntity(mod);
        if (_parent != null)
        {
            mod.setParent(_parent);
        }
        return mod;
    }

    /**
     * Pulls values from a JSON object into a target javascript object that has matching property names.
     * 
     * @param target The destination object to fill in
     * @param args The JSON source object 
     */
    populate(target, ...args)
    {
        if (!target) 
        {
            throw TypeError('Cannot convert undefined or null to object');
        }
        for (const source of args) 
        {
            if (source) 
            {
                Object.keys(source).forEach(key => target[key] = source[key]);
            }
        }
        return target;
    }
}