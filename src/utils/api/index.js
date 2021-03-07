class API {
  constructor() {
    this.baseURL = 'https://api.spacexdata.com/v4'
  }

  async get(url) {
    try {
      const response = await fetch(this.baseURL + url, {
        headers: {
          'content-type': 'application/json',
        },
      })
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

  async post(url, payload) {
    try {
      const response = await fetch(this.baseURL + url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
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
}

const request = new API()

export async function getLaunches({ page = 1, limit = 10, query = {} }) {
  return request.post(`/launches/query`, {
    query,
    options: {
      page,
      populate: [
        {
          path: 'payloads',
          populate: [
            {
              path: 'payloads',
            },
          ],
          select: {
            name: 1,
            orbit: 1,
          },
        },
        {
          path: 'rocket',
          populate: [
            {
              path: 'rockets',
            },
          ],
          select: {
            name: 1,
            engines: 1,
            country: 1,
            company: 1,
          },
        },
        {
          path: 'launchpad',
          populate: [
            {
              path: 'launchpads',
            },
          ],
          select: {
            locality: 1,
            name: 1,
          },
        },
      ],
      limit,
    },
  })
}
