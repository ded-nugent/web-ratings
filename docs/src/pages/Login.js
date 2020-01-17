import React, { Component } from "react";
import { Input, FormBtn } from "../components/Form";
import Container from "../components/Container/Index";
import './pages.css';
import Cookies from 'js-cookie';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
           
    };
        

    this.handleChange = this.handleChange.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  
    };

    handleChange(event) {
        this.setState({
            name: event.target.value,        
            
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
        
        Cookies.set('loggedIn',this.state.name)
        
    };
    componentDidMount = () => {
        this.getUserData()   
    }
    getUserData = () => {
        alert(Cookies.get('loggedIn'))
    }

   

    render() {

        return (
            
            <Container>
                <div className="pure-g center">
                    <form id="loginForm" className="l-box pure-u-1 pure-u-md-1-1 pure-u-lg-1-1" onSubmit ={this.handleSubmit}>
                        <h4>User Name</h4>
                        <Input type ='text' value ={this.state.name} onChange={this.handleChange}></Input>
                        <h4>Password</h4>
                        <Input type = 'text' value ={this.state.password} onChange ={this.handlePassword}></Input>
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