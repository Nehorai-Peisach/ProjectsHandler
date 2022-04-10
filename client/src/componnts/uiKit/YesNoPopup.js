import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
const YesNoPopup = (props) => {
  let text = 'Are you sure?';
  if (props.text) text = props.text;
  return (
    <div className="yes_no_popup">
      <span>{text}</span>
      <div>
        <AiOutlineCheck className="yes" onClick={() => props.onClick(true)} />
        <AiOutlineClose className="no" onClick={() => props.onClick(false)} />
      </div>
    </div>
  );
};

export default YesNoPopup;
