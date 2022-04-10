import { putReq } from 'services/httpReq';

const api = 'putProject';
export default async (patch, id) => {
  const data = { ...patch };
  const result = await putReq(api, data, id);
  return result.data;
};
