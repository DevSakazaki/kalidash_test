import axios from 'axios';

export async function fetchUniversities(country: string) {
  try {
    const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
    // console.log('Dados:', response.data); 

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar universidades: ', error);
    throw error;
  }
}
