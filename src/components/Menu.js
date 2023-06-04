import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Menu(props) {
  const { title, menuObj } = props;
  const navigate = useNavigate();
  
  const handleNavigate = (route) => {
    {
      navigate(route);
    }
  };
  return (
    <div className='Menu-container'>
      <p className="title">{title}</p>
      <ul>
        {
          menuObj && menuObj.map((menu) => (
            <li key={menu.id}>
              {" "}
              <button onClick={() => handleNavigate(menu.navi)}>
                <i>{menu.icon}</i>
                <span className='menu-list-name'>{menu.name}</span>
            </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export { Menu };
