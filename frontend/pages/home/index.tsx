import { ReactNode } from 'react'

import { Container } from './styles'

interface HomeProps {
  children: ReactNode
}

function Home({ children }: HomeProps) {
  return <Container></Container>
}

export default Home
