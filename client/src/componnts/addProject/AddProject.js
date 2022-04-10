import Input from 'componnts/uiKit/Input';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import dateFormat from 'dateformat';
import Btn from 'componnts/uiKit/Btn';
import { Link } from 'react-router-dom';
import AddTasks from './AddTasks';
import { setTitle } from 'redux/reducers/title';
import addProjectService from 'services/projectServices/addProjectService';

const AddProject = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle('Add New Project'));
  }, []);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);

  const updatehandler = () => {
    let undone = [];
    if (tasks) undone = tasks.filter((x) => !x.isDone);
    const obj = {
      id: Math.random() * 100000000000000000,
      name: name,
      description: description,
      imageUrl: imageUrl,
      dueDate: dueDate,
      isDone: undone.length > 0 ? false : true,
      tasks: tasks,
    };
    addProjectService(obj)
  };

  const onAddTaskHandler = () => {
    setTasks((pre) => {
      let obj = {
        id: Math.random() * 100000000000000000,
        text: '',
        isDone: false,
        doneDate: null,
      };
      let tmp = [...pre, obj];
      return tmp;
    });
  };

  return (
    <div className="edit_project">
      <img src={imageUrl} />
      <div className="edit_project__data">
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
      <div>
        <AddTasks tasks={tasks} setTasks={setTasks} />
        <Btn onClick={onAddTaskHandler}>Add Task</Btn>
      </div>

      <Link to="/">
        <Btn onClick={updatehandler}>Add Project</Btn>
      </Link>
    </div>
  );
};

export default AddProject;
