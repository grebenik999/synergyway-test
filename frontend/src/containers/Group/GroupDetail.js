import React, { Component } from "react";
import axios from "axios";
import { Group } from "../../components/Groups/Group";

class GroupDetail extends Component {
  state = {
    group: {}
  };

  componentDidMount() {
    axios
      .get(
        `http://127.0.0.1:8000/api-v1/group/${parseInt(
          this.props.match.params.number
        )}/`
      )
      .then(res =>
        this.setState({
          group: res.data
        })
      )
      .catch(error => {
        if (error.response.status === 404) {
          console.log("Group status code", error.response.status);
        }
      });
  }

  handleGroupNameChange = e => {
    const gr = Object.assign({ ...this.state.group });
    if (gr.name !== e.target.value) {
      gr.name = e.target.value;
      this.setState({
        group: gr
      });
    } else {
      return gr;
    }
  };

  handleGroupDescriptionChange = e => {
    const gr = Object.assign({ ...this.state.group });
    if (gr.description !== e.target.value) {
      gr.description = e.target.value;
      this.setState({
        group: gr
      });
    } else {
      return gr;
    }
  };

  render() {
    return (
      <div className="container">
        <Group
          state={this.state}
          requestMethod={this.props.requestMethod}
          groupNameChange={this.handleGroupNameChange}
          groupDescrChange={this.handleGroupDescriptionChange}
          updateGroup={this.props.updateGroup}
          btnText="Edit"
        />
      </div>
    );
  }
}
export default GroupDetail;
