import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DialogoSalir from "../components/DialogoSalir";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const RecuperarCuenta3 = () => {
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
      <Pressable
        style={styles.recuperarCuenta3}
        onPress={() => navigation.navigate("RecuperarCuenta4")}
      >
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={styles.tangudColorIcon}
          contentFit="cover"
          source={require("../assets/tangud-color22.png")}
        />
        <Text style={styles.insertaLaDireccin}>
          Inserta la dirección email asociada a tu cuenta y te enviaremos
          instrucciones para recuperarla.
        </Text>
        <View style={styles.input}>
          <View style={[styles.rectngulo2, styles.containerShadowBox]} />
          <Text style={[styles.miemailemaildomcom, styles.lnea3Position]}>
            miemail@emaildom.com
          </Text>
          <View style={[styles.lnea3, styles.lnea3Position]} />
          <Image
            style={styles.enmascararGrupo27}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-272.png")}
          />
        </View>
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
          <Text style={[styles.salirDeAqu, styles.listoTypo]}>
            Salir de aquí
          </Text>
        </Pressable>
      </Pressable>

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
  containerShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
  },
  lnea3Position: {
    top: "50%",
    position: "absolute",
  },
  buttonLayout: {
    height: 36,
    width: 146,
  },
  containerPosition: {
    borderRadius: Border.br_lg,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  listoTypo: {
    textAlign: "center",
    color: Color.white,
    fontWeight: "600",
    letterSpacing: 0,
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
  insertaLaDireccin: {
    color: Color.slategray,
    width: 305,
    marginTop: 58,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  rectngulo2: {
    borderRadius: Border.br_9xl,
    shadowRadius: 24,
    elevation: 24,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    position: "absolute",
    backgroundColor: Color.white,
  },
  miemailemaildomcom: {
    left: 54,
    color: Color.darkslategray_100,
    marginTop: -9,
    top: "50%",
    textAlign: "left",
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  lnea3: {
    marginTop: -10,
    left: 201,
    borderColor: "#263238",
    borderRightWidth: 1,
    width: 2,
    height: 19,
    borderStyle: "solid",
  },
  enmascararGrupo27: {
    top: 6,
    bottom: 6,
    left: 6,
    maxHeight: "100%",
    width: 36,
    position: "absolute",
  },
  input: {
    width: 304,
    height: 48,
    marginTop: 28,
  },
  container: {
    backgroundColor: Color.darkgray,
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
  },
  listo: {
    marginLeft: -14.29,
    fontFamily: FontFamily.sourceSansProSemibold,
    left: "50%",
    textAlign: "center",
    color: Color.white,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    marginTop: -9,
    position: "absolute",
  },
  buttonFilledBlock: {
    marginTop: 49,
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
    left: "50%",
    textAlign: "center",
    color: Color.white,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    marginTop: -9,
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
    textAlign: "center",
    color: Color.white,
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 19,
  },
  salirDeAquContainer: {
    marginTop: 131,
    marginLeft: 1,
  },
  recuperarCuenta3: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default RecuperarCuenta3;
