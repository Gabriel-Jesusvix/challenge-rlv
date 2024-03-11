import * as yup from 'yup';

export const searchSchema = yup.object({
  searchInput: yup.string().required('Informe o termo para busca')
});

export type SearchInputProps = {
  searchInput: string;
};
