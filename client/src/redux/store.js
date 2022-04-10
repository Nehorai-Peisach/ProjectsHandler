import { configureStore } from '@reduxjs/toolkit';
import currentPage from './reducers/title';
import currentProject from './reducers/currentProject';
import projects from './reducers/projects';
export default configureStore({
  reducer: {
    currentPage: currentPage,
    projects: projects,
    currentProject: currentProject,
  },
});
