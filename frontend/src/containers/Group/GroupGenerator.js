import React, { Component } from "react";
import { Groups } from "../../components/Groups/Groups";

export default class GroupGenerator extends Component {
  state = {
    nameGroup: "",
    descriptionGroup: ""
  };

  handleGroupNameChange = e => {
    this.setState({ nameGroup: e.target.value });
  };

  handleGroupDescriptionChange = e => {
    this.setState({ descriptionGroup: e.target.value });
  };

  render() {
    return (
      <Groups
        groups={this.props.groups}
        state={this.state}
        requestMethod={this.props.requestMethod}
        groupNameChange={this.handleGroupNameChange}
        groupDescrChange={this.handleGroupDescriptionChange}
        createGroup={this.props.createGroup}
        delGroup={this.props.delGroup}
        btnText={this.props.btnText}
      />
    );
  }
}
