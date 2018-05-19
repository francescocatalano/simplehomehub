import React from 'react';
import { Icon } from 'react-icons-kit'
import { NavLink } from 'react-router-dom';
import { undo } from 'react-icons-kit/fa/undo'
import { toggleOff } from 'react-icons-kit/fa/toggleOff'
import { toggleOn } from 'react-icons-kit/fa/toggleOn'

const Device = ({device}) => {
  const deviceAttributes = device.attributes ?  Object.keys(device.attributes).map(key =>
    <li key={key} >
      <span className="badge badge-info">{key}</span> {device.attributes[key]}
    </li>
  ) : "";
  const deviceData = device.data ?  Object.keys(device.data).map(key =>
    <li key={key} >
      <span className="badge badge-info">{key}</span> {device.data[key]}
    </li>
  ) : "";

  const actionIcon = device.state === 'off' ?  <Icon icon={toggleOff} /> :  <Icon icon={toggleOn} />;

  return (
    !device ? <span className="badge badge-light">Loading</span> :
      <div className="card">
         <div className="card-body">
           <h5 className="card-title">
             <NavLink to={'/components'}>
               <Icon icon={undo} />
             </NavLink>
             <span>{device.name}</span>
           </h5>
           <ul className="list-inline">
             <li><span className="badge badge-info">Type</span> {device.type}</li>
             <li><span className="badge badge-info">Realm</span> {device.realm}</li>
             <li>
              <span className="badge badge-info primary">State</span> {device.state} {actionIcon}
            </li>
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
