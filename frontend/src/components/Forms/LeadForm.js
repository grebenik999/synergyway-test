import React from "react";

export const CustomLeadForm = props => {
  return (
    <form method={props.requestMethod}>
      <div className="form-group">
        <label htmlFor="FormControlInput1">User Name</label>
        <input
          name="username"
          type="text"
          className="form-control"
          id="FormControlInput1"
          placeholder="Username"
          onChange={props.nameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="FormControlSelect1">Group Select</label>
        <select
          className="form-control"
          id="FormControlSelect1"
          onChange={props.groupChange}
        >
          <option>Please choose a group</option>
          {props.groups.length !== 0
            ? props.groups.map(group => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))
            : "No groups"}
        </select>
      </div>
      {props.requestMethod === "post" ? (
        <button
          className="btn btn-success btn-sm"
          onClick={e => props.create(e, props.state)}
        >
          {props.btnText}
        </button>
      ) : (
        <button
          className="btn btn-warning btn-sm"
          onClick={e => props.updateLead(e, props.state)}
        >
          {props.btnText}
        </button>
      )}
    </form>
  );
};
