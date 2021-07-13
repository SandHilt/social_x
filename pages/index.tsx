import { ReactElement } from 'react'
import styled from 'styled-components'

const Box = styled.section`
  background-color: #fff;
  border-radius: 8px;
`

export default function Home(): ReactElement {
  return (
    <main>
      <Box>Imagem</Box>
      <Box>Bem vindo</Box>
      <Box>Comunidades</Box>
    </main>
  )
}
