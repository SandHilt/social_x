import styled from 'styled-components'

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 0.625rem;

  margin-left: auto;
  margin-right: auto;
  max-width: 500px;

  padding: 16px;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: 'profile welcome profileRelations';
    grid-template-columns: 160px 1fr 312px;
  }
`

export default MainGrid
