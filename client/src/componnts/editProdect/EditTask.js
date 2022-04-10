import Input from 'componnts/uiKit/Input';
import { useState } from 'react';

const EditTask = (props) => {
  const [task, setTask] = useState(props.task);
  const onChangeHandler = async (value) => {
    setTask((pre) => {
      let tmp = { ...pre };
      tmp.text = value;
      props.onChange(props.task.id, tmp);
      return tmp;
    });
  };
  const onCheckHandler = () => {
    const tmp = { ...task };
    tmp.isDone = !tmp.isDone;
    if (tmp.isDone) tmp.doneDate = Date.now();
    else tmp.doneDate = null;
    setTask(tmp);
    props.onChange(props.task.id, tmp);
  };

  return (
    <div className="edit_tasks__task">
      <Input value={task.text} onChange={onChangeHandler} />
      <Input type="checkbox" isChecked={props.task.isDone} onChange={onCheckHandler} />
    </div>
  );
};

export default EditTask;
