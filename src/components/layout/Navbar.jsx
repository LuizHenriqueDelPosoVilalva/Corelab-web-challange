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
`

const StyledTitle = styled.span`
  color: ${(props) => props.theme.gray};
`

const StyledInput = styled.input`
  width: 530.17px;
  height: 28px;
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 3px;
  padding: 0 10px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
`

function Navbar() {
  return (
    <StyledNavbar>
      <StyledContent>
        <Icon />
        <H4>
          <StyledTitle>CoreNotes</StyledTitle>
        </H4>
      </StyledContent>
      <div>
        <StyledInput placeholder="Pesquisar notas" />
      </div>
    </StyledNavbar>
  )
}

export default Navbar
