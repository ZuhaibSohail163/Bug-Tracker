import axios from "axios";
import Tickets from "views/Tickets";

const API = {
  // Gets all projects
  getProjects: function (url) {
    return fetch(url).then((res) => res.json());
  },
  // Gets the project with the given id
  getProject: function (id) {
    return axios.get("http://localhost:3001/api/projects/" + id);
  },
  getProjectUsers: function (url) {
    return fetch(url).then((res) => res.json());
  },
  getProjectTickets: function (projectId) {
    return fetch("http://localhost:3001/api/tickets/" + projectId).then((res) =>
      res.json()
    );
  },
  createProject: function (projectData) {
    return axios.post("http://localhost:3001/api/projects", projectData);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("http://localhost:3001/api/users", userData);
  },
  addContact: function (id, data) {
    return axios.put("http://localhost:3001/api/users/" + id, data);
  },
  getTicket: function (projectId, ticketId) {
    return fetch(
      `http://localhost:3001/api/tickets/${projectId}/${ticketId}`
    ).then((res) => res.json());
  },
  getTicketComments: function (ticketId) {
    return fetch(`http://localhost:3001/api/comments/${ticketId}`).then((res) =>
      res.json()
    );
  },
  getDevAssignments: function (ticketId) {
    return fetch(
      `http://localhost:3001/api/devassignments/${ticketId}`
    ).then((res) => res.json());
  },
};

export default API;
