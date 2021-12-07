function render() {
  animate()
  requestAnimationFrame(render)
  renderer.render(scene, camera)
}
init()
render()