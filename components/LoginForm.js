import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class LoginForm extends React.Component {

    state = {
        email: '',
        password: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div class="login-form">
                <div class="row">
                    <div class="col-6">
                <div class="card-body">
                    <form onSubmit={ this.handleSubmit }>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" name="email" onChange={ this.handleChange } placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" name="password" class="form-control" id="floatingPassword" onChange={ this.handleChange } placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div> 
<button class="btn btn-primary" type="submit">Login</button>
            </form> 
                </div>
            </div>
                </div>
            </div> 
        )
    }
}

export default LoginForm;