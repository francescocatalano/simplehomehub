import React from 'react';

const Component = ({component}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{component.name}</h5>
        <ul className="list-inline">
          <li><span className="badge badge-info">Type</span> {component.type}</li>
          <li><span className="badge badge-info">Installed</span> {component.installed}</li>
          <li><span className="badge badge-info">Last seen</span> {component.last_seen}</li>
        </ul>
      </div>
    </div>
  );
};

/* TODO propTypes */

export default Component;
