import styled from 'styled-components'

const Textarea = styled.textarea`
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

export default Textarea
