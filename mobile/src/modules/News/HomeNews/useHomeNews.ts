import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form';
import { SearchInputProps, searchSchema } from "../../../DTOS/SearchSchemaDTO";
import { useGetNews } from '../../../hooks/GetNews';


export function useHomeNews() {
  const { navigate } = useNavigation()
  const {handleSearchNews } = useGetNews()
  const { control, handleSubmit, formState: { errors } } = useForm<SearchInputProps>({
    //@ts-ignore
    resolver: yupResolver(searchSchema),
    defaultValues: {
      searchInput: ''
    }
  });
  

  function handleNavigateUserToDetailsNews(id: string) {
    navigate('DetailsNews', {id})
  }

  async function handleOnSearchNews(data:SearchInputProps ) {
    await handleSearchNews(data.searchInput)
  }
  return {
    handleNavigateUserToDetailsNews,
    handleOnSearchNews,
    handleSubmit,
    control,
    errors
  }
}