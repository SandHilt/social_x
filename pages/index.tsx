import { ReactElement } from 'react'
import styled from 'styled-components'

const Box = styled.section`
  background-color: #fff;
  border-radius: 0.5rem;
`

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;

  margin-left: auto;
  margin-right: auto;
  max-width: 500px;

  padding: 16px;

  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: 'profile welcome profileRelations';
    grid-template-columns: 160px 1fr 312px;
  }
`

const Profile = styled.section`
  grid-area: profile;
  display: none;
  @media (min-width: ${({ theme }) => theme.sizes.mobile}) {
    display: block;
  }
`
const Welcome = styled.section`
  grid-area: welcome;
`
const ProfileRelations = styled.section`
  grid-area: profileRelations;
`

export default function Home(): ReactElement {
  return (
    <MainGrid>
      <Profile>
        <Box>Imagem</Box>
      </Profile>
      <Welcome>
        <Box>Bem vindo</Box>
      </Welcome>
      <ProfileRelations>
        <Box>Pessoas da Comunidade</Box>
        <Box>Comunidades</Box>
      </ProfileRelations>
    </MainGrid>
  )
}
