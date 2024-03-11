'use client'
import { Input } from "@/components/Input";
import { News } from "@/DTOS/GetNews";
import { baseApi } from "@/utils/base-api";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  searchInput: string
}
export default function Home() {
  const { register, formState: { errors }, reset } = useForm<FormValues>();
  const [searchTerm, setSearchTerm] = useState('');
  const [searching, setSearching] = useState(false);

  const { data: initialData, isLoading: initialLoading } = useQuery<News[], Error>({
    queryKey: ['fetchInitialNews'],
    queryFn: async () => {
      try {
        const response = await baseApi.get(`/?qtd=10`);
        return response.data.items;
      } catch (error) {
        throw error;
      }
    }
  });

  const { data: searchData, isLoading: searchLoading } = useQuery<News[], Error>({
    queryKey: ['fetchNews', searchTerm],
    queryFn: async () => {
      try {
        const response = await baseApi.get('/', {
          params: {
            qtd: 10,
            search: searchTerm
          }
        });
        return response.data.items;
      } catch (error) {
        throw error;
      }
    },
    enabled: searching
  });

  const handleSearch = async (data: FormValues) => {
    setSearchTerm(data.searchInput);
    setSearching(true); // Inicia a busca
    reset();
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch({ searchInput: searchTerm });
    }
  }


  const sortNews = (news: News[]) => {
    if (!searchTerm) return news;

    const containingTerm = news.filter(item => item.titulo.toLowerCase().includes(searchTerm.toLowerCase()));
    const notContainingTerm = news.filter(item => !item.titulo.toLowerCase().includes(searchTerm.toLowerCase()));

    return [...containingTerm, ...notContainingTerm];
  }

  const newsData = searchTerm ? sortNews(searchData || []) : initialData;
  const loading = searchTerm ? searchLoading : initialLoading;

  return (
    <div className="flex items-center justify-center flex-col mt-[10%]">
      <div className="max-w-660">
        <div className="mb-4">
          <h1 className="text-lg font-medium">Olá, seja bem vindo ao seu portal de noticias</h1>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); }} >
          <Input
            {...register('searchInput')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown} />
        </form>
        <div className="flex flex-col">
          {loading ? (
            <div className="w-full text-center mt-4">
              <span className="">Carregando...</span>
            </div>
          ) : (
            newsData && newsData.map((item: News) => (
              <div className="w-[660px] mt-4 flex flex-col mb-2" key={item.id}>
                <span className="bg-gray-200 items-center justify-center rounded-lg flex w-[80px]">{item.tipo}</span>
                <h1 className="text-lg mt-2 text-justify font-semibold truncate max-w-[660px]">
                  {item.titulo}
                </h1>
                <span className="text-gray-300"> {item.data_publicacao}</span>
                <Link href={item.link} target="_blank" className="text-blue-800 flex flex-row items-center">
                  Confira matéria na íntegra
                  <ArrowUpRight size={22} />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}