import React from "react";

export const GroupForm = props => {
  return (
    <div className="container">
      <form method={props.requestMethod}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter a group name"
            onChange={props.groupNameChange}
          />
        </div>
        <div className="form-group">
          <textarea
            rows="4"
            name="description"
            className="form-control"
            placeholder="Description"
            onChange={props.groupDescrChange}
          />
        </div>
        {props.requestMethod === "post" ? (
          <button
            type="submit"
            className="btn btn-primary btn-sm"
            onClick={e => {
              props.createGroup(e, props.state);
            }}
          >
            {props.btnText}
          </button>
        ) : (
          <button
            type="submit"
            className="btn btn-warning btn-sm"
            onClick={e => {
              props.updateGroup(e, props.state);
            }}
          >
            {props.btnText}
          </button>
        )}
      </form>
    </div>
  );
};
