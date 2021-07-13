import { ReactElement, useState } from 'react'
import styled from 'styled-components'

import { Box, MainGrid } from '../src/components'

const Profile = styled.section`
  grid-area: profile;
  display: none;
  @media (min-width: ${({ theme }) => theme.sizes.mobile}px) {
    display: block;
  }
`
const Welcome = styled.section`
  grid-area: welcome;
`
const ProfileRelations = styled.section`
  grid-area: profileRelations;
`

const ProfileImage = styled.img`
  border-radius: ${({ theme }) => theme.sizes.borderRadius}px;
`

interface ProfileSidebarProps {
  gitHubUser: string
}

function ProfileSidebar({ gitHubUser }: ProfileSidebarProps): ReactElement {
  return (
    <Box>
      <ProfileImage
        src={`https://github.com/${gitHubUser}.png`}
        alt="Minha foto de perfil"
      />
    </Box>
  )
}

export default function Home(): ReactElement {
  const [gitHubUser] = useState('sandhilt')

  return (
    <MainGrid>
      <Profile>
        <ProfileSidebar {...{ gitHubUser }} />
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
