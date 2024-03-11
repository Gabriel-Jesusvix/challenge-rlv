import axios from "axios"

export const baseApi = axios.create({
  baseURL: 'http://servicodados.ibge.gov.br/api/v3/noticias'
})