import API from '../api'
import request from 'superagent'

export const FETCHED_ARTICLES = 'FETCHED_ARTICLES'

const RAILS_HOST = 'http://localhost:3000'

export default () => {
  return request.get(RAILS_HOST + '/articles', function(response){
    console.log('Response ok:', response.ok);
    console.log('Response text:', response.text);
  });
//     .then((result) => {
//       console.log(result)
//       // dispatch({
//       //   type: FETCHED_ARTICLES,
//       //   payload: result.data
//       // })
//     })
//     .catch((error) => {
//       console.log(error)
//     })

}

// api.post('/users', { email: 'foo@bar.co' })
//       .then((result) => (...))
//         .catch((error) => (...))
//   // Returns: a Promise
//   post(path, data) {
//     return this.request
//       .post(path)
//       .send(data)
//   }
