import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding } from "../GlobalStyles";

const Cargando5 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.cargando5}
      onPress={() => navigation.navigate("Cargando6")}
    >
      <Image
        style={styles.grupo170Icon}
        contentFit="cover"
        source={require("../assets/grupo-1704.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  grupo170Icon: {
    width: 140,
    height: 245,
  },
  cargando5: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    paddingLeft: Padding.p_91xl,
    paddingTop: Padding.p_187xl,
    paddingRight: Padding.p_91xl,
  },
});

export default Cargando5;
