let baseUrl = ''

if (process.env.NODE_ENV === 'production') {
  baseUrl = 'something'
} else {
  baseUrl = 'sth else'
}

const apiHost = baseUrl + '/api'

function shuffleArray (arr) {
  if (arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
  }
}
function divideArray (arr, groupSize) {
  const groups = arr.map(function (item, index) {
    return index % groupSize === 0 ? arr.slice(index, index + groupSize) : null
  })
  .filter(function (item) { return item })
  return groups
}
function choose (choices) {
  var index = Math.floor(Math.random() * choices.length)
  return choices[index]
}
function checkLocalStorage () {
  const test = 'test'
  try {
    window.localStorage.setItem(test, test)
    window.localStorage.removeItem(test)
    return true
  } catch (e) {
    return false
  }
}
function makeRandomString () {
  let randomString = ''
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  for (var i = 0; i < 128; i++) {
    randomString += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  }
  return randomString
}
function compare (a, b) {
  if (a.name < b.name) {
    return -1
  } else if (a.name > b.name) {
    return 1
  } else {
    return 0
  }
}

function chartDataInit (votes) {
  const arr = []
  let chartData = {}
  // const votesSorted = votes.sort((a, b) => b.votes_count - a.votes_count)
  // const votesSorted = votes
  for (var i = 0; i < votes.length; i++) {
    arr.push(votes[i].votes_count)
    // console.log(votes[i].item.salon.name)
    // labels.push(votesSorted[i].item.salon.name)
  }
  chartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
      {
        label: 'ФЭШН БАТЛ - Результаты',
        backgroundColor: '#c30074',
        hoverBackgroundColor: 'rgba(158, 1, 95, 0.91)',
        data: arr
      }
    ]
  }
  return chartData
}
function arrayDiff (arr1, arr2) {
  if (arr1.length > arr2.length) {
    return arr1.filter(x => arr2.indexOf(x) === -1)
  } else {
    return arr2.filter(x => arr1.indexOf(x) === -1)
  }
}
function setCookie (cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = 'expires=' + d.toUTCString()
  document.cookie = cname + '=' + cvalue + '' + expires + 'path=/'
}

function getCookie (cname) {
  const name = cname + '='
  const ca = document.cookie.split('')
  for (var i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

function checkCookie (value) {
  const storedCookie = getCookie(value)
  if (storedCookie !== '') {
    return storedCookie
  }
  return null
}
function checkMobile () {
  if (window.screen.width < 768) {
    return true
  } else {
    return false
  }
}
function getGeoLocation (place) {
  console.log('get position helper: ', place)
  return place
}
function showErrorLocation (error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return 'User denied the request for Geolocation.'
    case error.POSITION_UNAVAILABLE:
      return 'Location information is unavailable.'
    case error.TIMEOUT:
      return 'The request to get user location timed out.'
    case error.UNKNOWN_ERROR:
      return 'An unknown error occurred.'
  }
}
function setGoogleMarkers (stations) {
  const markers = []
  for (var n in stations) {
    var id = n
    var name = stations[n].name
    var position = { lat: stations[n].lat, lng: stations[n].lng }
    var infoText = '<div class="infoWindow">' +
                   '<h3>' + stations[n].name + '</h3>' +
                   '<p>' + stations[n].address + '</p>' +
                   '</div>'
    var infoOptions = {
      pixelOffset: { width: 0, height: -30 }
    }
    var obj = { id, name, position, infoText, infoOptions }

    markers.push(obj)
  }
  return markers
}
function circleRadius (x) {
  return x * window.Math.PI / 180
}
function addZero (value) {
  if (value < 10) {
    return '0' + value
  } else {
    return value
  }
}
function delay (fx, millsec) {
  setTimeout(function () {
    fx()
  }, millsec)
}
const config = {
  baseUrl,
  apiHost,
  shuffleArray,
  choose,
  checkLocalStorage,
  divideArray,
  chartDataInit,
  makeRandomString,
  arrayDiff,
  setCookie,
  getCookie,
  checkCookie,
  compare,
  checkMobile,
  getGeoLocation,
  showErrorLocation,
  setGoogleMarkers,
  circleRadius,
  addZero,
  delay
}
export default config
