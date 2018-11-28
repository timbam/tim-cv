import OneProject from './OneProject';
import reactLogo from 'assets/img/react_logo.svg';
import weatherAppImg from 'assets/img/WeatherApp.jpg';
import tidImg from 'assets/img/tid.jpg';

export default (props) => {
  const weatherAppTxt =
  `
    A site that allows you to compare the weather of different cities, using a map.
    The user can either select a city and a radius to get the nearest cities,
    or he can simply click on the map to add/remove cities of his choosing.
    The data is fetched from the site yr.no.
    Technologies used include ReactJS, Redux, Axios, ES6, HTML and CSS.
  `
  const tidTxt =
  `
    TID is a saloon for foot and skin therapy in Bergen.
    The business is held by a friend of mine, and I helped her with her webpage.
    It's a simple static page, using ReactJS, ES6, HTML and CSS.
  `
  return (
    <div id="Projects" className="Projects">
      <h2 className="title">My Projects</h2>
      <OneProject
        picture={weatherAppImg}
        title="WeatherApp.org"
        text={weatherAppTxt}
        link="https://weatherapp.org"
       />
      <OneProject
        picture={tidImg}
        title="Tid-Bergen.no"
        text={tidTxt}
        link="http://www.tid-bergen.no"
       />
       <div onClick={() => props.scrollToElement(props.nextElement)} className="triangle"></div>
    </div>
  );
};
