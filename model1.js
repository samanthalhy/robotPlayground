let scene, renderer, camera, cube
let px, py, rx, ry, t

function init() {
  scene = new THREE.Scene()

  renderer = new THREE.WebGLRenderer()

  renderer.setSize(1000,1000) 
  renderer.setClearColor(0xeeeeee, 1.0) 
  renderer.shadowMap.enable = true 
  document.body.appendChild(renderer.domElement)

  camera = new THREE.PerspectiveCamera(
    45,
    1000 / 1000,
    0.1,
    100
  )
  camera.position.set(0, 0, 10)
  camera.lookAt(scene.position)


  let pointLight = new THREE.PointLight(0xffffff)
  pointLight.position.set(0, 0, 10)
  scene.add(pointLight)

  const geometry = new THREE.BoxGeometry(1, 1, 1) 
  const material = new THREE.MeshPhongMaterial({
    color: 0x0000ff
  }) 
  cube = new THREE.Mesh(geometry, material)
  cube.position.set(0, 0, 0)
  scene.add(cube)
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}