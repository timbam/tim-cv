import React from 'react';
import * as Scroll from 'react-scroll';

import Navbar from './Navbar';
import Frontpage from './Frontpage';
import About from './About';
import Projects from './Projects';
import Courses from './Courses';
import 'assets/scss/App.scss';

let resizeTimeOut;

class App extends React.PureComponent {
  constructor(props){
    super(props);

    this.state = { clientHeight : 0,
                   scrollHeight: 0,
                   activeElement: 'Frontpage',
                   elements: [
                     {id: 'Frontpage',
                      height: Number
                    },
                    {id: 'About',
                      height: Number
                    },
                    {id: 'Projects',
                    height: Number
                    },
                    {id: 'Courses',
                    height: Number
                    }
                   ]
                  };

    this.handleScroll.bind(this);
    this.onResize.bind(this);
    this.didResize.bind(this);
    this.elTopPos.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => this.handleScroll(e));
    window.addEventListener('resize', (e) => this.onResize(e));
    this.didResize();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
    window.removeEventListener('resize');
  }

  handleScroll(e) {
    let { scrollTop, clientHeight, scrollHeight } = e.srcElement.scrollingElement;
    // console.log(100*scrollTop/(scrollHeight-clientHeight) + ' %')
    let elements = this.state.elements;
    for(let i = elements.length-1; i >= 0; i--){
      if(scrollTop >= elements[i].height-50){
        this.setState({
          activeElement: elements[i].id
        });
        break;
      }
    }
    // console.log(this.state.activeElement)
  }

  onResize(e) {
    clearTimeout(resizeTimeOut);
    resizeTimeOut = setTimeout(this.didResize.bind(this), 500)
  }

  didResize() {
    let {scrollHeight, clientHeight } = document.scrollingElement;
    let {elements} = this.state;
    let height;
    for(let i = 0; i < elements.length; i++) {
      height = this.elTopPos(elements[i].id)
      elements[i].height = height;
    }
    this.setState({
      scrollHeight,
      clientHeight,
      elements
    });
    // console.log(this.state)
  }

  elTopPos(element) {
    return document.getElementById(element).getBoundingClientRect().top + window.pageYOffset;
  }

  scrollToElement(element) {
    let e = document.getElementById(element);
    e.scrollIntoView({
      behavior : "smooth"
    });
  }

  render() {
    return (
      <div className="app">
        <Navbar scrollToElement={ this.scrollToElement.bind(this)}
                elements={this.state.elements}
                activeElement={this.state.activeElement}
        />
        <Frontpage  scrollToElement={ this.scrollToElement.bind(this) }
                    nextElement={'About'}  />

        <About      scrollToElement={ this.scrollToElement.bind(this) }
                    nextElement={'Projects'}  />

        <Projects   scrollToElement={ this.scrollToElement.bind(this) }
                    nextElement={'Courses'}  />

        <Courses    scrollToElement={ this.scrollToElement.bind(this) } />

      </div>
    );
  }
}

export default App;
