import styled from 'styled-components'
import { useController } from 'react-hook-form'

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

const Title = ({ name, control, defaultValue = '', ...props }) => {
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name, control, defaultValue })
  const errorMessage = {
    'string.empty': 'Este campo é obrigatorio ',
    'string.max': 'somente 20 caracteres'
  }
  return (
    <InputContainer>
      <InputTitle {...props} error={error} value={value} onChange={onChange} />
      {error && <ErrorLabel>{errorMessage[error.type] || error.message}</ErrorLabel>}
    </InputContainer>
  )
}

export default Title
