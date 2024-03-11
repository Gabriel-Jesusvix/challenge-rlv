import { Feather } from '@expo/vector-icons';
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useMoreArtciles } from "./useMoreArtciles";


export function MoreArticles(data: any) {
  const { handleNavigateUserToDetailsNews } = useMoreArtciles()
  const { titulo, data_publicacao, tipo, link} = data.data

  return (
    <TouchableOpacity
      className="flex flex-row items-center"
      onPress={() => handleNavigateUserToDetailsNews(link)}
    >

      <View
        className="ml-2 flex-1"
      >
        <View
          className="bg-border rounded-lg px-3 flex w-[80px]"
        >
          <Text className="font-poppins500 text-xs">{tipo}</Text>
        </View>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className="font-poppins600 text-sm ">
          {titulo}
        </Text>
        <Text className="font-poppins500 text-sm ">{data_publicacao}</Text>
        <View className='flex flex-row  items-center mb-4'>
          <Text className='font-poppins400 text-sm text-blue-800'>
            Confira materia na íntegra
          </Text>
          <Feather
            name='arrow-up-right'
            size={20}
            color="#1e40af"
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}