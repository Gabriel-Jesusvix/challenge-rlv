import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";


export function useMoreArtciles() {
  const { navigate } = useNavigation()


  function handleNavigateUserToDetailsNews(link: string) {
   Linking.openURL(link)
  }

  return {
    handleNavigateUserToDetailsNews,
   
  }
}