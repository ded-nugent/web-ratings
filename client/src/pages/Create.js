import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, FormBtn, TextArea } from "../components/Form";
import API from "../utils/API";
import './pages.css';
import Cookies from 'js-cookie';

class Create extends Component {

    state = {
        websites: [],
        title: "",
        URL: "",
        thumbnail: "",
        category: "",
        summary: "",
        user: "",
        password: "",
        userObject: "",
        useWebsites: []
    };

    componentDidMount = () => {
        this.getUserData()
        this.findUserData()
      }

    getUserData = () => {
        this.setState({user:Cookies.get('loggedIn')})
    }

    findUserData = () => {
        let userLogged
        let userPass
        let userSites = []
        API.getWebsites()
        .then(res => {
            res.data.map(user => {
                if (user.username === this.state.user) {
                    userLogged = user
                    userSites = user.websites
                    userPass = user.password
                    this.setState({userObject: userLogged, websites: userSites, password: userPass})
                }
                return {userLogged, userSites, userPass}
            })
        }        
        )
        .catch(err => console.log(err));
    }


    handleInputChange = event => {
        const { name, value } = event.target;
            this.setState({
            [name]: value
            });
        };
    
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.URL && this.state.thumbnail) {
            API.saveWebsite({
                username: this.state.user,
                password: this.state.password,
                websites: [{
                    title: this.state.title,
                    URL: this.state.URL,
                    thumbnail: this.state.thumbnail,
                    summary: this.state.summary,
                    category: this.state.category,
                    date: new Date(Date.now()),
                    rating: 0, 
                    visits: 0,
                    comments: []
                }]
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
            // window.location.reload()
        }
        
    };
      
    clearForm = () => {
        window.location.reload()
    }


    render() {
        return (
            <div>
                <div className="pure-g center">
                    <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
                        <form id="createForm">
                            <h4>Website Name</h4>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Title (required)"
                            />
                            <h4>Website Link</h4>
                            <Input
                                value={this.state.URL}
                                onChange={this.handleInputChange}
                                name="URL"
                                placeholder="URL (required)"
                            />
                            <h4>Website Thumbnail</h4>
                            <Input
                                value={this.state.thumbnail}
                                onChange={this.handleInputChange}
                                name="thumbnail"
                                placeholder="Thumbnail (required)"
                            />
                            <h4>Website Category</h4>
                            <select
                                id="categoryCreate" 
                                name="category"
                                value={this.state.category}
                                onChange={this.handleInputChange}>
                                <option value="" disabled>Categories</option>
                                <option value="News" >News</option>
                                <option value="Sports">Sports</option>
                                <option value="Social">Social</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Travel">Travel</option>
                                <option value="Search">Search</option>
                                <option value="Video">Video</option>
                            </select>
                            <h4>Website Description</h4>
                            <TextArea
                                value={this.state.summary}
                                onChange={this.handleInputChange}
                                name="summary"
                                placeholder="Summary (Optional)"
                            />
                            <FormBtn
                                onClick={this.handleFormSubmit}
                            >
                                Create
                            </FormBtn>
                        </form>
                    </div>
                    <div className="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3 userSites">
                        <div id="siteView">
                            <h2 id="postedSites-title">Websites You have Posted:</h2>
                            <p id="postedSites-p">click website to go to detail page</p>
                            
                                {this.state.websites.map(website => (
                                    <h3 
                                    key={website.title} 
                                    className="postedSites-item">
                                        <Link to={"/websites/" + website.title}>
                                            {website.title}
                                        </Link> - Rating: {website.rating}
                                    </h3>
                                ))}
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;