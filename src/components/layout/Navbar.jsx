import styled from 'styled-components'

import H4 from '../typhograhy/H4'

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  height: 57px;
  width: 100%;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 1px 7px;
`

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 20px;
`

const Icon = styled.div`
  background-image: url('/image 8.png');
  width: 36.31px;
  height: 36.31px;

  @media (max-width: 390px) {
    display: none;
  }
`

const StyledTitle = styled(H4)`
  color: ${(props) => props.theme.gray};
`

const StyledInput = styled.input`
  width: 530.17px;
  height: 28px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 3px;
  padding: 0 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  @media (max-width: 730px) {
    width: 300px;
  }

  @media (max-width: 500px) {
    width: 200px;
  }
`

const Input = styled.div`
  display: flex;
`

function Navbar() {
  return (
    <StyledNavbar>
      <StyledContent>
        <Icon />
        <StyledTitle>CoreNotes</StyledTitle>
      </StyledContent>
      <Input>
        <StyledInput placeholder="Pesquisar notas" />
      </Input>
    </StyledNavbar>
  )
}

export default Navbar
