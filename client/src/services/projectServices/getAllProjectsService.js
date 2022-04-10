import { getReq, postReq } from 'services/httpReq';

const api = 'getAllProjects';
export default async () => {
  const data = '';
  const result = await getReq(api, data);
  return result.data;
};
