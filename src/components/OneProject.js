export default (props) => {
  return (
    <div className="OneProject">
      <a href={props.link} className="leftSide" target="_blank">
        <img src={props.picture} alt="" />
      </a>
      <div className="rightSide">
        <h4>{props.title}</h4>
        <p>{props.text} </p>
      </div>
    </div>
  );
}
