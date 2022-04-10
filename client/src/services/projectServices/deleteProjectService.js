import { deleteReq } from 'services/httpReq';

const api = 'deleteProject';
export default async (id) => {
  const data = id;
  const result = await deleteReq(api, data);
  return result.data;
};
