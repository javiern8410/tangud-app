import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DialogoSalir from "../components/DialogoSalir";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const RecuperarCuenta5 = () => {
  const navigation = useNavigation();
  const [salirDeAquVisible, setSalirDeAquVisible] = useState(false);

  const openSalirDeAqu = useCallback(() => {
    setSalirDeAquVisible(true);
  }, []);

  const closeSalirDeAqu = useCallback(() => {
    setSalirDeAquVisible(false);
  }, []);

  return (
    <>
      <View style={styles.recuperarCuenta5}>
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={styles.tangudColorIcon}
          contentFit="cover"
          source={require("../assets/tangud-color20.png")}
        />
        <Text style={styles.insertaElCdigo}>
          Inserta el código que enviamos a tu dirección de email.
        </Text>
        <Pressable
          style={styles.grupo148}
          onPress={() => navigation.navigate("RecuperarCuenta6")}
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
        <Pressable
          style={[styles.buttonOutlinedTextBlock, styles.buttonLayout]}
          onPress={() => navigation.navigate("Login1")}
        >
          <View style={[styles.rectngulo1511, styles.containerPosition]} />
          <Text style={[styles.cancelar, styles.listoTypo]}>Cancelar</Text>
        </Pressable>
        <Pressable style={styles.salirDeAquContainer} onPress={openSalirDeAqu}>
          <Text style={styles.salirDeAqu}>Salir de aquí</Text>
        </Pressable>
      </View>

      <Modal animationType="fade" transparent visible={salirDeAquVisible}>
        <View style={styles.salirDeAquOverlay}>
          <Pressable style={styles.salirDeAquBg} onPress={closeSalirDeAqu} />
          <DialogoSalir onClose={closeSalirDeAqu} />
        </View>
      </Modal>
    </>
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
    fontFamily: FontFamily.sourceSansProSemibold,
    top: "50%",
    marginTop: -9,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    color: Color.white,
    left: "50%",
    position: "absolute",
    fontSize: FontSize.size_sm,
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
  insertaElCdigo: {
    color: Color.slategray,
    textAlign: "left",
    width: 305,
    marginTop: 58,
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  lnea2: {
    bottom: 3,
    left: -1,
    borderColor: "#607d8b",
    borderTopWidth: 1,
    height: 2,
    borderStyle: "solid",
  },
  text: {
    marginLeft: -9.17,
    fontSize: FontSize.size_17xl,
    lineHeight: 15,
    opacity: 0,
    textAlign: "center",
    color: Color.white,
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
    marginTop: 29,
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
  cancelar: {
    marginLeft: -27,
  },
  buttonOutlinedTextBlock: {
    marginTop: -36,
    marginRight: 158,
  },
  salirDeAquOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  salirDeAquBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  salirDeAqu: {
    fontStyle: "italic",
    fontFamily: FontFamily.sourceSansProSemiboldItalic,
    textShadowColor: "rgba(38, 50, 56, 0.5)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    color: Color.white,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  salirDeAquContainer: {
    marginTop: 131,
    marginLeft: 1,
  },
  recuperarCuenta5: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default RecuperarCuenta5;
