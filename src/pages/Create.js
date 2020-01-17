import React, { Component } from "react";
import { Input, FormBtn, TextArea } from "../components/Form";
import API from "../utils/API";
import './pages.css';

class Create extends Component {

    state = {
        websites: [],
        title: "",
        URL: "",
        thumbnail: "",
        category: "",
        summary: ""
    };

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
                title: this.state.title,
                URL: this.state.URL,
                thumbnail: this.state.thumbnail,
                category: this.state.category,
                summary: this.state.summary,
                rating: 0, 
                date: new Date(Date.now()),
                comments: [],
                visits: 0
            })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        window.location.reload()
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
                            <h3>Websites You have Posted</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;