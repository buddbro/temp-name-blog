import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import PostListModule from './postlistmodule'

const Title = styled.h3`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const StyledDate = styled.div`
    color: #bbb;
    font-size: 18px;
    margin-left: 0.5rem;
`

const PostList = () => (
    <StaticQuery
        query={graphql`
            {
                allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
                    edges {
                        node {
                            frontmatter {
                                title
                                date
                            }
                            excerpt
                            timeToRead
                            html
                        }
                    }
                }
            }
        `}
        render={data => (
            data.allMarkdownRemark.edges.map(({node}) => (
                <>
                <PostListModule key={node.id}>
                    <Title>
                        {node.frontmatter.title}
                        <StyledDate>- {node.frontmatter.date}</StyledDate>
                    </Title>
                    <p>{node.excerpt}</p>
                </PostListModule>
                </>
            ))
        )}
    />
)

export default PostList