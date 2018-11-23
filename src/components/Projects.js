import OneProject from './OneProject';
import reactLogo from 'assets/img/react_logo.svg';


export default (props) => {
  const weatherAppTxt = "A site that allows you to compare the weather of different cities"
  const tidTxt = "Tid text.. oO"
  return (
    <div id="Projects" className="Projects">
      <h2 className="title">My Projects</h2>
      <OneProject
        picture={reactLogo}
        title="Weather App"
        text={weatherAppTxt}
        link="https://weatherapp.org"
       />
      <OneProject
        picture={reactLogo}
        title="Tid fot og hud"
        text={tidTxt}
        link="http://www.tid-bergen.no"
       />
       <div onClick={() => props.scrollToElement(props.nextElement)} className="triangle"></div>
    </div>
  );
};
