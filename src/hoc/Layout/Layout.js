import React, { Component } from 'react';
import Aux from '../Auxilliary/Auxilliary';
import Header from '../../container/header/Header';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Header />
                <main>{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout;