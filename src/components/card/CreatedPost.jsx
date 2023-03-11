import styled from 'styled-components'

import InputTitle from '../inputs/InputTitle'
import Textarea from '../inputs/Textarea'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`

const PostContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 530.17px;
  border-radius: 3px;

  @media (max-width: 600px) {
    border-radius: 25px;
  }
`

function CreatedPost() {
  return (
    <StyledContainer>
      <PostContainer>
        <InputTitle placeholder="Título" />
        <Textarea placeholder="Sua tarefa" />
      </PostContainer>
    </StyledContainer>
  )
}

export default CreatedPost
