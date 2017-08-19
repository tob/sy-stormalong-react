// import API from '../api/client'
import request from 'superagent'

export const FETCHED_ARTICLES = 'FETCHED_ARTICLES'

const RAILS_HOST = 'https://stormalong.herokuapp.com/api'

export default () => {
  return (dispatch) => {request.get(RAILS_HOST + '/articles.json')
    .set('Accept', 'application/json')
    .then((response) => {
      console.log(response.body);
      dispatch({
            type: FETCHED_ARTICLES,
            payload: response.body
          });
        })
      }
}
