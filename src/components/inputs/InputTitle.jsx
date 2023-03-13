import { forwardRef } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  width: 100%;
`

const InputTitle = styled.input`
  color: ${(props) => props.theme.black};
  font-size: 14.2px;
  font-weight: 700;
  width: 100%;
  border: none;
  border-radius: 3px 3px 0 0;
  padding: 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    border-radius: 25px 25px 0 0;
  }
`

const ErrorLabel = styled.span`
  color: ${(props) => props.theme.error};
  font-weight: bold;
  font-size: 10px;
  padding: 10px;
`

const Title = forwardRef(({ error, ...props }, ref) => {
  const errorMessage = {
    'string.empty': 'Este campo é obrigatorio ',
    'string.max': 'somente 20 caracteres'
  }
  return (
    <InputContainer>
      <InputTitle {...props} ref={ref} error={error} />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </InputContainer>
  )
})

export default Title
