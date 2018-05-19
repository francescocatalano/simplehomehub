import React from 'react';
import { Icon } from 'react-icons-kit'
import { NavLink } from 'react-router-dom';
import { undo } from 'react-icons-kit/fa/undo'

const Component = ({component}) => {
  return (
    !component ? <span className="badge badge-light">Loading</span> :
      <div className="card">
         <div className="card-body">
           <h5 className="card-title">
             <NavLink to={'/components'}>
               <Icon icon={undo} />
             </NavLink>
             <span>{component.name}</span>
           </h5>
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
