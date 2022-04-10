import { postReq } from 'services/httpReq';

const api = 'addProject';
export default async (project) => {
  const data = { ...project };
  postReq(api, data);
};
