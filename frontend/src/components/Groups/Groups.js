import React from "react";
import { Link } from "react-router-dom";
import { GroupForm } from "../Forms/GroupForm";

export const Groups = props => {
  return (
    <div className="container mt-3">
      <GroupForm
        requestMethod={props.requestMethod}
        btnText={props.btnText}
        groupNameChange={props.groupNameChange}
        groupDescrChange={props.groupDescrChange}
        createGroup={props.createGroup}
        state={props.state}
      />
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="row" />
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.groups.map(group => (
            <tr key={group.id}>
              <th scope="row" />
              <td>{group.id}</td>
              <td>
                <Link
                  to={{ pathname: `/group/${group.id}` }}
                  params={{ number: group.id }}
                >
                  {group.name}
                </Link>
              </td>
              <td>{group.description}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm ml-1"
                  onClick={(e, item) => props.delGroup(e, (item = { group }))}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
