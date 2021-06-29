import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class RegisterForm extends React.Component {

    state = {
        name: ''
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