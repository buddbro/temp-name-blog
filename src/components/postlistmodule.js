import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
`

const PostListModule = ({children}) => (
    <StyledContainer>
        {children}
    </StyledContainer>
)

export default PostListModule