import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 390px;
  height: 437.59px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`

function Post() {
  return <StyledContainer>ola</StyledContainer>
}

export default Post
