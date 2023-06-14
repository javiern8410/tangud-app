import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DialogoSalir from "../components/DialogoSalir";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const TFA2 = () => {
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
      <View style={styles.tfa2}>
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={styles.tangudColorIcon}
          contentFit="cover"
          source={require("../assets/tangud-color10.png")}
        />
        <Text style={styles.insertaElCdigo}>
          Inserta el código de verificación para completar la autenticación en
          dos pasos.
        </Text>
        <View style={styles.grupo148}>
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
        </View>
        <Pressable
          style={styles.buttonFilledBlock}
          onPress={() => navigation.navigate("Cargando1")}
        >
          <View style={[styles.container, styles.lnea2Position]} />
          <Text style={[styles.listo, styles.listoTypo]}>Listo</Text>
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
    fontSize: FontSize.size_sm,
    lineHeight: 19,
  },
  lnea2: {
    bottom: 3,
    left: -1,
    borderStyle: "solid",
    borderColor: "#263238",
    borderTopWidth: 1,
    height: 2,
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
    left: 0,
    position: "absolute",
    width: 41,
  },
  grupo118: {
    marginLeft: -94.67,
    width: 41,
    bottom: 0,
    top: 0,
  },
  grupo119: {
    marginLeft: -45.67,
    width: 41,
    bottom: 0,
    top: 0,
  },
  grupo120: {
    marginLeft: 3.33,
    width: 41,
    bottom: 0,
    top: 0,
  },
  grupo121: {
    marginLeft: 52.33,
    width: 41,
    bottom: 0,
    top: 0,
  },
  grupo122: {
    width: 41,
    bottom: 0,
    top: 0,
  },
  grupo148: {
    width: 287,
    height: 51,
    marginTop: 30,
    marginLeft: 1,
  },
  container: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.darkorange,
    shadowColor: "rgba(38, 50, 56, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
  },
  listo: {
    marginTop: -9,
    marginLeft: -14.29,
    top: "50%",
    fontFamily: FontFamily.sourceSansProSemibold,
    left: "50%",
    position: "absolute",
  },
  buttonFilledBlock: {
    width: 146,
    height: 36,
    marginTop: 45,
    marginLeft: 158,
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
    lineHeight: 19,
    color: Color.white,
    fontWeight: "600",
    letterSpacing: 0,
  },
  salirDeAquContainer: {
    marginTop: 130,
    marginLeft: 1,
  },
  tfa2: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
});

export default TFA2;
