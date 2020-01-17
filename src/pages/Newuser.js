import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import Container from "../components/Container/Index";
import './pages.css';

class Newuser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            rePassword: '',
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleRePassword = this.handleRePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleEmail(event) {
        this.setState({
            email: event.target.value
        })
    };
    handleUsername(event) {
        this.setState({
            username: event.target.value
        })

    };
    handlePassword(event) {
        this.setState({
            password:event.target.value
        })
    }
    handleRePassword(event) {
        this.setState({
            rePassword:event.target.value
        })
    }

    handleSubmit(event){

        if(this.state.password !== this.state.rePassword){
            alert('Failed to create account: Passwords do not match')
        }

        
        alert(this.state.email)
        alert(this.state.username)
        alert(this.state.password)
        alert(this.state.rePassword)
        event.preventDefault()
    }

    render() {
        return (
            <Container>
                <div className="pure-g center">
                    <form id="userForm" onSubmit = {this.handleSubmit}>
                        <h4>Email</h4>
                        <Input type = 'text' value ={this.state.email} onChange ={this.handleEmail}/>
                        <h4>User Name</h4>
                        <Input type = 'text' value = {this.state.username} onChange = {this.handleUsername}/>
                        <h4>Password</h4>
                        <Input type = 'text' value = {this.state.password} onChange = {this.handlePassword}/>
                        <h4>Retype Password</h4>
                        <Input type = 'text' value = {this.state.rePassword} onChange = {this.handleRePassword}/>
                        <FormBtn>Create</FormBtn>
                    </form>
                </div>
            </Container>
        );
    }
}

export default Newuser;