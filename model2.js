function render() {
  animate()
  requestAnimationFrame(render)
  renderer.render(scene, camera)
}
window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
init()
render()