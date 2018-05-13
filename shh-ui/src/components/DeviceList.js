import React from 'react';
import { Link } from 'react-router-dom';


const DeviceList = ({devices}) => {

  const list = <ul className="list-group">
            {
              devices.map(device =>
                <li className="list-group-item" key={device.identity}>
                  {device.name}
                  <Link to={`/device/${device.identity}`}> --> </Link>
                </li>
              )
            }
        </ul>;

  if(devices)
    return list;

  return (
    <span class="badge badge-light">Loading</span>
  );
};

/* TODO propTypes */

export default DeviceList;
