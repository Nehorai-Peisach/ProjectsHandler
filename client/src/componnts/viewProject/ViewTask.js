import Loading from 'componnts/uiKit/Loading';
import dateFormat from 'dateformat';

const ViewTask = (props) => {
  const task = props.task;

  return task ? (
    <div className={task.isDone ? 'view_task__done' : 'view_task__wait'}>
      <div>{task.text}</div>
    </div>
  ) : (
    <Loading />
  );
};

export default ViewTask;
