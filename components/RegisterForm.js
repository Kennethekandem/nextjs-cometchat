import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { registerUser } from '../lib/auth'

class RegisterForm extends React.Component {

    state = {
        name: ''
    };

    handleChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const name = this.state.name;
        const uid = name.replace(/\s/g, '');

        let response = await registerUser(uid, name);
        localStorage.setItem('user', JSON.stringify(response.data.data));
        console.log(response);
    }

    render() {
        return (
            <div class="login-form">
                <div class="row">
                    <div class="card col-10 col-sm-4">
                        <div class="card-body">
                            <form onSubmit={ this.handleSubmit }>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" name="name" onChange={ this.handleChange } placeholder="Enter name" />
                                    <label for="floatingInput">Name</label>
                                </div>
                                 <div class="d-grid gap-2 mt-4">
                                    <button class="btn btn-primary btn-lg" type="submit">
                                    Register
                                    </button>
                                </div>
                            </form> 
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default RegisterForm;