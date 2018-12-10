
export default (props) => {
    return (
      <div className="Frontpage" id="Frontpage">
        <div className="background"></div>
        <div className="textBlock">
          <h3>Hi, <span className="Im">I'm</span></h3>
          <h2>Tim Barbier</h2>
        </div>
        <a onClick={() => props.scrollToElement(props.nextElement)} className="triangle"></a>
      </div>
    );
}
