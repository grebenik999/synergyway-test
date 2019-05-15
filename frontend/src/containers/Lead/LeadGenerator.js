import React, { Component } from "react";
import { Leads } from "../../components/Leads/Leads";

export default class LeadGenerator extends Component {
  state = {
    username: "",
    group: ""
  };

  handleUserNameChange = e => {
    this.setState({ username: e.target.value });
  };

  handleUserGroupChange = e => {
    this.setState({ group: e.target.value });
  };

  render() {
    if (this.props.requestMethod === "post") {
      return (
        <Leads
          requestMethod={this.props.requestMethod}
          leads={this.props.leads}
          groups={this.props.groups}
          state={this.state}
          nameChange={this.handleUserNameChange}
          groupChange={this.handleUserGroupChange}
          create={this.props.create}
          delEvent={this.props.delEvent}
          btnText={this.props.btnText}
        />
      );
    } else {
      return null;
    }
  }
}
