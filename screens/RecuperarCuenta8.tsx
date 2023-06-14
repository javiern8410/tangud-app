import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const RecuperarCuenta8 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.recuperarCuenta8}
      onPress={() => navigation.navigate("RecuperarCuenta9")}
    >
      <Image
        style={styles.backgroundIcon}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <Image
        style={styles.tangudColorIcon}
        contentFit="cover"
        source={require("../assets/tangud-color19.png")}
      />
      <Text style={styles.holaMiNombreInsertaContainer}>
        <Text style={styles.hola}>{`Hola `}</Text>
        <Text style={styles.miNombre}>Mi_nombre</Text>
        <Text style={styles.hola}>
          . Inserta la nueva contraseña de tu cuenta.
        </Text>
      </Text>
      <View style={[styles.passInput, styles.passLayout]}>
        <View style={[styles.rectngulo2, styles.rectnguloPosition]} />
        <Text style={[styles.text, styles.textPosition]}>{` `}</Text>
        <Image
          style={[styles.enmascararGrupo21, styles.enmascararPosition]}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-213.png")}
        />
        <Image
          style={[styles.enmascararGrupo24, styles.enmascararPosition]}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-25.png")}
        />
        <View style={[styles.lnea4, styles.textPosition]} />
      </View>
      <View style={[styles.passInput1, styles.passLayout]}>
        <View style={[styles.rectngulo21, styles.rectnguloPosition]} />
        <Text style={[styles.text, styles.textPosition]}>
          Confirma la Nueva contraseña
        </Text>
        <Image
          style={[styles.enmascararGrupo21, styles.enmascararPosition]}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-213.png")}
        />
      </View>
      <View style={styles.buttonFilledBlock}>
        <View style={[styles.container, styles.rectnguloPosition]} />
        <Text style={styles.listo}>Listo</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  passLayout: {
    height: 48,
    width: 304,
  },
  rectnguloPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  textPosition: {
    left: 54,
    top: "50%",
    position: "absolute",
  },
  enmascararPosition: {
    width: 36,
    maxHeight: "100%",
    bottom: 6,
    top: 6,
    position: "absolute",
  },
  backgroundIcon: {
    width: 360,
    height: 640,
  },
  tangudColorIcon: {
    width: 241,
    height: 72,
    marginTop: -511,
    marginLeft: 1,
  },
  hola: {
    fontFamily: FontFamily.sourceSansProRegular,
  },
  miNombre: {
    fontStyle: "italic",
    fontFamily: FontFamily.sourceSansProRegularItalic,
  },
  holaMiNombreInsertaContainer: {
    width: 305,
    marginTop: 58,
    textAlign: "left",
    color: Color.slategray,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  rectngulo2: {
    shadowRadius: 24,
    elevation: 24,
    borderRadius: Border.br_9xl,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  text: {
    marginTop: -9,
    left: 54,
    fontFamily: FontFamily.sourceSansProRegular,
    textAlign: "left",
    color: Color.slategray,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  enmascararGrupo21: {
    left: 6,
  },
  enmascararGrupo24: {
    left: 262,
  },
  lnea4: {
    marginTop: -9.5,
    borderStyle: "solid",
    borderColor: "#263238",
    borderRightWidth: 1,
    width: 2,
    height: 19,
  },
  passInput: {
    marginTop: 30,
  },
  rectngulo21: {
    shadowRadius: 16,
    elevation: 16,
    borderRadius: Border.br_9xl,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  passInput1: {
    marginTop: 33,
  },
  container: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.darkgray,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  listo: {
    marginLeft: -14.29,
    left: "50%",
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansProSemibold,
    color: Color.white,
    textAlign: "center",
    top: "50%",
    marginTop: -9,
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  buttonFilledBlock: {
    width: 146,
    height: 36,
    marginTop: 48,
    marginLeft: 158,
  },
  recuperarCuenta8: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default RecuperarCuenta8;
