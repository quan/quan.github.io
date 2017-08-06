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
    .addClass('card-title project-card-title')
    .text(title)

  // Create the description that appears within the card block.
  const $description = $('<p>', {
    'class': 'card-text',
    'text': description
  })

  // Create the card block that appears below the image.
  const $block = $('<div>')
    .addClass('card-block')
    .append($title)
    .append($description)

  // Create the image that appears at the top of the card.
  const $image = $('<img>', {
    'class': 'card-img-bottom project-card-img darken',
    'src': image,
    'alt': title
  }).click(function () {
    console.log(description)
  }).addClass('link')

  const $card = $('<div>')
    .addClass('card project-card')
    .append($block)
    .append($image)

  // Compile the card wrapper and return.
  return $('<div>')
    .addClass('project-card-wrapper col-xl-4 col-sm-6')
    .append($card)
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

function main () {
  // Load and render each project into the page.
  const $projectContainer = $('div.project-list')

  for (var index in PROJECTS) {
    const project = PROJECTS[index]
    $projectContainer.append(renderCard(project))
  }

  var projectCardImages = $('img.project-card-img')
  resizeSquare(projectCardImages)

  $(window).resize(function () {
    resizeSquare(projectCardImages)
  })
  //
  // $('img.darken').hover(function () {
  //   this.fadeTo('500', .5)
  // }, function () { // Off hover
  //   $(this).fadeTo('500', 1)
  // })
}

$(function () { main() })

