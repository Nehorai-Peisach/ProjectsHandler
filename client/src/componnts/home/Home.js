import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from 'redux/reducers/projects';
import ProjectItem from './ProjectItem';
import getAllProjectsService from 'services/projectServices/getAllProjectsService';
import { setTitle } from 'redux/reducers/title';

const Main = (props) => {
  const projects = useSelector((state) => state.projects.value);
  const dispatch = useDispatch();

  useEffect(() => {
    renderProjects();
    dispatch(setTitle('Home'));
  }, []);

  const renderProjects = () => {
    getAllProjectsService().then((res) => dispatch(setProjects(res)));
  };

  return (
    <div className="main_page">
      {projects.length > 0 &&
        projects.map((project, i) =>
          project.isDone ||
          // project.dueDate - Date.now() < 0 ||
          project.tasks.filter((x) => !x.isDone).length === 0 ? (
            <ProjectItem
              key={'project' + i}
              className="done"
              openClosePopup={props.openClosePopup}
              data={project}
              done={true}
              undoneTasks={project.tasks.filter((x) => !x.isDone)}
            />
          ) : (
            <ProjectItem
              key={'project' + i}
              openClosePopup={props.openClosePopup}
              data={project}
              undoneTasks={project.tasks.filter((x) => !x.isDone)}
            />
          )
        )}
    </div>
  );
};

export default Main;
