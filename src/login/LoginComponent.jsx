import React, { Component } from 'react';
import PropTypes from 'prop-types'

class LoginComponent extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }

    onClickEvent = () => {
        this.props.clickLogin('test', 'test');
    }
    render() {
        const status = this.props.show_spinner === true ? 'Loading' : 'not loading';
        return (
            <div>
                test
                <button onClick={this.onClickEvent}>Click</button>
                {status}
            </div>
        );
    }
}

LoginComponent.propTypes = {
    show_spinner: PropTypes.bool.isRequired,
    user: PropTypes.array.isRequired,
    errors: PropTypes.array.isRequired
};

export default LoginComponent;