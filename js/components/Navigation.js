/*
 * Functions and data for page navigation.
 */
const Navigation = {
  sections: ['about', 'projects', 'resume', 'contact'],

  init: function (_scope) {
    this.initMobile()

    // Attach listeners to the desktop navigation links.
    const clickHandler = this.scrollTo
    document
      .querySelectorAll('li.nav-menu-item a.nav-link')
      .forEach(element => {
        element.addEventListener('click', function () {
          clickHandler(element.dataset.target)
        })
      })

    _scope.navigation = this
  },

  // Initializes the mobile menu visible on smaller screen sizes.
  initMobile: function () {
    const button = document.querySelector('div.mobile-nav-button')
    const menu = document.querySelector('.mobile-nav-menu')

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
    const scrollTo = this.scrollTo
    const clickHandler = function (section) {
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
  },

  // Smoothly scrolls to the given page section.
  scrollTo: section => {
    document
      .querySelector('section#' + section)
      .scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      })
  }
}
