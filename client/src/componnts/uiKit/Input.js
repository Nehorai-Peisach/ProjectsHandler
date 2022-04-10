const Input = (props) => {
  return (
    <div className="input_wrapper">
      {props.children && <span className="input_wrapper__text">{props.children}:</span>}
      <input
        className="input_wrapper__input"
        type={props.type || 'text'}
        value={props.value || ''}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder || ''}
        checked={props.isChecked || false}
      />
    </div>
  );
};

export default Input;
