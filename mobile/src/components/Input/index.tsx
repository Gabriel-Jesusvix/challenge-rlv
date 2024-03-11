import { Feather } from '@expo/vector-icons';
import React from "react";
import { ActivityIndicator, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

type InputProps = TextInputProps & {
  onSearch: () => void
  isLoading: boolean
}

export function Input({ onSearch, isLoading,...rest }: InputProps) {

  
  return (
    <View>
      <View
        className='flex flex-row'
      >
        <TextInput
          className='w-[90%] h-[40px] border border-border rounded px-2'
          {...rest}
        />
        <TouchableOpacity
          className='bg-black w-10 h-10 rounded items-center justify-center ml-1'
          onPress={onSearch}
        >
          {
            isLoading ? (
              <ActivityIndicator size="small" color="#FFFFFF" />
            ) : (
              <Feather
                name="search"
                size={20}
                color="#FFFFFF"
              />
            )
          }

        </TouchableOpacity>
      </View>
     
    </View>
  )
}