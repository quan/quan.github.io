/* global languageMap */

/*
 * Functions and data for the about section.
 * Largely deals with switching the language of the about text/code.
 */
const AboutSection = {
  // The languages that appear in the about section.
  languages: ['en', 'py', 'js', 'swift', 'java', 'c', 'php', 'ml'],

  // Sets about section listeners and the initial language.
  init: function (_scope) {
    // Used in click handler of function links.
    this.scrollTo = _scope.navigation.scrollTo

    // Create the click handler in this context to have access to this.
    const clickHandler = this.setLanguage.bind(this)

    // Attach listeners for the language selection list.
    this.languages.forEach(language => {
      document
        .querySelector('li.language[data-lang="' + language + '"]')
        .addEventListener('click', function () {
          clickHandler(language)
        })
    })

    // Set the initial language to python.
    this.setLanguage('py')

    _scope.about = this
  },

  // Changes the language that appears in the about section.
  setLanguage: function (language) {
    // Toggle the current language in the language list.
    document
      .querySelectorAll('li.language')
      .forEach(element => element.setAttribute('data-selected', 'false'))

    document
      .querySelector('li.language[data-lang="' + language + '"]')
      .setAttribute('data-selected', 'true')

    document
      .querySelector('div.code-wrapper code')
      .innerHTML = languageMap[language]

    // Attach listeners to the function links.
    const clickHandler = this.scrollTo
    document
      .querySelectorAll('a.code-link')
      .forEach(element => {
        element.addEventListener('click', function () {
          clickHandler(element.dataset.target)
        })
      })
  }
}
