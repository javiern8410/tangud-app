import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DialogoSalir from "../components/DialogoSalir";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const RecuperarCuenta6 = () => {
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
      <View style={styles.recuperarCuenta6}>
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
        <View style={styles.grupo117}>
          <View style={styles.lnea2} />
          <Text style={styles.text}>1</Text>
        </View>
        <View style={[styles.grupo118, styles.grupoLayout]}>
          <View style={styles.lnea2} />
          <Text style={styles.text}>2</Text>
        </View>
        <View style={[styles.grupo119, styles.grupoLayout]}>
          <View style={styles.lnea2} />
          <Text style={styles.text}>3</Text>
        </View>
        <View style={[styles.grupo120, styles.grupoLayout]}>
          <View style={styles.lnea2} />
          <Text style={styles.text}>4</Text>
        </View>
        <View style={[styles.grupo121, styles.grupoLayout]}>
          <View style={styles.lnea2} />
          <Text style={styles.text}>5</Text>
        </View>
        <View style={[styles.grupo122, styles.grupoLayout]}>
          <View style={styles.lnea2} />
          <Text style={styles.text}>6</Text>
        </View>
        <Pressable
          style={[styles.buttonFilledBlock, styles.buttonLayout]}
          onPress={() => navigation.navigate("RecuperarCuenta7")}
        >
          <View style={[styles.container, styles.containerPosition]} />
          <Text style={[styles.listo, styles.listoTypo]}>Listo</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonOutlinedTextBlock, styles.buttonLayout]}
          onPress={() => navigation.navigate("Login1")}
        >
          <View style={[styles.rectngulo1511, styles.containerPosition]} />
          <Text style={[styles.cancelar, styles.listoTypo]}>Cancelar</Text>
        </Pressable>
        <Pressable style={styles.salirDeAquContainer} onPress={openSalirDeAqu}>
          <Text style={[styles.salirDeAqu, styles.listoTypo]}>
            Salir de aquí
          </Text>
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
  grupoLayout: {
    marginTop: -51,
    height: 51,
    width: 41,
  },
  buttonLayout: {
    height: 36,
    width: 146,
  },
  containerPosition: {
    borderRadius: Border.br_lg,
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
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
    borderColor: "#263238",
    borderTopWidth: 1,
    height: 2,
    borderStyle: "solid",
    right: 0,
    position: "absolute",
  },
  text: {
    marginLeft: -9.17,
    fontSize: FontSize.size_17xl,
    lineHeight: 15,
    color: Color.darkslategray_100,
    textAlign: "center",
    left: "50%",
    top: 0,
    position: "absolute",
    fontFamily: FontFamily.sourceSansProRegular,
  },
  grupo117: {
    marginTop: 29,
    marginRight: 245,
    height: 51,
    width: 41,
  },
  grupo118: {
    marginRight: 147,
  },
  grupo119: {
    marginRight: 49,
  },
  grupo120: {
    marginLeft: 49,
  },
  grupo121: {
    marginLeft: 147,
  },
  grupo122: {
    marginLeft: 247,
  },
  container: {
    backgroundColor: Color.darkorange,
    shadowColor: "rgba(38, 50, 56, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
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
  cancelar: {
    marginLeft: -27,
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
    color: Color.white,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 19,
  },
  salirDeAquContainer: {
    marginTop: 131,
    marginLeft: 1,
  },
  recuperarCuenta6: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default RecuperarCuenta6;
