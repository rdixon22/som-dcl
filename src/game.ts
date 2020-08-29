// som modules
import { ModelLoader } from "./modelloader";

// load the scene object model (SOM)
import { som } from './som';

// Add top-level scene entity, to match the way the Builder does it
const _scene = new Entity(som.scene.name);
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
});
_scene.addComponentOrReplace(transform);

// Use the SOM utilities to spawn objects in the scene
const loader:ModelLoader = new ModelLoader();

const floorBaseGrass:Entity = loader.spawn(som.scene.floorBaseGrass);
const tree01: Entity = loader.spawn(som.scene.lightGreenSycamoreTree, _scene);
const tree02:Entity = loader.spawn(som.scene.lightGreenSycamoreTree2, _scene);
const tree03:Entity = loader.spawn(som.scene.lightGreenPoplars, _scene);
const tree04: Entity = loader.spawn(som.scene.lightGreenPoplars2, _scene);
const pond: Entity = loader.spawn(som.scene.pond, _scene);

const blueBicycle:Entity = loader.spawn(som.scene.blueBicycle, _scene);
const brownBicycle:Entity = loader.spawn(som.scene.brownBicycle, _scene);
const checkeredRug:Entity = loader.spawn(som.scene.checkeredRug, _scene);
const soccerBall:Entity = loader.spawn(som.scene.soccerBall, _scene);
const wineBottle:Entity = loader.spawn(som.scene.wineBottle, _scene);
const umbrella:Entity = loader.spawn(som.scene.beachUmbrella, _scene);

// Generated code from Builder export
// const lightGreenSycamoreTree = new Entity('lightGreenSycamoreTree')
// engine.addEntity(lightGreenSycamoreTree)
// lightGreenSycamoreTree.setParent(_scene)
// const transform2 = new Transform({
//   position: new Vector3(13.5, 0, 3),
//   rotation: new Quaternion(-1.10062582369541e-15, 0.6343932747840881, -7.562556447737734e-8, 0.7730104327201843),
//   scale: new Vector3(1, 1, 1)
// })
// lightGreenSycamoreTree.addComponentOrReplace(transform2)
// const gltfShape = new GLTFShape("models/TreeSycamore_01/TreeSycamore_01.glb")
// gltfShape.withCollisions = true
// gltfShape.visible = true
// lightGreenSycamoreTree.addComponentOrReplace(gltfShape)

// const pond = new Entity('pond')
// engine.addEntity(pond)
// pond.setParent(_scene)
// const transform3 = new Transform({
//   position: new Vector3(8, 0, 10.5),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1.580105185508728, 2.0485124588012695, 1.539799690246582)
// })
// pond.addComponentOrReplace(transform3)
// const gltfShape2 = new GLTFShape("models/Pond_01/Pond_01.glb")
// gltfShape2.withCollisions = true
// gltfShape2.visible = true
// pond.addComponentOrReplace(gltfShape2)

// const entity = new Entity('entity')
// engine.addEntity(entity)
// entity.setParent(_scene)
// const gltfShape3 = new GLTFShape("models/FloorBaseGrass_02/FloorBaseGrass_02.glb")
// gltfShape3.withCollisions = true
// gltfShape3.visible = true
// entity.addComponentOrReplace(gltfShape3)
// const transform4 = new Transform({
//   position: new Vector3(8, 0, 8),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// entity.addComponentOrReplace(transform4)

// const blueBicycle = new Entity('blueBicycle')
// engine.addEntity(blueBicycle)
// blueBicycle.setParent(myScene)
// const transform5 = new Transform({
//   position: new Vector3(13.168145179748535, 0.03211164474487305, 3.0507702827453613),
//   rotation: new Quaternion(0.12376400083303452, 0.6222035884857178, -0.1508069485425949, 0.7581572532653809),
//   scale: new Vector3(0.9999991655349731, 1.000000238418579, 0.999998927116394)
// })
// blueBicycle.addComponentOrReplace(transform5)
// const gltfShape4 = new GLTFShape("models/Bicycle_02/Bicycle_02.glb")
// gltfShape4.withCollisions = true
// gltfShape4.visible = true
// blueBicycle.addComponentOrReplace(gltfShape4)

// const checkeredRug = new Entity('checkeredRug')
// engine.addEntity(checkeredRug)
// checkeredRug.setParent(myScene)
// const transform6 = new Transform({
//   position: new Vector3(8, 0, 4),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// checkeredRug.addComponentOrReplace(transform6)
// const gltfShape5 = new GLTFShape("models/Carpet_02/Carpet_02.glb")
// gltfShape5.withCollisions = true
// gltfShape5.visible = true
// checkeredRug.addComponentOrReplace(gltfShape5)

// const lightGreenSycamoreTree2 = new Entity('lightGreenSycamoreTree2')
// engine.addEntity(lightGreenSycamoreTree2)
// lightGreenSycamoreTree2.setParent(_scene)
// lightGreenSycamoreTree2.addComponentOrReplace(gltfShape)
// const transform7 = new Transform({
//   position: new Vector3(3, 0, 3.000000476837158),
//   rotation: new Quaternion(-1.1884884454349803e-15, 0.290284663438797, -3.4604624943312956e-8, 0.9569403529167175),
//   scale: new Vector3(1, 1, 1)
// })
// lightGreenSycamoreTree2.addComponentOrReplace(transform7)

// const lightGreenPoplars = new Entity('lightGreenPoplars')
// engine.addEntity(lightGreenPoplars)
// lightGreenPoplars.setParent(myScene)
// const transform8 = new Transform({
//   position: new Vector3(1.5, 0, 5),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// lightGreenPoplars.addComponentOrReplace(transform8)
// const gltfShape6 = new GLTFShape("models/TreeFir_01/TreeFir_01.glb")
// gltfShape6.withCollisions = true
// gltfShape6.visible = true
// lightGreenPoplars.addComponentOrReplace(gltfShape6)

// const lightGreenPoplars2 = new Entity('lightGreenPoplars2')
// engine.addEntity(lightGreenPoplars2)
// lightGreenPoplars2.setParent(myScene)
// lightGreenPoplars2.addComponentOrReplace(gltfShape6)
// const transform9 = new Transform({
//   position: new Vector3(12, 0, 13),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// lightGreenPoplars2.addComponentOrReplace(transform9)

// const brownBicycle = new Entity('brownBicycle')
// engine.addEntity(brownBicycle)
// brownBicycle.setParent(myScene)
// const transform10 = new Transform({
//   position: new Vector3(13.817970275878906, 0.17756319046020508, 3),
//   rotation: new Quaternion(0.44458675384521484, 0.5481828451156616, -0.42496004700660706, 0.5667867660522461),
//   scale: new Vector3(1.0000041723251343, 1.0000030994415283, 1.0000067949295044)
// })
// brownBicycle.addComponentOrReplace(transform10)
// const gltfShape7 = new GLTFShape("models/Bicycle_03/Bicycle_03.glb")
// gltfShape7.withCollisions = true
// gltfShape7.visible = true
// brownBicycle.addComponentOrReplace(gltfShape7)

// const soccerBall = new Entity('soccerBall')
// engine.addEntity(soccerBall)
// soccerBall.setParent(myScene)
// const transform11 = new Transform({
//   position: new Vector3(10, 0, 5),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// soccerBall.addComponentOrReplace(transform11)
// const gltfShape8 = new GLTFShape("models/PlaygroundBall_01/PlaygroundBall_01.glb")
// gltfShape8.withCollisions = true
// gltfShape8.visible = true
// soccerBall.addComponentOrReplace(gltfShape8)

// const wineBottle = new Entity('wineBottle')
// engine.addEntity(wineBottle)
// wineBottle.setParent(myScene)
// const transform12 = new Transform({
//   position: new Vector3(9.21917724609375, 0, 4.553287506103516),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// wineBottle.addComponentOrReplace(transform12)
// const gltfShape9 = new GLTFShape("models/WineBottle_01/WineBottle_01.glb")
// gltfShape9.withCollisions = true
// gltfShape9.visible = true
// wineBottle.addComponentOrReplace(gltfShape9)

// const beachUmbrella = new Entity('beachUmbrella')
// engine.addEntity(beachUmbrella)
// beachUmbrella.setParent(_scene)
// const transform13 = new Transform({
//   position: new Vector3(6.6, 0, 2.8),
//   rotation: new Quaternion(-0.04133003205060959, 0.0018924575997516513, 0.04570184275507927, 0.9980980157852173),
//   scale: new Vector3(1, 1, 1)
// })
// beachUmbrella.addComponentOrReplace(transform13)
// const gltfShape10 = new GLTFShape("models/Umbrella_01/Umbrella_01.glb")
// gltfShape10.withCollisions = true
// gltfShape10.visible = true
// beachUmbrella.addComponentOrReplace(gltfShape10)
