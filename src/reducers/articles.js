import { FETCHED_ARTICLES } from '../actions/fetch'

export default (state = [], {type, payload} = {}) => {
  switch (type) {
    case FETCHED_ARTICLES :
      return [...payload]

    default :
      return state
  }
}
