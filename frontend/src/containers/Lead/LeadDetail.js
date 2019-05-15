import React, { Component } from "react";
import axios from "axios";

import { Lead } from "../../components/Leads/Lead";

class LeadDetail extends Component {
  state = {
    lead: {}
  };

  componentDidMount() {
    axios
      .get(
        `http://127.0.0.1:8000/api-v1/people/${parseInt(
          this.props.match.params.number
        )}/`
      )
      .then(res => {
        this.setState({
          lead: res.data
        });
      })
      .catch(error => {
        if (error.response.status === 404) {
          console.log("Lead status code", error.response.status);
        }
      });
  }

  handleUserNameChange = e => {
    const el = Object.assign({}, this.state.lead);
    if (el.username !== e.target.value) {
      el.username = e.target.value;
      this.setState({ lead: el });
      return el;
    }
  };

  handleUserGroupChange = e => {
    const el = Object.assign({}, this.state.lead);
    const groupID = parseInt(e.target.value);
    let name = null;

    this.props.groups.map(group => {
      if (group.id === groupID) {
        name = group.name;
      }
      return group;
    });
    if (el.group !== groupID) {
      el.group = groupID;
      el.group_name = name;
      this.setState({ lead: el });
      return el;
    }
  };

  render() {
    return (
      <Lead
        requestMethod={this.props.requestMethod}
        lead={this.state.lead}
        groups={this.props.groups}
        nameChange={this.handleUserNameChange}
        groupChange={this.handleUserGroupChange}
        state={this.state}
        username={this.state.username}
        user_group={this.state.group}
        updateLead={this.props.updateLead}
        btnText="Edit"
      />
    );
  }
}
export default LeadDetail;
