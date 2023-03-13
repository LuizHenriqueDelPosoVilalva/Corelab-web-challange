import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: end;
`

const StyledButton = styled.button`
  font-size: 13px;
  font-weight: bold;
  border-radius: 3px;
  color: ${(props) => props.theme.black};
  border: none;
  background-color: ${(props) => props.theme.white};
  padding: 10px;
  cursor: pointer;
`

const Button = ({ children, ...props }) => {
  return (
    <StyledContainer>
      <StyledButton {...props}>{children}</StyledButton>
    </StyledContainer>
  )
}

export default Button
