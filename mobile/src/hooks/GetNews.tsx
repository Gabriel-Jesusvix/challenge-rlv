
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../utils/lib/api";

export type News = {
  id: number;
  tipo: string;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  produto_id: number;
  produtos: string;
  editorias: string;
  imagens: {
    image_intro: string;
    float_intro: string;
    image_intro_alt: string;
    image_intro_caption: string;
    image_fulltext: string;
    float_fulltext: string;
    image_fulltext_alt: string;
    image_fulltext_caption: string;
  };
  produtos_relacionados: string;
  destaque: boolean;
  link: string;
};

type GetNews = {
  news: News[],
  isLoading: boolean,
  isLoadingSearch: boolean
  handleSearchNews: (searchInput: string) => {},
}


type GetNewsProviderProps = {
  children: ReactNode
}
export const GetNewsContext = createContext<GetNews>({} as GetNews);

export function GetNewsProvider({ children }: GetNewsProviderProps){
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingSearch, setIsLoadingSearch] = useState(false)

  const [news, setNews] = useState<News[]>()

  async function getNews() {
    try {
      setIsLoading(true)
      const response = await api.get('/?qtd=10')
      setNews(response.data.items)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSearchNews(searchInput: string) {
    try {
      setIsLoadingSearch(true);
      const response = await api.get('/', {
        params: {
          qtd: 3,
          search: searchInput,
        },
      });
      setNews(response.data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingSearch(false);
    }
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <GetNewsContext.Provider value={{
      news,
      isLoading,
      isLoadingSearch,
      handleSearchNews
    }}>
      {children}
    </GetNewsContext.Provider>
  )
}

export function useGetNews() {
  const context = useContext(GetNewsContext)

  return context
}