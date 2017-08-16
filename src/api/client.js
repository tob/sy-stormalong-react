import request from 'superagent'

const RAILS_TOKEN_KEY = 'stormalong-api'
const RAILS_HOST = 'http://localhost:3000'
const host = RAILS_HOST

// const feathersClient = feathers()
//   .configure(rest(host).superagent(superagent))
//   .configure(hooks())
//   .configure(auth({
//     storage: window.localStorage,
//     storageKey: RAILS_TOKEN_KEY,
//   }))

// Use superagent: yarn add superagent
//
// This class should set up the defaults and make it easy to connect to the Rails backend.
// Example:
//
// const api = new API();
// api.post('/users', { email: 'foo@bar.co' })
//   .then((result) => (...))
//   .catch((error) => (...))

export default class API {

  constructor() {
    this.request = request;
    // this.user = user;
    this.setupDefaultHeaders();
  }

  // POST request
  // Example: api.post('/users', { email: 'foo@bar.co' })
  //            .then((result) => (...))
  //            .catch((error) => (...))
  //
  // Returns: a Promise
  // post(path, data) {
  //   return this.request
  //     .post(path)
  //     .send(data)
  // }

  // Set up request headers for things like Accept, API keys, etc.
  setupDefaultHeaders() {
    this.request
      .set('Accept', 'application/json')
      .set('Content-type', 'application/json')
      // .set('Accept', 'application/json')
      // .set('Accept', 'application/json')
  }

  // TODO: maybe set up an auth token?
  // setupAuthHeader(token) {
  //   this.request.set('X-API-Key', 'foobar')
  // }
}
