const getLocation = function (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

class NavigatorService {
  async getCurrentLocation () {
    const result = await getLocation().then(pos => pos.coords)
    return result
  }
}

export default new NavigatorService()
