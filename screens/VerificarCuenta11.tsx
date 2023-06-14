import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const VerificarCuenta11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verificarCuenta1}>
      <Image
        style={styles.backgroundIcon}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <Image
        style={styles.tangudColorIcon}
        contentFit="cover"
        source={require("../assets/tangud-color1.png")}
      />
      <Text style={styles.porSeguridadHemos}>
        Por seguridad hemos enviado un código de verificación a tu dirección de
        email. Insértalo aquí para completar el proceso.
      </Text>
      <Pressable
        style={styles.grupo148}
        onPress={() => navigation.navigate("VerificarCuenta1")}
      >
        <View style={[styles.grupo117, styles.grupoPosition1]}>
          <View style={[styles.lnea2, styles.lnea2Position]} />
          <Text style={styles.text}>1</Text>
        </View>
        <View style={[styles.grupo118, styles.grupoPosition]}>
          <View style={[styles.lnea2, styles.lnea2Position]} />
          <Text style={styles.text}>2</Text>
        </View>
        <View style={[styles.grupo119, styles.grupoPosition]}>
          <View style={[styles.lnea2, styles.lnea2Position]} />
          <Text style={styles.text}>3</Text>
        </View>
        <View style={[styles.grupo120, styles.grupoPosition]}>
          <View style={[styles.lnea2, styles.lnea2Position]} />
          <Text style={styles.text}>4</Text>
        </View>
        <View style={[styles.grupo121, styles.grupoPosition]}>
          <View style={[styles.lnea2, styles.lnea2Position]} />
          <Text style={styles.text}>5</Text>
        </View>
        <View style={[styles.grupo122, styles.lnea2Position]}>
          <View style={[styles.lnea2, styles.lnea2Position]} />
          <Text style={styles.text}>6</Text>
        </View>
      </Pressable>
      <View style={[styles.buttonFilledBlock, styles.buttonLayout]}>
        <View style={[styles.container, styles.containerPosition]} />
        <Text style={[styles.listo, styles.listoTypo]}>Listo</Text>
      </View>
      <View style={[styles.buttonOutlinedTextBlock, styles.buttonLayout]}>
        <View style={[styles.rectngulo1511, styles.containerPosition]} />
        <Text style={[styles.volverA, styles.listoTypo]}>Volver a enviar</Text>
      </View>
      <Text style={[styles.salirDeAqu, styles.listoTypo]}>Salir de aquí</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  grupoPosition1: {
    width: 41,
    bottom: 0,
    top: 0,
  },
  lnea2Position: {
    right: 0,
    position: "absolute",
  },
  grupoPosition: {
    left: "50%",
    width: 41,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  buttonLayout: {
    height: 36,
    width: 146,
  },
  containerPosition: {
    borderRadius: Border.br_lg,
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  listoTypo: {
    color: Color.white,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  backgroundIcon: {
    width: 360,
    height: 640,
  },
  tangudColorIcon: {
    width: 241,
    height: 72,
    marginTop: -586,
    marginLeft: 1,
  },
  porSeguridadHemos: {
    color: Color.slategray,
    textAlign: "left",
    width: 305,
    marginTop: 125,
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  lnea2: {
    bottom: 3,
    left: -1,
    borderColor: "#263238",
    borderTopWidth: 1,
    height: 2,
    borderStyle: "solid",
  },
  text: {
    marginLeft: -9.17,
    fontSize: FontSize.size_17xl,
    lineHeight: 15,
    color: Color.darkslategray_100,
    opacity: 0,
    textAlign: "center",
    left: "50%",
    top: 0,
    position: "absolute",
    fontFamily: FontFamily.sourceSansProRegular,
  },
  grupo117: {
    left: 0,
    position: "absolute",
    width: 41,
    bottom: 0,
    top: 0,
  },
  grupo118: {
    marginLeft: -94.67,
  },
  grupo119: {
    marginLeft: -45.67,
  },
  grupo120: {
    marginLeft: 3.33,
  },
  grupo121: {
    marginLeft: 52.33,
  },
  grupo122: {
    width: 41,
    bottom: 0,
    top: 0,
    right: 0,
  },
  grupo148: {
    width: 287,
    height: 51,
    marginTop: 20,
    marginLeft: 1,
  },
  container: {
    backgroundColor: Color.darkgray,
    shadowColor: "rgba(38, 50, 56, 0.5)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
  },
  listo: {
    marginLeft: -14.29,
    fontFamily: FontFamily.sourceSansProSemibold,
    top: "50%",
    marginTop: -9,
    color: Color.white,
    fontWeight: "600",
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  buttonFilledBlock: {
    marginTop: 45,
    marginLeft: 158,
  },
  rectngulo1511: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
  },
  volverA: {
    marginLeft: -47,
    fontFamily: FontFamily.sourceSansProSemibold,
    top: "50%",
    marginTop: -9,
    color: Color.white,
    fontWeight: "600",
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  buttonOutlinedTextBlock: {
    marginTop: -36,
    marginRight: 160,
  },
  salirDeAqu: {
    fontStyle: "italic",
    fontFamily: FontFamily.sourceSansProSemiboldItalic,
    textShadowColor: "rgba(38, 50, 56, 0.3)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
    marginTop: 130,
    color: Color.white,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 19,
    marginLeft: 1,
  },
  verificarCuenta1: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default VerificarCuenta11;
