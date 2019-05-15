import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LeadGenerator from "./containers/Lead/LeadGenerator";
import LeadDetail from "./containers/Lead/LeadDetail";
import GroupGenerator from "./containers/Group/GroupGenerator";
import GroupDetail from "./containers/Group/GroupDetail";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";

class App extends Component {
  state = {
    leads: [],
    groups: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api-v1/people/").then(res => {
      this.setState({
        leads: res.data
      });
    });
    axios
      .get("http://127.0.0.1:8000/api-v1/group/")
      .then(res => {
        this.setState({
          groups: res.data
        });
      })
      .catch(error => console.log("Error", error));
  }

  deleteLead = (e, item) => {
    const leads = Object.assign([], this.state.leads);
    const leadID = item.lead.id;
    let index = leads.indexOf(item.lead);
    axios.delete(`http://127.0.0.1:8000/api-v1/people/${leadID}/`).then(() => {
      if (index !== -1) {
        leads.splice(index, 1);
        this.setState({ leads: leads });
      }
    });
  };

  deleteGroup = (e, item) => {
    const groups = Object.assign([], this.state.groups);
    const groupID = item.group.id;
    let index = groups.indexOf(item.group);
    axios.delete(`http://127.0.0.1:8000/api-v1/group/${groupID}/`).then(() => {
      if (index !== -1) {
        groups.splice(index, 1);
        this.setState({ groups: groups });
      }
    });
  };

  createNewLead = (e, data) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api-v1/people/", {
        username: data.username,
        group: data.group
      })
      .then(res => {
        const leads = Object.assign([], this.state.leads);
        const new_lead = res.data;
        leads.push(new_lead);
        this.setState({
          leads: leads
        });
      })
      .catch(error => console.log("leads", error));
  };

  updateLead = (e, data) => {
    e.preventDefault();
    const leadID = data.lead.id;

    axios
      .put(`http://127.0.0.1:8000/api-v1/people/${leadID}/`, {
        username: data.lead.username,
        group: data.lead.group
      })
      .then(res => {
        this.setState(prevState => {
          const lead = prevState.leads.map(item => {
            if (item.id === res.data.id) {
              item.username = res.data.username;
              item.group = res.data.group;
              item.group_name = res.data.group_name;
            } else {
              return item;
            }
            return item;
          });
          return lead;
        });
      })
      .catch(error => console.log("Error", error));
  };

  createGroup = (e, data) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api-v1/group/", {
        name: data.nameGroup,
        description: data.descriptionGroup
      })
      .then(res => {
        const groups = Object.assign([], this.state.groups);
        const new_group = res.data;
        groups.push(new_group);
        this.setState({
          groups: groups
        });
      })
      .catch(err => console.error(err));
  };

  updateGroup = (e, data) => {
    e.preventDefault();
    const groupID = data.group.id;
    axios
      .put(`http://127.0.0.1:8000/api-v1/group/${groupID}/`, {
        name: data.group.name,
        description: data.group.description
      })
      .then(res => {
        this.setState(prevState => {
          const group = prevState.groups.map(item => {
            if (item.id === res.data.id) {
              item.name = res.data.name;
              item.description = res.data.description;
            } else {
              return item;
            }
            return item;
          });
          return group;
        });
      });
  };

  render() {
    return (
      <Router>
        <Navbar />
        <Route
          exact
          path="/"
          render={() => (
            <LeadGenerator
              requestMethod="post"
              leads={this.state.leads}
              groups={this.state.groups}
              id={null}
              delEvent={this.deleteLead}
              create={this.createNewLead}
              btnText="Create"
            />
          )}
        />
        <Route
          path="/groups"
          render={() => (
            <GroupGenerator
              groups={this.state.groups}
              delGroup={this.deleteGroup}
              requestMethod="post"
              btnText="Create Group"
              createGroup={this.createGroup}
            />
          )}
        />
        <Route
          path="/lead/:number"
          render={props => (
            <LeadDetail
              leads={this.state.leads}
              lead={this.state.lead}
              groups={this.state.groups}
              requestMethod="put"
              redirect={this.state.redirect}
              updateLead={this.updateLead}
              {...this.props}
              {...props}
            />
          )}
        />

        <Route
          path="/group/:number"
          render={props => (
            <GroupDetail
              requestMethod="put"
              updateGroup={this.updateGroup}
              {...props}
              {...this.props}
            />
          )}
        />
      </Router>
    );
  }
}
export default App;
