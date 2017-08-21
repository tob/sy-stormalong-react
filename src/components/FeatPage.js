import React, { PureComponent } from 'react'
import renderHTML from 'react-render-html';
import { Flex, Box } from 'reflexbox'
import Gallery from './Gallery'

export class FeatPage extends PureComponent {

  render() {
    const { id, title, body, photos } = this.props.article
    if (!id) return null

    return(
      <div>

      <Flex
        wrap
        w={1}
        style={{ height: '100%' }}
        justify='center' >
        <Box w={[ 1, 1/2, 1/2]} px={1}  >
          <h3>{title}</h3>
          {renderHTML(body)}
        </Box>
        <Box w={[ 1, 1/2, 1/2]}>
          <Gallery images={photos} />
        </Box>
      </Flex>



      </div>
     )
  }
}

export default FeatPage
