import { patchReq } from 'services/httpReq';

const api = 'patchProject';
export default async (patch, id) => {
  const data = { ...patch };
  const result = await patchReq(api, data, id);
  return result.data;
};
