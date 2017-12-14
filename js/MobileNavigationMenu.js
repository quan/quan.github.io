const MobileNavigationMenu = {
  init: () => {
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
  }
}
