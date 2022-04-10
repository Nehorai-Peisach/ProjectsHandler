const Btn = (props) => {
  const className = props.className || '';
  return (
    <div className={'btn ' + className} onClick={props.onClick || null}>
      {props.children}
    </div>
  );
};

export default Btn;
