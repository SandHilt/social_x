import { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'

const Container = styled.main`
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

interface MainGridProps {
  children: ReactNode
}

export default function MainGrid({ children }: MainGridProps): ReactElement {
  return <Container>{children}</Container>
}
