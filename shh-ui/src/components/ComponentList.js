import React from 'react';

const ComponentList = ({components}) => {

  return (
      <ul className="list-group">
          {components.map(component =>
              <li className="list-group-item" key={component.id}>
                {component.name}
            </li>
          )}
      </ul>
  );
};

/* TODO propTypes */

export default ComponentList;
