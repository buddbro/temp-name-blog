import React from 'react'

import Container from '../components/container'
import PostList from '../components/postlist'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Container>
      <PostList />
    </Container>
  </Layout>
)

export default IndexPage
