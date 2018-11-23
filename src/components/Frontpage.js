
export default (props) => {
    return (
      <div className="Frontpage" id="Frontpage">
        <div className="textBlock">
          <h3>Hi, I'm</h3>
          <h2>TIM BARBIER</h2>
          <h3>a <span className="webDevSpan">Web Developer</span></h3>
        </div>
        <div onClick={() => props.scrollToElement(props.nextElement)} className="triangle"></div>
      </div>
    );
}
