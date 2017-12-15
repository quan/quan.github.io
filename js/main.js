/*
global
Navigation
AboutSection
*/

(function () {
  const _scope = {}

  window.onload = function () {
    Navigation.init(_scope)
    AboutSection.init(_scope)
  }
})()
