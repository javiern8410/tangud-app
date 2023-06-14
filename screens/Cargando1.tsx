import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const Cargando1 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.cargando1}
      onPress={() => navigation.navigate("Cargando2")}
    />
  );
};

const styles = StyleSheet.create({
  cargando1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
  },
});

export default Cargando1;
