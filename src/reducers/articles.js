import { FETCHED_ARTICLES } from '../actions/fetch'

const articles = [
  // {
  //   title: 'Spanish Siesta on the sea',
  //   body: 'A traditional fish from Spanish sea called tortuga española or tortuga de patatas. It is an omelette made with eggs and potatoes, sometimes also with onion and/or chives or garlic; fried in oil and often served cold as an appetizer.',
  // },
  // {
  //   title: 'Caraibbean traditions',
  //   body: 'Let the fish wear flowers',
  // },
  // {
  //   title: 'Dance under the sea',
  //   body: 'A breathtaking experience',
  // },
  // {
  //   title: 'Actually I was on the couch in AMS in the past 18 months',
  //   body: 'All this does not exist, and neither do you',
  // }
]

export default (state = [], {type, payload} = {}) => {
  switch (type) {
    case FETCHED_ARTICLES :
      return [ ...payload ]

    default :
      return state
  }
}
