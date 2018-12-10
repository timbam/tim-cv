import React from 'react';

export default props => {
  return(
    <div id="About" className="About">
      <h2 className="title">
        About me
      </h2>
      <div className="textAbout">
        <p>
          Write about myself: Career, university, programming
        </p>
        <p>
          
        </p>
      </div>
      <a className="triangle"
           onClick={() => props.scrollToElement(props.nextElement)} >
      </a>
    </div>
  )
}
