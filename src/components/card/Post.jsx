import styled from 'styled-components'

import InputTitle from '../inputs/InputTitle'
import Textarea from '../inputs/Textarea'

const StyledContainer = styled.div`
  width: 390px;
  height: 437.59px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
  border-radius: 25px;

  @media (max-width: 400px) {
    width: 250px;
  }
`
const StyledInputTitle = styled(InputTitle)`
  border-radius: 25px 25px 0 0;
`

function Post() {
  return (
    <StyledContainer>
      <StyledInputTitle placeholder="Título" />
      <Textarea placeholder="Sua tarefa" />
    </StyledContainer>
  )
}

export default Post
