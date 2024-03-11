import axios from "axios"

export const baseApi = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v3/noticias/'
})