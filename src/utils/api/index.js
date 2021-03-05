class API {
  constructor() {
    this.baseURL = 'https://api.spacexdata.com/v4'
  }

  async get(url) {
    try {
      const response = await fetch(this.baseURL + url)
      const data = await response.json()

      return Promise.resolve({
        data,
        status: response.status,
      })
    } catch (e) {
      console.log(e)
      return Promise.reject(e)
    }
  }

  //   post() {}
}

const request = new API()
export default request
