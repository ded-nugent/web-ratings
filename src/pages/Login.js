import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import Container from "../components/Container/Index";
import './pages.css';
import Cookies from 'js-cookie';
import API from "../utils/API";
import { Base64 } from 'js-base64';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            encrypted: '',
    };  

    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    };

    encrypt_password = () => {
        let temp = Base64.encode(this.state.encrypted);
        this.setState({ password: temp });
      }
    decrypt_password = () => {
        let temp = Base64.decode(this.state.password);
        this.setState({ password: temp });
      }

    handleChange(event) {
        this.setState({
            username: event.target.value,        
            
        });
        
    };

    handlePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit(event){
        //.GET password from database for this.state.name
        //check that this.state.password === password in database
        event.preventDefault();
        let userlogged
        this.decrypt_password()
        API.getWebsites()
        .then(res => {
            res.data.map(user => {
                if (user.username === this.state.username && user.password === this.state.password) {
                    console.log("yes")
                    userlogged = Cookies.set('loggedIn', user.username)
                }
                return userlogged
            })
        }        
        )
        .catch(err => console.log(err));
        console.log(userlogged)
        // setTimeout(this.reDirect(), 2000)
    };
    
    reDirect = () => {
        window.location.href = "/home";
     }
    
    render() {

        return (
            <Container>
                <div className="pure-g center">
                    <form id="loginForm" className="l-box pure-u-1 pure-u-md-1-1 pure-u-lg-1-1" onSubmit ={this.handleSubmit}>
                        <h4>User Name</h4>
                        <Input type ='text' value={this.state.name} onChange={this.handleChange}></Input>
                        <h4>Password</h4>
                        <Input type = 'text' value={this.state.password} onChange ={this.handlePassword}></Input>
                        <FormBtn>Submit</FormBtn>
                    </form>
                <div className="pure-g center">
                    <div className="l-box pure-u-1 pure-u-md-1-1 pure-u-lg-1-1" id="register">
                        <a id="account" href="/newUser">Click Here</a> to create account.</div>              
                    </div>
                </div>
            </Container>   
            
        );
    }

}

export default Login;