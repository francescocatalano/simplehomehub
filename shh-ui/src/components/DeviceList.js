import React from 'react';
import { NavLink } from 'react-router-dom';


const DeviceList = ({devices}) => {
  return (
    !devices ? <span class="badge badge-light">Loading</span> :
      <ul className="list-group">
        {
          devices.map(device =>
            <li className="list-group-item" key={device.identity}>
              {device.name}
              <NavLink to={'/device/' + device.identity}> --> DET </NavLink>
            </li>
          )
        }
      </ul>
  );
};

/* TODO propTypes */

export default DeviceList;
