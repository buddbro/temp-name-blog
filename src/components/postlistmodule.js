import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

const Title = styled.h3`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const StyledDate = styled.div`
    color: #bbb;
    font-size: 18px;
    margin-left: 0.5rem;
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
    align-items: center;
`

const TimeToRead = styled.div`
    background: #f0f0f0;
    font-size 16px;
    color: #bbb;
    border-radius: 3px;
    padding: 0.1rem;
    margin-left: 1rem;
`

const StyledContainer = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
`

const PostListModule = ({node}) => (
    <StyledContainer>
        <Link
            to={node.fields.slug}
            style={{textDecoration: 'none', color: 'inherit'}}>
            <Title>
                {node.frontmatter.title}
                <SubContainer>
                    <StyledDate>- {node.frontmatter.date}</StyledDate>
                    <TimeToRead>{node.timeToRead}m</TimeToRead>
                </SubContainer>
            </Title>
            <p>{node.excerpt}</p>
        </Link>
    </StyledContainer>
)

export default PostListModule