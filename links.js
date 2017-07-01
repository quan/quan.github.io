const links = [
  {
    'title': 'Persona 5 Itemization',
    'url': 'https://quan.github.io/persona5_itemization/'
  }, {
    'title': 'Madotsuki Walker',
    'url': 'https://quan.github.io/madotsuki/'
  }, {
    'title': 'Inkwell',
    'url': 'https://quan.github.io/inkwell_website/'
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
