import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import Frontpage from './Frontpage';
import Projects from './Projects';
import Courses from './Courses';
import 'assets/scss/App.scss';

let timeOut;

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.handleScroll.bind(this);
    this.scrollToTop.bind(this);
    this.state = { scrolling: false };
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', arguments);
      this.setState({
        scrolling: true
      });
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', arguments);
      this.setState({
        scrolling: false
      });
    });
    window.addEventListener('scroll', (e) => this.handleScroll(e));
    scrollSpy.update();

  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
    window.removeEventListener('scroll');
    clearTimeout(timeOut);
  }

  handleScroll(e) {
    let { scrollTop, clientHeight, scrollHeight } = e.srcElement.scrollingElement;
    // if(Math.abs((scrollTop/clientHeight) % 1 - 0.5) > 0.46 && !this.state.scrolling){
    //   let yoyo = Math.round(scrollTop/clientHeight) * clientHeight;
    //   // clearTimeout(timeOut);
    //   console.log(yoyo);
    //   timeOut = setTimeout(() => scroll.scrollTo(yoyo), 2500);
    // }else{
    //   console.log("yoyo")
    //   clearTimeout(timeOut);
    // }
    console.log(e.srcElement.scrollingElement)
    // console.log(clientHeight);
    // console.log(scrollHeight);
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollToElement(element) {
    console.log(element);
    let e = document.getElementById(element);
    console.log(e.scrollTop)
    e.scrollIntoView({
      behavior : "smooth"
    });
  }

  render() {
    return (
      <div className="app">
        <Frontpage  scrollToElement={ this.scrollToElement.bind(this) }
                    nextElement={'Projects'}  />

        <Projects   scrollToElement={ this.scrollToElement.bind(this) }
                    nextElement={'Courses'}  />

        <Courses    scrollToElement={ this.scrollToElement.bind(this) } />

      </div>
    );
  }
}

export default App;
