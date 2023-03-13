import styled from 'styled-components'
import { useController } from 'react-hook-form'

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

const Text = ({ name, control, defaultValue = '', ...props }) => {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name, control, defaultValue })
  const errorMessage = {
    'string.empty': 'Este campo é obrigatorio ',
    'string.max': 'somente de 200 caracteres'
  }

  return (
    <TextContainer>
      <Textarea {...props} error={error} value={value} onChange={onChange} />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </TextContainer>
  )
}

export default Text
