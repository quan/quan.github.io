(function () {
  /**
   * Show the full details for the given project.
   * @param {object} project The project to display.
   */
  function showProjectDetails (project) {
    console.log('yes: ' + project.url)
  }

  /**
   * Hide the full details for the given project.
   * @param {object} project The project to hide.
   */
  function hideProjectDetails (project) {
    console.log('no')
  }

  /**
   * Render the given project as a jQuery and return it.
   * @param {object} project - The project to render.
   * @return {jQuery} A compiled jQuery element for the card.
   */
  function renderCard (project) {
    const title = project.title
    const description = project.description.short
    const image = project.image
    const url = project.url

    // Create the title that appears within the card block.
    const $title = $('<h5>', {
      'class': 'card-title project-card-title',
      'text': title
    })

    // Create the description that appears within the card block.
    const $description = $('<p>', {
      'class': 'card-text',
      'text': description
    })

    // Create the card block that wraps the title and description.
    const $block = $('<div>', {
      'class': 'card-block'
    }).append($title)
      .append($description)

    // Create the image that appears at the top of the card.
    const $image = $('<img>', {
      'class': 'card-img-bottom project-card-img',
      'src': image,
      'alt': title
    }).click(function () {

      showProjectDetails(project)
    })
    // toggle(function () {
    //     showProjectDetails(project)
    //   }, function () {
    //     hideProjectDetails(project)
    //   })
    // }

    // Compile the pieces of the card.
    const $card = $('<div>', {
      'class': 'card project-card'
    }).append($block)
      .append($image)

    // Wrap the card and return it.
    return $('<div>', {
      'class': 'project-card-wrapper col-xl-4 col-sm-6'
    }).append($card)
  }

  /**
   * Sets the height of each of the si
   * @param {jQuery} $elements - The element(s) to resize.
   */
  function resizeSquare ($elements) {
    // Set the height of each element to its width.
    $elements.each(function () {
      const width = $(this).width()
      $(this).css('height', width)
    })
  }

  /**
   * Main. Initializes the project list and image resize listeners.
   */
  function main () {
    // Load and render each project into the page.
    const projects = PROJECTS
    const $projectContainer = $('div.project-list')
    for (var index in projects) {
      const project = projects[index]
      $projectContainer.append(renderCard(project))
    }

    // Resize images and set image listeners.
    var projectCardImages = $('img.project-card-img')
    resizeSquare(projectCardImages)
    $(window).resize(function () {
      resizeSquare(projectCardImages)
    })
  }

  $(function () { main() })
})()

