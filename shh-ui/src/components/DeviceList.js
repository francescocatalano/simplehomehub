import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { searchPlus } from 'react-icons-kit/fa/searchPlus'

const DeviceList = ({devices}) => {
  return (
    !devices ? <span class="badge badge-light">Loading</span> :
      <ul className="list-group">
        {
          devices.map(device =>
            <li className="list-group-item  text-right" key={device.identity}>
              <span className="float-left">{device.name}</span>
              <NavLink to={'/device/' + device.identity}>
                <Icon icon={searchPlus} />
              </NavLink>
            </li>
          )
        }
      </ul>
  );
};

/* TODO propTypes */

export default DeviceList;
