import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color, Padding } from "../GlobalStyles";

const Cargando9 = () => {
  return (
    <View style={styles.cargando9}>
      <Image
        style={styles.grupo170Icon}
        contentFit="cover"
        source={require("../assets/grupo-170.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  grupo170Icon: {
    width: 140,
    height: 245,
  },
  cargando9: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    paddingLeft: Padding.p_91xl,
    paddingTop: Padding.p_187xl,
    paddingRight: Padding.p_91xl,
  },
});

export default Cargando9;
