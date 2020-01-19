import React, { Component } from "react";
import Container from "../components/Container/Index";
import "./pages.css";
import Cookies from "js-cookie"
// import API from "../utils/API";

class Welcome extends Component {

    state = {
        user: ""
    };

    componentDidMount = () => {
        this.getUserData()   
    }
    getUserData = () => {
        this.setState({user:Cookies.get('loggedIn')})
    }

    render() {
        return (
            <Container>
                <div className="pure-g center">
                    <div className="splash-container l-box pure-u-1 pure-u-md-1-1 pure-u-lg-1-1">
                        <div className="splash">
                            <h1 className="splash-head">Welcome to Web Rates</h1>
                                <p className="splash-subhead">
                                    Web Rates allows you to post and view websites from all over the web! 
                                    Leave your comments and ratings for the rest of the community to view!
                                </p>
                                <p>
                                <a href="/home" className="pure-button pure-button-primary">View Websites</a>
                                </p>
                        </div>
                    </div>
                </div>
            <div className="content-wrapper l-box pure-u-1 pure-u-md-1-1 pure-u-lg-1-1">
                <div className="content">
                    <h2 className="content-head is-center">Web Rates Features</h2>
                    <div className="pure-g">
                        <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <h3 className="content-subhead">
                                Easy Login
                            </h3>
                            <p>
                            Create an account or login with google
                            </p>
                        </div>
                        <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <h3 className="content-subhead">
                                Post Websites
                            </h3>
                            <p>
                            Post Your own Websites for other users to visit and rate
                            </p>
                        </div>
                        <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <h3 className="content-subhead">
                                Rate Websites
                            </h3>
                            <p>
                            Leave a rating and comment on posted websites
                            </p>
                        </div>
                        <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                            <h3 className="content-subhead">
                                Categorized
                            </h3>
                            <p>
                            Apply filters to see the highest rated and most popular sites in different categories
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        );
    }
}

export default Welcome;
