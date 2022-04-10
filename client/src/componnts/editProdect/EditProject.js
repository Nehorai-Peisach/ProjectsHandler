import Input from 'componnts/uiKit/Input';
import Loading from 'componnts/uiKit/Loading';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import dateFormat from 'dateformat';
import EditTasks from './EditTasks';
import Btn from 'componnts/uiKit/Btn';
import updateProjectService from 'services/projectServices/updateProjectService';
import { Link } from 'react-router-dom';

const EditProject = (props) => {
  const project = useSelector((state) => state.currentProject && state.currentProject.value);

  const [name, setName] = useState((project && project.name) || '');
  const [description, setDescription] = useState((project && project.description) || '');
  const [imageUrl, setImageUrl] = useState((project && project.imageUrl) || '');
  const [dueDate, setDueDate] = useState((project && project.dueDate) || '');
  const [tasks, setTasks] = useState((project && project.tasks) || '');

  const updatehandler = () => {
    const undone = tasks.filter((x) => !x.isDone);
    const obj = {
      id: project.id,
      name: name,
      description: description,
      imageUrl: imageUrl,
      dueDate: dueDate,
      isDone: undone.length > 0 ? false : true,
      tasks: tasks,
    };
    updateProjectService(obj, project.id);
  };
  return project ? (
    <div className="edit_project">
      <img src={imageUrl} />
      <div className="edit_project__data">
        <div>Id: {project.id}</div>
        <Input value={name} onChange={setName} placeholder="Name...">
          Name
        </Input>
        <Input value={description} onChange={setDescription} placeholder="Description...">
          Description
        </Input>
        <Input value={imageUrl} onChange={setImageUrl} placeholder="Image Url...">
          Image Url
        </Input>
        <Input
          type="datetime-local"
          value={dateFormat(dueDate, "UTC:yyyy-mm-dd'T'HH:MM")}
          onChange={setDueDate}
          placeholder="Due Date..."
        >
          Due Date
        </Input>
      </div>

      <EditTasks tasks={tasks} setTasks={setTasks} />
      <Link to="/">
        <Btn onClick={updatehandler}>Update</Btn>
      </Link>
    </div>
  ) : (
    <Loading />
  );
};

export default EditProject;
