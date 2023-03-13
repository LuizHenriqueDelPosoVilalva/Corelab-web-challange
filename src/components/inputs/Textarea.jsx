import styled from 'styled-components'
import { forwardRef } from 'react'

const TextContainer = styled.div`
  width: 100%;
`

const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  padding: 0 10px;
  border: none;
  border-top: 1px solid ${(props) => props.theme.border};
  padding: 10px;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  @media (max-width: 600px) {
    border-radius: 0 0 25px 25px;
  }
`

const ErrorLabel = styled.span`
  color: ${(props) => props.theme.error};
  font-weight: bold;
  font-size: 10px;
  padding: 10px;
`

const Text = forwardRef(({ error, ...props }, ref) => {
  const errorMessage = {
    'string.empty': 'Este campo é obrigatorio ',
    'string.max': 'somente de 200 caracteres'
  }

  return (
    <TextContainer>
      <Textarea {...props} ref={ref} error={error} />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </TextContainer>
  )
})

export default Text
