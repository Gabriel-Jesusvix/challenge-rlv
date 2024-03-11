import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins';
import { ActivityIndicator, View } from 'react-native';
import { GetNewsProvider } from './src/hooks/GetNews';
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold
  })
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#3629B7" />
      </View>
    )
  }
  return (
    <GetNewsProvider>
      <Routes />
    </GetNewsProvider>
  );
}

