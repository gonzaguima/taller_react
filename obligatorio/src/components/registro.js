import React from 'react';

class Registro extends React.Component{
    constructor(props){
        super(props);

        this.user = props.user;
        this.pass = props.pass;
        this.state = {
            logged: false
        };
    }
    render() {
        return (
            <div>
                <input type=''/>
            </div>
        );
    }
}

export default Registro