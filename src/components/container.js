import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    margin: 3rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
`

const Container = ({children}) => (
    <StyledContainer>
        {children}
    </StyledContainer>
)

export default Container