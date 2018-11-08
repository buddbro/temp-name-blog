import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const StyledDate = styled.h4`
    color: #bbb;
    margin-left: 0.5rem;
    font-weight: 500;
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 0.5rem;
    align-items: center;
`

const TimeToRead = styled.h4`
    color: #bbb;
    font-weight: 500;
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
            <HeaderContainer>
                <h3 style={{marginBottom: '0.1rem'}}>{node.frontmatter.title}</h3>
                <SubContainer>
                    <StyledDate>{node.frontmatter.date}</StyledDate>
                    <TimeToRead>{node.timeToRead} min read</TimeToRead>
                </SubContainer>
            </HeaderContainer>
            <p>{node.excerpt}</p>
        </Link>
    </StyledContainer>
)

export default PostListModule