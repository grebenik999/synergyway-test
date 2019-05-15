import React from "react";
import { Link } from "react-router-dom";
import { CustomLeadForm } from "../Forms/LeadForm";

export const Leads = props => {
  return (
    <div className="container mt-3">
      <CustomLeadForm
        requestMethod={props.requestMethod}
        nameChange={props.nameChange}
        groupChange={props.groupChange}
        leads={props.leads}
        groups={props.groups}
        create={props.create}
        btnText={props.btnText}
        state={props.state}
      />
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="row" />
            <th scope="col">Username</th>
            <th scope="col">Created</th>
            <th scope="col">Group</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.leads.length !== 0 ? (
            props.leads.map(lead => (
              <tr key={lead.id}>
                <th scope="row" />
                <td>
                  <Link
                    to={{ pathname: `/lead/${lead.id}` }}
                    params={{ number: lead.id }}
                  >
                    {lead.username}
                  </Link>
                </td>
                <td>{lead.created}</td>
                <td>{lead.group_name}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm ml-1"
                    onClick={(e, item) => props.delEvent(e, (item = { lead }))}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <th scope="row" />
              <td />
              <td className="text-center">
                There's no Leads found, please add it
              </td>
              <td />
              <td />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
