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
  const bgColor = project.backgroundColor

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

  // Create some link. TODO
  const $link = $('<a>', {
    'class': 'btn btn-primary',
    'href': url,
    'text': 'Link'
  })
  // Create some other link. TODO
  const $otherLink = $('<a>', {
    'class': 'btn btn-primary',
    'href': url,
    'text': 'More'
  })

  // Create the card block that appears below the image.
  const $block = $('<div>')
    .addClass('card-block')
    .append($title)
    .append($description)
    // .append($link)
    // .append($otherLink)

  // Create the image that appears at the top of the card.
  const $image = $('<img>', {
    'class': 'card-img-bottom project-card-img darken',
    'src': image,
    'alt': title
  })

  const $imageWrapper = $('<a>', {
    'class': 'card-img-top',
    'href': url
  }).append($image)

  // Compile the card and return.
  return $('<div>')
    .addClass('card project-card')
    .append($block)
    .append($image)

}

function loadProjects (projects) {
  // For each link, find its corresponding node and render the html
  for (var index in projects) {
    const project = projects[index]
    const id = '#item-' + index
    $(id).append(renderCard(project))
  }
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
  loadProjects(PROJECTS)

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

