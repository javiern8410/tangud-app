import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DialogoSalir from "../components/DialogoSalir";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const RecuperarCuenta1 = () => {
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
      <View style={styles.recuperarCuenta1}>
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={styles.tangudColorIcon}
          contentFit="cover"
          source={require("../assets/tangud-color24.png")}
        />
        <Text style={styles.insertaLaDireccin}>
          Inserta la dirección email asociada a tu cuenta y te enviaremos
          instrucciones para recuperarla.
        </Text>
        <Pressable
          style={styles.input}
          onPress={() => navigation.navigate("RecuperarCuenta2")}
        >
          <View style={[styles.rectngulo2, styles.containerShadowBox]} />
          <Text style={styles.emailDeRecuperacin}>Email de recuperación</Text>
          <Image
            style={styles.enmascararGrupo20}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-272.png")}
          />
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
  containerShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
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
    width: 305,
    marginTop: 58,
    textAlign: "left",
    color: Color.slategray,
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  rectngulo2: {
    borderRadius: Border.br_9xl,
    shadowRadius: 16,
    elevation: 16,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    position: "absolute",
    backgroundColor: Color.white,
  },
  emailDeRecuperacin: {
    left: 54,
    top: "50%",
    marginTop: -9,
    position: "absolute",
    textAlign: "left",
    color: Color.slategray,
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  enmascararGrupo20: {
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
      height: 8,
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
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
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
  recuperarCuenta1: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default RecuperarCuenta1;
