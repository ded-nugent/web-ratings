import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import Container from "../components/Container/Index";
import './pages.css';
import Cookies from "js-cookie"
import API from "../utils/API";
import { Base64 } from 'js-base64';


class Newuser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            rePassword: '',
            encrypted: '',
        };

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleRePassword = this.handleRePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    encrypt_password = () => {
        let temp = Base64.encode(this.state.password);
        this.setState({ encrypted: temp });
        console.log(temp)
      }
    decrypt_password = () => {
        let temp = Base64.decode(this.state.encrypted);
        this.setState({ encrypted: temp });
      }
   
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
        }else if(this.state.password.length < 8){
            alert('Failed to create account: Password must be at least 8 characters')
        }
        else{
            //POST User to database
            this.encrypt_password()
            API.saveWebsite({
                username: this.state.username,
                password: this.state.encrypted,
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
            alert('Account created  Logged in as: ' + this.state.encrypted)
            Cookies.set('loggedIn', this.state.username)   
        }

        event.preventDefault()
    }

    render() {
        return (
            <Container>
                <div className="pure-g center">
                    <form id="userForm" onSubmit = {this.handleSubmit}>
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