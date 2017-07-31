const PROJECTS = [
  {
    'title': 'Persona 5 Item Listings',
    'url': 'https://quan.github.io/persona5-items/',
    'image': '',
    'description': {
      'short': '',
      'long': ''
    },
    'tech-stack': ''
  }, {
    'title': 'Madotsuki Walker',
    'url': 'https://quan.github.io/madotsuki/',
    'image': '',
    'description': {
      'short': '',
      'long': ''
    },
    'tech-stack': ''
  }, {
    'title': 'Inkwell',
    'url': 'https://quan.github.io/inkwell-website/',
    'image': '',
    'description': {
      'short': '',
      'long': ''
    },
    'tech-stack': ''
  }, {
    'title': 'PolyRents',
    'url': 'https://polyrents.com',
    'image': '',
    'description': {
      'short': '',
      'long': ''
    },
    'tech-stack': ''
  }, {
    'title': 'AsterRide',
    'url': 'https://www.asterride.com',
    'image': '',
    'description': {
      'short': '',
      'long': ''
    },
    'tech-stack': ''
  }, {
    'title': 'Facebook vs. Fake News',
    'url': 'https://quan.github.io/facebook-fakenews/main.pdf',
    'image': '',
    'description': {
      'short': '',
      'long': ''
    },
    'tech-stack': ''
  }
]

function loadProjects (links) {
  const projectList = document.getElementById('project-list')

  for (let i in links) {
    const link = '<li><a href=' + links[i].url + '>' + links[i].title + '</a></li>'
    projectList.innerHTML += link
  }
}

// main
window.onload = () => {
  loadProjects(PROJECTS)
}
