import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledContainer = styled.div`
    margin: 3rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

const Container = ({children}) => (
    <StyledContainer>
        {children}
    </StyledContainer>
)

Container.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Container