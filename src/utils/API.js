import axios from "axios";

export default {
  // Gets all websites
  getWebsites: function() {
    return axios.get("/api/websites/");
  },
  // Gets the website with the given id
  getWebsite: function(id) {
    return axios.get("/api/websites/" + id);
  },
  // Deletes the website with the given id
  deleteWebsite: function(id) {
    return axios.delete("/api/websites/" + id);
  },
  // Saves a website to the database
  saveWebsite: function(websiteData) {
    return axios.post("/api/websites/", websiteData);
  },

  updateWebsite: function(id, websiteData) {
    return axios.put("/api/websites/" + id, websiteData);
  },

  findWebsite: function(title) {
    return axios.get("/api/websites/" + title);
  },

};
