import styled from 'styled-components'

const InputTitle = styled.input`
  color: ${(props) => props.theme.black};
  font-size: 14.2px;
  font-weight: 700;
  width: 100%;
  border: none;
  border-radius: 3px 3px 0 0;
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    border-radius: 25px 25px 0 0;
  }
`
export default InputTitle
