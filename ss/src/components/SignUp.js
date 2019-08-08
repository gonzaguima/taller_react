import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import { signUpUser } from './../services/index'

class SignUp extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                isLogged: true,
                name: '',
                password: '',
                confirmPassword: '',
                email: ''
            }
        }

        handleChange = (event) => {
            const name = event.target.name;
            this.setState({ [name]: event.target.value });
        }

        onSubmit = (event) => {
            event.preventDefault();
            const { name, email, password, confirmPassword } = this.state;
            if (password !== confirmPassword) {
                this.setState({password: '', confirmPassword: ''})
                return;
            }

            signUpUser({name, email, password}).then(result => {
                alert(`Success! ${result}`)
            }).catch(err => {
                alert(`Error ${err}`)
            });
        }

        render() {
            return (
                this.state.isLogged ? <Redirect to='/' />
                    : <div>
                        <form>
                            <div>
                                <label>Nombre</label>
                                <input required type='text' name='name' value={this.state.name} />
                            </div>
                            <div>
                                <label>Email</label>
                                <input required type='email' name='email' value={this.state.email} />
                            </div>
                            <div>
                                <label>Contraseña</label>
                                <input required type='password' name='password' value={this.state.password} />
                            </div>
                            <div>
                                <label>Confirmar Contraseña</label>
                                <input required type='text' name='password' value={this.state.confirmPassword} />
                            </div>
                            <input type='submit' value='submit' />
                        </form>
                    </div>
            )
        }
    }

export default SignUp;