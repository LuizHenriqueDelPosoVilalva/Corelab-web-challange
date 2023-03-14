import styled from 'styled-components'
import axios from 'axios'
import useSWR from 'swr'

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

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const fetcher = (url) => axios.get(url).then((res) => res.data)

export default function HomePage() {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, fetcher)

  return (
    <>
      <Navbar />
      <CreatedPost />
      <Container>
        <Titles>Favoritos</Titles>
        <Titles>Outras</Titles>
        <PostContainer>
          {data?.map((post) => (
            <Post key={post._id} title={post.title} textArea={post.textArea} />
          ))}
        </PostContainer>
      </Container>
    </>
  )
}
