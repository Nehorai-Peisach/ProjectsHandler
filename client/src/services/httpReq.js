import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/';

export const getReq = async (api, body) => {
  try {
    const result = await axios.get(baseUrl + api + '/' + body);
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const postReq = async (api, body) => {
  try {
    const result = await axios.post(baseUrl + api, body);
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const deleteReq = async (api, id) => {
  try {
    const result = await axios.delete(baseUrl + api + '/' + id);
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const putReq = async (api, body, id) => {
  try {
    const result = await axios.put(baseUrl + api + '/' + id);
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const patchReq = async (api, body, id) => {
  try {
    const result = await axios.patch(baseUrl + api + '/' + id, body);
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getReq;
