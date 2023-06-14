const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import CrearCuenta13 from "./screens/CrearCuenta13";
import VerificarCuenta1 from "./screens/VerificarCuenta1";
import VerificarCuenta11 from "./screens/VerificarCuenta11";
import CrearCuenta12 from "./screens/CrearCuenta12";
import CrearCuenta11 from "./screens/CrearCuenta11";
import CrearCuenta10 from "./screens/CrearCuenta10";
import CrearCuenta9 from "./screens/CrearCuenta9";
import CrearCuenta8 from "./screens/CrearCuenta8";
import CrearCuenta7 from "./screens/CrearCuenta7";
import CrearCuenta6 from "./screens/CrearCuenta6";
import CrearCuenta5 from "./screens/CrearCuenta5";
import CrearCuenta4 from "./screens/CrearCuenta4";
import CrearCuenta3 from "./screens/CrearCuenta3";
import CrearCuenta2 from "./screens/CrearCuenta2";
import Cargando9 from "./screens/Cargando9";
import Cargando8 from "./screens/Cargando8";
import Cargando7 from "./screens/Cargando7";
import Cargando6 from "./screens/Cargando6";
import Cargando5 from "./screens/Cargando5";
import Cargando4 from "./screens/Cargando4";
import Cargando3 from "./screens/Cargando3";
import Cargando2 from "./screens/Cargando2";
import Cargando1 from "./screens/Cargando1";
import TFA2 from "./screens/TFA2";
import TFA1 from "./screens/TFA1";
import Login9 from "./screens/Login9";
import Login10 from "./screens/Login10";
import Login11 from "./screens/Login11";
import Login12 from "./screens/Login12";
import Login13 from "./screens/Login13";
import Login14 from "./screens/Login14";
import RecuperarCuenta11 from "./screens/RecuperarCuenta11";
import RecuperarCuenta10 from "./screens/RecuperarCuenta10";
import RecuperarCuenta9 from "./screens/RecuperarCuenta9";
import RecuperarCuenta8 from "./screens/RecuperarCuenta8";
import RecuperarCuenta7 from "./screens/RecuperarCuenta7";
import RecuperarCuenta6 from "./screens/RecuperarCuenta6";
import RecuperarCuenta5 from "./screens/RecuperarCuenta5";
import RecuperarCuenta4 from "./screens/RecuperarCuenta4";
import RecuperarCuenta3 from "./screens/RecuperarCuenta3";
import RecuperarCuenta2 from "./screens/RecuperarCuenta2";
import RecuperarCuenta1 from "./screens/RecuperarCuenta1";
import Login6 from "./screens/Login6";
import Login5 from "./screens/Login5";
import Login4 from "./screens/Login4";
import Login3 from "./screens/Login3";
import Login2 from "./screens/Login2";
import Login1 from "./screens/Login1";
import CrearCuenta1 from "./screens/CrearCuenta1";
import Login8 from "./screens/Login8";
import Login7 from "./screens/Login7";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Source Sans Pro_regular": require("./assets/fonts/Source_Sans_Pro_regular.ttf"),
    "Source Sans Pro_semibold": require("./assets/fonts/Source_Sans_Pro_semibold.ttf"),
    "Source Sans Pro_bold": require("./assets/fonts/Source_Sans_Pro_bold.ttf"),
    "Source Sans Pro_regular_italic": require("./assets/fonts/Source_Sans_Pro_regular_italic.ttf"),
    "Source Sans Pro_semibold_italic": require("./assets/fonts/Source_Sans_Pro_semibold_italic.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_black: require("./assets/fonts/Poppins_black.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="CrearCuenta13"
              component={CrearCuenta13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificarCuenta1"
              component={VerificarCuenta1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerificarCuenta11"
              component={VerificarCuenta11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta12"
              component={CrearCuenta12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta11"
              component={CrearCuenta11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta10"
              component={CrearCuenta10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta9"
              component={CrearCuenta9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta8"
              component={CrearCuenta8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta7"
              component={CrearCuenta7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta6"
              component={CrearCuenta6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta5"
              component={CrearCuenta5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta4"
              component={CrearCuenta4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta3"
              component={CrearCuenta3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta2"
              component={CrearCuenta2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cargando9"
              component={Cargando9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cargando8"
              component={Cargando8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cargando7"
              component={Cargando7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cargando6"
              component={Cargando6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cargando5"
              component={Cargando5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cargando4"
              component={Cargando4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cargando3"
              component={Cargando3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cargando2"
              component={Cargando2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Cargando1"
              component={Cargando1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TFA2"
              component={TFA2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TFA1"
              component={TFA1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login9"
              component={Login9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login10"
              component={Login10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login11"
              component={Login11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login12"
              component={Login12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login13"
              component={Login13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login14"
              component={Login14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarCuenta11"
              component={RecuperarCuenta11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarCuenta10"
              component={RecuperarCuenta10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarCuenta9"
              component={RecuperarCuenta9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarCuenta8"
              component={RecuperarCuenta8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarCuenta7"
              component={RecuperarCuenta7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarCuenta6"
              component={RecuperarCuenta6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarCuenta5"
              component={RecuperarCuenta5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarCuenta4"
              component={RecuperarCuenta4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarCuenta3"
              component={RecuperarCuenta3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarCuenta2"
              component={RecuperarCuenta2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RecuperarCuenta1"
              component={RecuperarCuenta1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login6"
              component={Login6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login5"
              component={Login5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login4"
              component={Login4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login3"
              component={Login3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login2"
              component={Login2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login1"
              component={Login1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CrearCuenta1"
              component={CrearCuenta1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login8"
              component={Login8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login7"
              component={Login7}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
