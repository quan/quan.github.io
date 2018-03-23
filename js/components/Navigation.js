/*
 * Functions and data for page navigation.
 */
var Navigation = {}

Navigation.sections = ['about', 'projects', 'resume', 'contact']

Navigation.init = function (_scope) {
  this.initMobile()

  // Attach listeners to the desktop navigation links.
  var clickHandler = this.scrollTo
  document
    .querySelectorAll('li.nav-menu-item a.nav-link')
    .forEach(element => {
      element.addEventListener('click', function () {
        clickHandler(element.dataset.target)
      })
    })

  _scope.navigation = this
}

// Initializes the mobile menu visible on smaller screen sizes.
Navigation.initMobile = function () {
  var button = document.querySelector('div.mobile-nav-button')
  var menu = document.querySelector('.mobile-nav-menu')

  // Toggle opening and closing of the menu.
  button.addEventListener('click', function () {
    if (button.dataset.status === 'on') {
      button.dataset.status = 'off'
      menu.dataset.status = 'closed'
    } else {
      button.dataset.status = 'on'
      menu.dataset.status = 'open'
    }
  })

  // The mobile navigation links also close the menu.
  var scrollTo = this.scrollTo
  var clickHandler = function (section) {
    button.dataset.status = 'off'
    menu.dataset.status = 'closed'
    scrollTo(section)
  }
  document
    .querySelectorAll('li.mobile-nav-menu-item a.nav-link')
    .forEach(element => {
      element.addEventListener('click', function () {
        clickHandler(element.dataset.target)
      })
    })
}

// Smoothly scrolls to the given page section.
Navigation.scrollTo = function (section) {
  document
    .querySelector('section#' + section)
    .scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
}
