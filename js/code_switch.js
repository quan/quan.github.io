/* global $, languageMap */

const AboutSection = {
  // The languages that appear in the about section.
  languages: ['en', 'py', 'js', 'swift', 'java', 'c', 'php', 'ml'],

  // Create a closure to change the code to the given language.
  handlerFor: function (lang) {
    return ((lang, text) => {
      return function () {
        document
          .querySelector('li.about-lang-opt-item[data-selected="true"]')
          .setAttribute('data-selected', 'false')

        document
          .querySelector('li.about-lang-opt-item[data-lang="' + lang + '"]')
          .setAttribute('data-selected', 'true')

        // document
        //   .querySelector('div.code-wrapper code')
        //   .innerHTML = text
        const tagger = lang => {
          return lang === 'en'
            ? text => text
            : text => '<pre><code>' + text + '</code></pre>'
        }

        // do this without jQuery :(
        $('div.code-wrapper').fadeOut(function () {
          $(this).text('').append(tagger(lang)(text)).fadeIn()
        })
      }
    })(lang, languageMap[lang])
  },

  // Initializes the About Section.
  init: function () {
    this.languages.forEach(lang => {
      document
        .querySelector('li.about-lang-opt-item[data-lang="' + lang + '"]')
        .addEventListener('click', this.handlerFor(lang))
    })
  }
}
