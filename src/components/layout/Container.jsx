import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @media (max-width: 1000px) {
    padding: 10px;
  }
`
const StyledChildren = styled.div`
  max-width: 1100px;
  width: 100%;
`

function Container({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default Container
