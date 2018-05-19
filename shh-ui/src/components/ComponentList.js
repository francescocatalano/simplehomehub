import React from 'react';
import { NavLink } from 'react-router-dom';


const ComponentList = ({components}) => {
  return (
      !components ? <span class="badge badge-light">Loading</span> :
        <ul className="list-group">
          {
            components.map(component =>
              <li className="list-group-item" key={component.id}>
                {component.name}
                <NavLink to={'/component/' + component.id}> --> DET </NavLink>
              </li>
            )
          }
        </ul>
  );
};

/* TODO propTypes */

export default ComponentList;
