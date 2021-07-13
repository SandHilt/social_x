import { ReactElement } from 'react'
import styled from 'styled-components'

const Box = styled.section`
  background-color: #fff;
  border-radius: 0.5rem;
`

const MainGrid = styled.main`
  display: grid;
  grid-gap: 10px;
  padding: 16px;

  @media (min-width: 860px) {
    grid-template-areas: 'profile welcome profileRelations';
    grid-template-columns: 160px 1fr 312px;
  }
`

const Profile = styled.section`
  grid-area: profile;
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
