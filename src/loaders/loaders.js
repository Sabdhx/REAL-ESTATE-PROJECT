

import axios from 'axios';

export const singlePageLoader = async ({request, params }) => {
  const response = await axios.get(`http://localhost:5000/Posts/${params.id}`);
  return response.data.findById;
};
