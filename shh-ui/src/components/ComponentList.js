import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { searchPlus } from 'react-icons-kit/fa/searchPlus'
import { hddO } from 'react-icons-kit/fa/hddO'

const ComponentList = ({components, onComponentClick}) => {
  return (
      !components ? <span className="badge badge-light">Loading</span> :
        <ul className="list-group">
          {
            components.map(component =>
              <li className="list-group-item text-right" key={component.id}>
                <span className="float-left">{component.name}</span>
                { component.installed === false ? <Icon onClick={() => onComponentClick(component.id)} icon={hddO} /> : '' }
                <NavLink to={'/component/' + component.id}>
                  <Icon icon={searchPlus} />
                </NavLink>
              </li>
            )
          }
        </ul>
  );
};

/* TODO propTypes */

export default ComponentList;
