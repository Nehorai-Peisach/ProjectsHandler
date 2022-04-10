import Loading from 'componnts/uiKit/Loading';
import { useSelector } from 'react-redux';
import dateFormat from 'dateformat';
import ViewTask from './ViewTask';
import ViewPrograssBar from './ViewPrograssBar';

const ViewProject = (props) => {
  const project = useSelector((state) => state.currentProject && state.currentProject.value);

  return project ? (
    <div className="view_project">
      <img src={project.imageUrl} />
      <div className="view_project__data">
        <div>Id: {project.id}</div>
        <div>Name: {project.name}</div>
        <div>Description: {project.description}</div>
        <div>Image Url: {project.imageUrl}</div>
        <div>Due Date: {dateFormat(project.dueDate, 'HH.MM.ss - dd/mm/yy')}</div>
      </div>
      <ViewPrograssBar tasks={project.tasks} date={project.dueDate} />
      <div className="view_project__tasks">
        {project.tasks.map((task, i) => (
          <ViewTask key={'viewTask' + i} task={task} />
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default ViewProject;
