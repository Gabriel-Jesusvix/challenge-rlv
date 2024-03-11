import { Text, View } from "react-native";


export function Header() {
  return (
    <View className="h-[120px] bg-white justify-center">
      <Text className="text-black font-poppins600">Olá,   {'\n'}seja bem vindo ao seu portal de noticias</Text>
    </View>
  )
}