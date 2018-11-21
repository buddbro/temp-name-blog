import React from 'react'
import { Link } from 'gatsby';

class MenuItem extends React.Component {
    render() {
        return(
            <h3
            style={{paddingRight: '2rem'}}>
                <Link
                    to={this.props.page}
                    style={{
                        textDecoration: 'none',
                    }}
                >
                {this.props.title}
                </Link>
            </h3>
        )
    }
}

export default MenuItem