import styled from 'styled-components'

import Navbar from '../src/components/layout/Navbar'
import CreatedPost from '../src/components/card/CreatedPost'
import Container from '../src/components/layout/Container'
import H6 from '../src/components/typhograhy/H6'
import Post from '../src/components/card/Post'

const Titles = styled(H6)`
  padding: 8px 0;
`

const PostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 30px;
`

export default function HomePage() {
  return (
    <>
      <Navbar />
      <CreatedPost />
      <Container>
        <Titles>Favoritos</Titles>
        <Titles>Outras</Titles>
        <PostContainer>
          <Post />
          <Post />
          <Post />
        </PostContainer>
      </Container>
    </>
  )
}
