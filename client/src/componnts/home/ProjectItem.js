import dateFormat, { masks } from 'dateformat';
import ProjectIcons from './ProjectIcons';

const ProjectItem = (props) => {
  const className = props.className || '';

  return (
    <div className={'project_item ' + className}>
      <img src={props.data.imageUrl} />
      <div className="project_item__name">{props.data.name}</div>
      <div className="project_item__tasks">{props.undoneTasks.length}</div>
      <div className="project_item__date">{dateFormat(props.data.dueDate, 'isoTime')}</div>
      {!props.done && <ProjectIcons data={props.data} openClosePopup={props.openClosePopup} />}
    </div>
  );
};

export default ProjectItem;
