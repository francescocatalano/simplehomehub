import React from 'react';

const Device = ({device}) => {
  const deviceAttributes = device.attributes ?  Object.keys(device.attributes).map(key =>
    <li>
      <span className="badge badge-info">{key}</span> {device.attributes[key]}
    </li>
  ) : "";
  const deviceData = device.data ?  Object.keys(device.data).map(key =>
    <li>
      <span className="badge badge-info">{key}</span> {device.data[key]}
    </li>
  ) : "";

  return (
    !device ? <span className="badge badge-light">Loading</span> :
      <div className="card">
         <div className="card-body">
           <h5 className="card-title">{device.name}</h5>
           <ul className="list-inline">
             <li><span className="badge badge-info">Type</span> {device.type}</li>
             <li><span className="badge badge-info">Realm</span> {device.realm}</li>
             <li><span className="badge badge-info">State</span> {device.state}</li>
           </ul>
           <h5 className="card-title">Attributes</h5>
           <ul className="list-inline">
            {deviceAttributes}
           </ul>
           <h5 className="card-title">Data</h5>
           <ul className="list-inline">
            {deviceData}
           </ul>
         </div>
       </div>
  );
};

/* TODO propTypes */

export default Device;
