import Input from 'componnts/uiKit/Input';
import Loading from 'componnts/uiKit/Loading';
import EditTask from './AddTask';

const AddTasks = (props) => {
  const onChangeHandler = (id, value) => {
    props.setTasks((pre) => {
      const arr = [];
      pre.forEach((task) => {
        if (task.id === id) {
          let tmp = { ...task };
          tmp.text = value;
          arr.push(tmp);
        } else arr.push(task);
      });
      return arr;
    });
  };

  return props.tasks ? (
    <div className="edit_tasks">
      {props.tasks.map((task, i) => (
        <Input
          value={task.text}
          onChange={(value) => onChangeHandler(task.id, value)}
          placeholder="Task..."
          key={'task' + i}
        />
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default AddTasks;
