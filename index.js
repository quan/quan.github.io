const links = [
  {
    'title': 'Inkwell Marketing Website',
    'url': 'https://quan.github.io/inkwell_website/'
  }, {
    'title': 'Persona 5 Itemization Lookup',
    'url': 'http://quan.github.io/persona5_itemization/'
  }, {
    'title': 'PolyRents',
    'url': 'https://polyrents.com'
  }, {
    'title': 'AsterRide',
    'url': 'https://www.asterride.com'
  }, {
    'title': 'Facebook vs. Fake News',
    'url': 'https://quan.github.io/facebook_fakenews/main.pdf'
  }
]

window.onload = () => {
  const projectList = document.getElementById('project-list')

  for (let i in links) {
    const link = '<li><a href=' + links[i].url + '>' + links[i].title + '</a></li>'
    projectList.innerHTML += link
  }
}
