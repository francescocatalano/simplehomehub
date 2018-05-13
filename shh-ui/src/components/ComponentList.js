import React from 'react';
import { Link } from 'react-router-dom';


const ComponentList = ({components}) => {

  const list = <ul className="list-group">
            {
              components.map(component =>
                <li className="list-group-item" key={component.id}>
                  {component.name}
                  <Link to={`/component/${component.id}`}> --> </Link>
                </li>
              )
            }
        </ul>;

  if(components)
    return list;

  return (
    <span class="badge badge-light">Loading</span>
  );
};

/* TODO propTypes */

export default ComponentList;
