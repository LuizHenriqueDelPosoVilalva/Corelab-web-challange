import styled from 'styled-components'

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

const StyledInputTitle = styled.input`
  color: ${(props) => props.theme.black};
  font-size: 14.2px;
  font-weight: 700;
  width: 100%;
  border: none;
  border-radius: 3px;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    border-radius: 25px 25px 0 0;
  }
`

const StyledText = styled.textarea`
  resize: none;
  width: 100%;
  padding: 0 10px;
  border: none;
  padding: 10px;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;

  @media (max-width: 600px) {
    border-radius: 0 0 25px 25px;
  }
`

function CreatedPost() {
  return (
    <StyledContainer>
      <PostContainer>
        <StyledInputTitle placeholder="Título" />
        <StyledText placeholder="Sua tarefa" />
      </PostContainer>
    </StyledContainer>
  )
}

export default CreatedPost
