import axios from 'axios';

export async function indexMedia({ text, type, metadata }) {
  await axios.post('/api/media/index', { text, type, metadata });
}

export async function searchMedia(query) {
  const res = await axios.post('/api/media/search', { query });
  return res.data.results;
}