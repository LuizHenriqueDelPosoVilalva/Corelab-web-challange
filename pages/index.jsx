import styled from 'styled-components'

import Navbar from '../src/components/layout/Navbar'
import CreatedPost from '../src/components/inputs/CreatedPost'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export default function HomePage() {
  return (
    <>
      <Navbar />
      <StyledContainer>
        <CreatedPost />
      </StyledContainer>
    </>
  )
}
