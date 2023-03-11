import styled from 'styled-components'

const PostContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  width: 530.17px;
  border-radius: 3px;
`

const StyledInputTitle = styled.input`
  color: ${(props) => props.theme.black};
  font-size: 14.2px;
  font-weight: 700;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding: 10px;
  box-sizing: border-box;
`

const StyledText = styled.textarea`
  resize: none;
  width: 100%;
  padding: 10px;
  border: none;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
`

function CreatedPost() {
  return (
    <PostContainer>
      <StyledInputTitle placeholder="Título" />
      <StyledText placeholder="Sua tarefa" />
    </PostContainer>
  )
}

export default CreatedPost
