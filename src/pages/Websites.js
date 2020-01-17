import React, { Component } from "react";
import API from "../utils/API";
import { FormBtn, TextArea } from "../components/Form";
import Container from "../components/Container/Index";


class Websites extends Component {

  state = {
    website: "",
    comments: []
  };

  componentDidMount() {
    this.loadWebsites()
  }

  loadWebsites = () => {
    const title = window.location.href.split("/").pop()
    API.getWebsites()
    .then(res => {
      console.log(res.data)
        for (let i= 0; i < res.data.length; i++){
            for (let j= 0; j < res.data.length; j++) {
                if (res.data[i].websites[j].title === title){
                   this.setState({ website: res.data[i].websites[j], comments: res.data[i].websites[j].comments})
                }
            }
        }
        
    }
  )
    .catch(err => console.log(err));
};

  recordVisit = (website) => {
    let visitCount = website.visits + 1 
    API.updateWebsite(website._id, {visits: visitCount})
    .then( res => console.log(res.data)
    )
    .catch(err => console.log(err));
    window.location.reload();
}

  render() {
    return (
      <Container>
        <div className="pure-g center">
          <div className="webInfo l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
            <img src={this.state.website.thumbnail} alt="website" className="webImage"></img>
          </div>
          <div className="webInfo l-box pure-u-1 pure-u-md-1-1 pure-u-lg-1-2">
            <h1 id="webTitle">{this.state.website.title}</h1>
            <h3 className="webInfo-title">
              <a href={this.state.website.URL} target="blank" onClick={() => {this.recordVisit(this.state.website)}}>
                {this.state.website.URL}
              </a>
            </h3>
          </div>
        </div>
        <div className="pure-g center">
          <div className="webInfo l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-2">
              <h2 className="webInfo-title">Website Description</h2>
              <h3><strong>Category: </strong>{this.state.website.category}</h3>
              <h3>{this.state.website.summary}</h3>
          </div>
          <div className="webInfo l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
            <h2 className="webInfo-title">Leave a Comment</h2>
              <TextArea
                // value=""
                // onChange=""
                // name="comment"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >Comment
              </FormBtn>
          </div>
        </div>
        <div className="pure-g center">
          <div className=" webInfo l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
            <h2 className="webInfo-title">User Comments</h2>
            <h2><strong>Rating: </strong>{this.state.website.rating}/5</h2>
            {this.state.comments.map(comment => (
              <div key={comment.user} className="comments">
                <h3 >{comment.comment}</h3>
                <h3>-posted by {comment.user}</h3>
              </div>
            ))}
          </div>
        </div>
      </Container>
	);
}
}
	

export default Websites;
