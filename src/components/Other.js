import React, { Component } from 'react';

class Other extends Component {

    formatName(user) {
        return user.firstName + ' ' + user.lastName;
    }

    user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    render() {
        return (
            <h1>
                Hello, {this.formatName(this.user)}!
            </h1>
        );
    }
}

export default Other;
