/* global $ */
const MobileNavigationMenu = {
  init: () => {
    const button = $('.mobile-nav-button')
    const popover = $('.mobile-nav-menu')

    button.isOn = function () {
      return this.attr('data-status') === 'on'
    }
    button.isHidden = function () {
      return this.attr('data-hidden') === 'true'
    }

    // Set listeners for opening and closing the menu.
    button.click(function () {
      if (!button.isHidden()) {
        if (button.isOn()) {
          button.attr('data-status', 'off')
          popover.attr('data-status', 'closed')
        } else {
          button.attr('data-status', 'on')
          popover.attr('data-status', 'open')
        }
      }
    })

    const windowSelector = $(window)

    const prepHide = function () {
      const mobileCutoff = 640
      const fadeTime = 1500

      if (windowSelector.width() <= mobileCutoff) {
        window.setTimeout(function () {
          if (!button.isOn()) {
            button.attr('data-hidden', 'true')
          }
        }, fadeTime)
      }
    }

    // Set listeners for hiding and showing the menu button.
    windowSelector.resize(function () {
      if (!button.isOn() && !button.isHidden()) {
        prepHide()
      }
    })
    windowSelector.click(function () {
      if (!button.isOn()) {
        prepHide()
        button.attr('data-hidden', 'false')
      }
    })
  }
}
