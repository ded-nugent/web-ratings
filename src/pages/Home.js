import React, { Component } from "react";
import Module from "../components/module/Index"
import Filter from "../components/Filter/Index"
import Container from "../components/Container/Index";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Cookies from "js-cookie"

class Home extends Component {
    state = {
        websites: [],
        filteredSites: [],
        options: "",
        category: "",
        web_id: "",
        user: ""
    };

    
    
    componentDidMount = () => {
        this.loadWebsites();
        this.selectedBoxes = new Set();
        this.getUserData()
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        for (const box of this.selectedBoxes) {
            console.log(box, 'is chosen');
        }
    }

    //retrieve website data from API
    loadWebsites = () => {
        let allSites = []
        API.getWebsites()
        .then(res => {
            console.log(res.data)
            for (let i= 0; i < res.data.length; i++){
                    res.data[i].websites.map(website => {
                    console.log(website)
                    allSites.push(website)
                    return allSites
                    } )
                }
            this.setState({ websites: allSites, filteredSites: allSites })
        }
        
        )
        .catch(err => console.log(err));
    };
    //retrieve username from cookies
    getUserData = () => {
        this.setState({user:Cookies.get('loggedIn')})
    }


    
    //functionality for applying filters
    applyFilters = () => {
        let filterArray = []
        let hasCategory = false
        let hasCheck = false
        
        if (this.state.category === "Search") {
            filterArray.push("Search")
            hasCategory = true
        }
        if (this.state.category === "Sports") {
            filterArray.push("Sports")
            hasCategory = true
        }
        if (this.state.category === "News") {
            filterArray.push("News")
            hasCategory = true
        }
        if (this.state.category === "Social") {
            filterArray.push("Social")
            hasCategory = true
        }
        if (this.state.category === "Travel") {
            filterArray.push("Travel")
            hasCategory = true
        }
        if (this.state.category === "Shopping") {
            filterArray.push("Shopping")
            hasCategory = true
        }
        if (this.state.options === "Highest Rated") {
            filterArray.push("Highest Rated")
            hasCheck = true 
        }
        if (this.state.options === "Popular") {
            filterArray.push("Popular")
            hasCheck = true
        }
        if (this.state.options === "New") {
            filterArray.push("New")
            hasCheck = true
        }
        if (this.state.options === "Video") {
            filterArray.push("Video")
            hasCheck = true
        }
        if (hasCategory === true && hasCheck === false) {
            let categoryArray = this.state.websites.filter(website => website.category === filterArray[0])
            this.setState({ filteredSites: categoryArray})
        }
        if (hasCategory === false && hasCheck === true) {
            let sortedArray = []
            if (filterArray[0] === "Highest Rated") {
                sortedArray = this.state.websites.sort((a,b) => (b.rating - a.rating))
                this.setState({ filteredSites: sortedArray})
            }
            else if (filterArray[0] === "Popular") {
                sortedArray = this.state.websites.sort((a,b) => (b.visits - a.visits))
                this.setState({ filteredSites: sortedArray})
            }
            else if (filterArray[0] === "New") {
                console.log("yes")
                sortedArray = this.state.websites.sort((a,b) => 
                {
                    let dateA = new Date(a.date);
                    let dateB = new Date(b.date);
                    return dateB - dateA; 
                    
                })
                this.setState({ filteredSites: sortedArray})
            }
        }
        if (hasCategory === true && hasCheck === true) {
            let sortedArray = []
            let categoryArray = this.state.websites.filter(website => website.category === filterArray[0])
            if (filterArray[1] === "Highest Rated") {
                sortedArray = categoryArray.sort((a,b) => (b.rating - a.rating))
                this.setState({ filteredSites: sortedArray})
            }
            else if (filterArray[1] === "Popular") {
                sortedArray = categoryArray.sort((a,b) => (b.visits - a.visits))
                this.setState({ filteredSites: sortedArray})
            }
            else if (filterArray[1] === "New") {
                sortedArray = categoryArray.sort((a, b) => {
                    let dateA = new Date(a.date);
                    let dateB = new Date(b.date);
                    return dateB - dateA; 

                })
                this.setState({ filteredSites: sortedArray})
            }
            
        }
    }
    
    removeFilter = () => {
        window.location.reload();
    }

    recordVisit = (website) => {
        let title = website.website.title
        let visitCount = website.website.visits + 1 
        API.getWebsites()
        .then(res => {
                for (let i= 0; i < res.data.length; i++){
                    for (let j= 0; j < res.data.length; j++) {
                        if (res.data[i].websites[j].title === title){
                            console.log(res.data[i].websites[j])
                            API.updateWebsite(res.data[i].id, {visits: visitCount})
                            .then( res => console.log(res.data)
                            )
                            .catch(err => console.log(err));
                            }
                        }
                    }
                })
        .catch(err => console.log(err));
        // let visitCount = website.website.visits + 1 
        // API.updateWebsite(this.state.web_id, {visits: visitCount})
        // .then( res => console.log(res.data)
        // )
        // .catch(err => console.log(err));
        // window.location.reload();
    }

    render() {
        return (
            <Container>
                <Filter>
                    <label className="filter-item">Options:</label>
                    <select id="options" name="options" className="filter-item"
                    onChange={this.handleInputChange}>
                        <option value="" disabled>Categories</option>
                        <option defaultValue="" ></option>
                        <option value="Highest Rated">Highest Rated</option>
                        <option value="Popular">Popular</option>
                        <option value="New">New</option>
                        
                    </select>
                    <label className="filter-item">Category:</label>
                    <select id="category" name="category" className="filter-item"
                    onChange={this.handleInputChange}>
                        <option value="" disabled>Categories</option>
                        <option defaultValue="" ></option>
                        <option value="News" >News</option>
                        <option value="Sports">Sports</option>
                        <option value="Social">Social</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Travel">Travel</option>
                        <option value="Search">Search</option>
                        <option value="Video">Video</option>
                    </select>
                    <button className="pure-button pure-button-primary filter-item" onClick={this.applyFilters} type="submit">Apply</button>
                    <button className="pure-button pure-button-primary filter-item" onClick={this.removeFilter}>Reset Filters</button>

                </Filter>
                <Module>
                    <h3 className="webInfo-title">List of Websites</h3>
                    <table className="pure-table pure-table-horizontal">
                        <thead>
                            <tr>
                                <th>Website  Names</th>
                                <th>Websites Details</th>
                                <th>Website Rating</th>
                                <th>Average Daily Visits</th>
                                <th>Website Category</th>
                                <th>Website Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.filteredSites.map(website => (
                                <tr key={website.title}>
                                <td>{website.title}</td>
                                <td><Link to={"/websites/" + website.title}>click here</Link></td>
                                <td>{website.rating}</td>
                                <td>{website.visits}</td>
                                <td>{website.category}</td>
                                <td>
                                    <a 
                                        href={website.URL} 
                                        target="blank" 
                                        onClick={() => {this.recordVisit({website})}}
                                    >
                                        {website.URL}
                                    </a>
                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Module>
            </Container>
        );
    }
}

export default Home;
