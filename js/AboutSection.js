/* global languageMap */

const AboutSection = {
  // The languages that appear in the about section.
  languages: ['en', 'py', 'js', 'swift', 'java', 'c', 'php', 'ml'],

  // Create/attach the listeners for the function links.
  attachClickListeners: function () {
    const clickHandlerFor = section => {
      return function () {
        document
          .querySelector('section#' + section)
          .scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
          })
      }
    }

    ['projects', 'resume', 'contact'].forEach(section => {
      document
        .querySelector('a.func-' + section)
        .addEventListener('click', clickHandlerFor(section))
    })
  },

  // Changes the language that appears in the about section.
  setLanguage: function (language) {
    if (this.languages.indexOf(language) < 0) {
      console.log('unrecognized language "' + language + '"')
      return
    }

    // Toggle the current language in the language list.
    document
      .querySelector('li.language[data-selected="true"]')
      .setAttribute('data-selected', 'false')
    document
      .querySelector('li.language[data-lang="' + language + '"]')
      .setAttribute('data-selected', 'true')

    document
      .querySelector('div.code-wrapper code')
      .innerHTML = languageMap[language]

    this.attachClickListeners()
  },

  // Initializes the About section.
  init: function () {
    const clickHandlerFor = language => {
      return function () {
        this.setLanguage(language)
      }
    }

    // Attach listeners for the language selection list.
    this.languages.forEach(language => {
      document
        .querySelector('li.language[data-lang="' + language + '"]')
        .addEventListener('click', clickHandlerFor(language).bind(this))
    })

    // Set the initial language to python.
    this.setLanguage('py')
  }
}
