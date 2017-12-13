/* global $ */
const MobileNavigationMenu = {
  init: () => {
    const button = $('.mobile-nav-button')
    const popover = $('.mobile-nav-menu')

    button.click(function () {
      if (button.attr('data-status') === 'on') {
        button.attr('data-status', 'off')
        popover.attr('data-status', 'closed')
      } else {
        button.attr('data-status', 'on')
        popover.attr('data-status', 'open')
      }
    })
  }
}
