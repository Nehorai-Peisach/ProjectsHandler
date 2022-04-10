import { BiMessageDetail } from 'react-icons/bi';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineCheck } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setTitle } from 'redux/reducers/title';
import { setProjects } from 'redux/reducers/projects';
import getAllProjectsService from 'services/projectServices/getAllProjectsService';
import deleteProjectService from 'services/projectServices/deleteProjectService';
import updateProjectService from 'services/projectServices/updateProjectService';
import YesNoPopup from 'componnts/uiKit/YesNoPopup';
import { setCurrentProject } from 'redux/reducers/currentProject';
import { Link } from 'react-router-dom';

const ProjectIcons = (props) => {
  const dispatch = useDispatch();

  const onDeleteHandler = async (isAgree) => {
    if (isAgree) {
      await deleteProjectService(props.data.id);
      const projects = await getAllProjectsService();
      dispatch(setProjects(projects));
    }
    props.openClosePopup[1]();
  };

  const onCheckHandler = async (isAgree) => {
    if (isAgree) {
      await updateProjectService({ isDone: true }, props.data.id);
      const projects = await getAllProjectsService();
      dispatch(setProjects(projects));
    }
    props.openClosePopup[1]();
  };

  const onEditHandler = () => {
    dispatch(setCurrentProject(props.data));
    dispatch(setTitle(`Edit ${props.data.name}`));
  };

  const onDetailsHandler = () => {
    dispatch(setCurrentProject(props.data));
    dispatch(setTitle(`View ${props.data.name}`));
  };

  return (
    <div className="project_icons">
      <RiDeleteBinLine
        className="project_icons__icon"
        onClick={() =>
          props.openClosePopup[0](<YesNoPopup text="Delete?" onClick={onDeleteHandler} />)
        }
      />
      <Link to="editProject">
        <GrEdit className="project_icons__icon" onClick={() => onEditHandler()} />
      </Link>
      <Link to="viewProject">
        <BiMessageDetail className="project_icons__icon" onClick={() => onDetailsHandler()} />
      </Link>
      <AiOutlineCheck
        className="project_icons__icon"
        onClick={() =>
          props.openClosePopup[0](<YesNoPopup text="Check as complete?" onClick={onCheckHandler} />)
        }
      />
    </div>
  );
};

export default ProjectIcons;
