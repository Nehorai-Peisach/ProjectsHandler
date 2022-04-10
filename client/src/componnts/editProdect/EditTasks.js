import Loading from 'componnts/uiKit/Loading';
import EditTask from './EditTask';

const EditTasks = (props) => {
  const onChangeHandler = (id, data) => {
    props.setTasks((pre) => {
      const arr = [];
      pre.forEach((task) => {
        if (task.id === id) {
          arr.push(data);
        } else arr.push(task);
      });
      return arr;
    });
  };

  return props.tasks ? (
    <div className="edit_tasks">
      {props.tasks.map((task, i) => (
        <EditTask key={'editTask' + i} task={task} onChange={onChangeHandler} />
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default EditTasks;
