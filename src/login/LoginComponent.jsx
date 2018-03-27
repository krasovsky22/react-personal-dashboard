import React, { Component } from 'react';

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

export default LoginComponent;