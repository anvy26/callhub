export default function Button(props) {
  let classname = props.classname ?? "";

  return (
    <button className={classname + " button__container normal__text"}>
      {props.text}
    </button>
  );
}
