import React from "react";
import { CustomLeadForm } from "../Forms/LeadForm";

export const Lead = props => {
  return (
    <div className="container mt-3">
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="row" />
            <th scope="col">Username</th>
            <th scope="col">Created</th>
            <th scope="col">Group</th>
          </tr>
        </thead>
        <tbody>
          <tr key={props.lead.id}>
            <th scope="row" />
            <td>{props.lead.username}</td>
            <td>{props.lead.created}</td>
            <td>{props.lead.group_name}</td>
          </tr>
        </tbody>
      </table>
      <CustomLeadForm
        requestMethod={props.requestMethod}
        nameChange={props.nameChange}
        groupChange={props.groupChange}
        groups={props.groups}
        updateLead={props.updateLead}
        btnText={props.btnText}
        state={props.state}
      />
    </div>
  );
};
