import { Feather } from '@expo/vector-icons';
import React from "react";
import { Controller } from 'react-hook-form';
import { ActivityIndicator, FlatList, Linking, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import { MoreArticles } from "../../../components/MoreArticles";
import { useGetNews } from "../../../hooks/GetNews";
import { useHomeNews } from "./useHomeNews";


export function HomeNews() {
  const {
    handleNavigateUserToDetailsNews,
    handleOnSearchNews,
    handleSubmit,
    control,
    errors
  } = useHomeNews()
  const {
    news,
    isLoading,
    isLoadingSearch
  } = useGetNews()

  if (isLoading || news?.length === 0) {
    return <ActivityIndicator className="flex justify-center items-center text-blue-800" size="large" />
  }

  return (
    <SafeAreaView className="flex-1">
      <View className='flex-1 bg-white px-6'>
        <Header />
        <Controller
          control={control}
          disabled={isLoadingSearch}
          name="searchInput"
          render={({ field: { value, onChange } }) => (
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              value={value}
              onChangeText={onChange}
              onSearch={handleSubmit(handleOnSearchNews)}
              isLoading={isLoadingSearch}
            />
          )}
        />
        {
          errors.searchInput && errors.searchInput.message && <Text className='text-red-500 text-center mt-2 font-poppins500 '>Não encontrado</Text>
        }

        {
          isLoadingSearch ? (
            <View className="flex items-center justify-center flex-1">
              <ActivityIndicator className="flex justify-center items-center text-blue-800" size="large" />
            </View>
          ) : (
            <>
              <View
                className="mt-6"
              >

                <Text
                  className="font-poppins600 text-lg"
                >
                  Noticias do dia
                </Text>
                <TouchableOpacity
                  className="py-2 w-full"
                  onPress={() => handleNavigateUserToDetailsNews(String(news[0].id))}
                >

                  <View
                    className="mt-3 bg-border rounded-lg px-3 flex w-[90px]"
                  >
                    <Text className="font-poppins500 text-lg">{news && news[0].tipo ? news[0].tipo : ''}</Text>
                  </View>
                  <Text
                    className="font-poppins600 text-lg mt-2 text-justify"
                  >
                    {news && news[0].tipo ? news[0].titulo : ''}
                  </Text>
                </TouchableOpacity>
                <View className='justify-center flex flex-row  items-center'>
                  <Text className='font-poppins400 text-base text-blue-800' onPress={() => Linking.openURL('')}>
                    Confira materia na íntegra
                  </Text>
                  <Feather
                    name='arrow-up-right'
                    size={20}
                    color="#1e40af"
                  />
                </View>
                <View
                  className="w-full border border-border mb-6 mt-6"
                />
               
              </View>

              <FlatList
                data={news}
                showsVerticalScrollIndicator={false}
                keyExtractor={({ id }) => String(id)}
                renderItem={({ item }) => (
                  <MoreArticles data={item} />
                )}
              />
            </>
          )
        }



      </View>
    </SafeAreaView>
  )



}