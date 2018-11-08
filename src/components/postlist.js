import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PostListModule from './postlistmodule'

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
                            fields {
                                slug
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            data.allMarkdownRemark.edges.map(({node}) => (
                <>
                <PostListModule key={node.id} node={node} />                    
                </>
            ))
        )}
    />
)

export default PostList