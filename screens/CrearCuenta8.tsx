import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DialogoCancelarCuentaNueva from "../components/DialogoCancelarCuentaNueva";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CrearCuenta8 = () => {
  const navigation = useNavigation();
  const [
    buttonOutlinedTextBlockContainerVisible,
    setButtonOutlinedTextBlockContainerVisible,
  ] = useState(false);

  const openButtonOutlinedTextBlockContainer = useCallback(() => {
    setButtonOutlinedTextBlockContainerVisible(true);
  }, []);

  const closeButtonOutlinedTextBlockContainer = useCallback(() => {
    setButtonOutlinedTextBlockContainerVisible(false);
  }, []);

  return (
    <>
      <Pressable
        style={styles.crearCuenta8}
        onPress={() => navigation.navigate("CrearCuenta9")}
      >
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={styles.tangudColorIcon}
          contentFit="cover"
          source={require("../assets/tangud-color5.png")}
        />
        <Text style={[styles.insertaLosDatos, styles.textTypo]}>
          Inserta los datos necesarios para crear tu cuenta con Tangud.
        </Text>
        <View style={[styles.input, styles.inputLayout]}>
          <View style={[styles.rectngulo2, styles.rectnguloPosition]} />
          <Text style={[styles.miemailemaildomcom, styles.miNombrePosition]}>
            miemail@emaildom.com
          </Text>
          <Image
            style={[styles.enmascararGrupo27, styles.enmascararLayout]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-271.png")}
          />
        </View>
        <View style={styles.input1}>
          <View style={[styles.rectngulo21, styles.rectnguloPosition]} />
          <Text style={[styles.miNombre, styles.miNombrePosition]}>
            mi_nombre
          </Text>
          <Image
            style={[styles.enmascararGrupo20, styles.enmascararLayout]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-20.png")}
          />
          <View style={styles.grupo149}>
            <View style={[styles.rectngulo1533, styles.containerShadowBox]} />
            <Text style={styles.serVisiblePara}>
              Será visible para otros usuarios
            </Text>
          </View>
        </View>
        <View style={[styles.passInput, styles.inputLayout]}>
          <View style={[styles.rectngulo22, styles.rectnguloPosition]} />
          <Text style={[styles.text, styles.textPosition]}>{` `}</Text>
          <Image
            style={[styles.enmascararGrupo27, styles.enmascararLayout]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-211.png")}
          />
          <Image
            style={[styles.enmascararGrupo24, styles.enmascararLayout]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-25.png")}
          />
          <View style={[styles.lnea4, styles.textPosition]} />
        </View>
        <View style={[styles.passInput1, styles.inputLayout]}>
          <View style={[styles.rectngulo23, styles.rectnguloPosition]} />
          <Text style={[styles.text, styles.textPosition]}>
            Repite la contraseña para confirmar
          </Text>
          <Image
            style={[styles.enmascararGrupo27, styles.enmascararLayout]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-211.png")}
          />
        </View>
        <View style={[styles.buttonFilledBlock, styles.buttonLayout]}>
          <View style={[styles.container, styles.containerPosition]} />
          <Text style={[styles.listo, styles.listoTypo]}>Listo</Text>
        </View>
        <Pressable
          style={[styles.buttonOutlinedTextBlock, styles.buttonLayout]}
          onPress={openButtonOutlinedTextBlockContainer}
        >
          <View style={[styles.rectngulo1511, styles.containerPosition]} />
          <Text style={[styles.cancelar, styles.listoTypo]}>Cancelar</Text>
        </Pressable>
      </Pressable>

      <Modal
        animationType="fade"
        transparent
        visible={buttonOutlinedTextBlockContainerVisible}
      >
        <View style={styles.buttonOutlinedTextBlockContainerOverlay}>
          <Pressable
            style={styles.buttonOutlinedTextBlockContainerBg}
            onPress={closeButtonOutlinedTextBlockContainer}
          />
          <DialogoCancelarCuentaNueva
            onClose={closeButtonOutlinedTextBlockContainer}
          />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.slategray,
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  inputLayout: {
    height: 48,
    width: 304,
  },
  rectnguloPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: Border.br_9xl,
    left: 0,
    right: 0,
    top: 0,
    shadowColor: "rgba(38, 50, 56, 0.5)",
    position: "absolute",
    backgroundColor: Color.white,
  },
  miNombrePosition: {
    color: Color.darkslategray_100,
    left: 54,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  enmascararLayout: {
    width: 36,
    maxHeight: "100%",
    top: 6,
    position: "absolute",
  },
  containerShadowBox: {
    backgroundColor: Color.darkgray,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  textPosition: {
    left: 54,
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
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    left: "50%",
    top: "50%",
    marginTop: -9,
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
    marginTop: -586,
    marginLeft: 1,
  },
  insertaLosDatos: {
    width: 305,
    marginTop: 49,
  },
  rectngulo2: {
    elevation: 16,
    shadowRadius: 16,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: Border.br_9xl,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  miemailemaildomcom: {
    marginTop: -9,
  },
  enmascararGrupo27: {
    left: 6,
    width: 36,
    maxHeight: "100%",
    top: 6,
    bottom: 6,
  },
  input: {
    marginTop: 30,
  },
  rectngulo21: {
    bottom: 8,
    elevation: 16,
    shadowRadius: 16,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: Border.br_9xl,
    left: 0,
    right: 0,
    top: 0,
  },
  miNombre: {
    marginTop: -13,
  },
  enmascararGrupo20: {
    bottom: 14,
    left: 6,
    width: 36,
    maxHeight: "100%",
    top: 6,
  },
  rectngulo1533: {
    marginLeft: -79,
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(38, 50, 56, 0.3)",
    shadowRadius: 8,
    elevation: 8,
    width: 154,
    height: 16,
    left: "50%",
    bottom: 1,
    backgroundColor: Color.darkgray,
    position: "absolute",
  },
  serVisiblePara: {
    marginLeft: -67,
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    textAlign: "right",
    textShadowColor: "rgba(38, 50, 56, 0.3)",
    textShadowOffset: {
      width: 0,
      height: 8,
    },
    textShadowRadius: 16,
    color: Color.white,
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    left: "50%",
    bottom: 1,
    position: "absolute",
  },
  grupo149: {
    right: 42,
    bottom: -1,
    width: 150,
    height: 17,
    position: "absolute",
  },
  input1: {
    height: 56,
    marginTop: 32,
    width: 304,
  },
  rectngulo22: {
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: Border.br_9xl,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  text: {
    marginTop: -9,
    textAlign: "left",
    color: Color.slategray,
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  enmascararGrupo24: {
    left: 262,
    bottom: 6,
    width: 36,
    maxHeight: "100%",
    top: 6,
  },
  lnea4: {
    marginTop: -9.5,
    borderColor: "#263238",
    borderRightWidth: 1,
    width: 2,
    height: 19,
    borderStyle: "solid",
  },
  passInput: {
    marginTop: 24,
  },
  rectngulo23: {
    elevation: 16,
    shadowRadius: 16,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: Border.br_9xl,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  passInput1: {
    marginTop: 33,
  },
  container: {
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: Color.darkgray,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    borderRadius: Border.br_lg,
  },
  listo: {
    marginLeft: -14.29,
  },
  buttonFilledBlock: {
    marginTop: 48,
    marginLeft: 158,
  },
  buttonOutlinedTextBlockContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  buttonOutlinedTextBlockContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
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
    marginRight: 160,
  },
  crearCuenta8: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default CrearCuenta8;
