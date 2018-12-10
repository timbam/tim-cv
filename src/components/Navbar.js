import React from 'react';

export default (props) => {
  return(
    <div className="Navbar">
      <ul>
        {props.elements.map(element => {
          return (
              <li key={element.id}
                onClick={() => props.scrollToElement(element.id)}
                className={props.activeElement === element.id ? 'active' : ''}
                >
                <a>
                <span></span>
                </a>
              </li>
          )
        })}
      </ul>
    </div>
  )
}
