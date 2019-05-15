import React from "react";
import { GroupForm } from "../Forms/GroupForm";

export const Group = props => {
  return (
    <div className="container">
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="row" />
            <th scope="col">Title</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr key={props.state.group.id}>
            <th scope="row" />
            <td>{props.state.group.name}</td>
            <td>{props.state.group.description}</td>
          </tr>
        </tbody>
      </table>
      <GroupForm
        requestMethod={props.requestMethod}
        groupNameChange={props.groupNameChange}
        groupDescrChange={props.groupDescrChange}
        state={props.state}
        updateGroup={props.updateGroup}
        btnText="Edit"
      />
    </div>
  );
};
