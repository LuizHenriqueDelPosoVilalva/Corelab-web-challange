import styled from 'styled-components'

import H4 from '../typhograhy/H4'

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

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.border};
`

const Text = styled.div`
  display: flex;
  align-items: center;
`

const StyledText = styled.div`
  font-size: 13px;
  padding: 10px;
`

function Post({ title, textArea }) {
  return (
    <StyledContainer>
      <StyledTitle>
        <H4>{title}</H4>
      </StyledTitle>
      <Text>
        <StyledText>{textArea}</StyledText>
      </Text>
    </StyledContainer>
  )
}

export default Post
