(function () {
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
  $(function () {
    // Resize square images and set resize listeners.
    const projectCardImages = $('img.card-img')
    resizeSquare(projectCardImages)
    $(window).resize(function () {
      resizeSquare(projectCardImages)
    })
  })
})()

