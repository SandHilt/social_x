import { ReactElement } from 'react'
import styled from 'styled-components'

import { Box, MainGrid } from '../src/components'

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
        <Box>
          <img
            src="https://github.com/sandhilt.png"
            alt="Minha foto de perfil"
          />
        </Box>
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
