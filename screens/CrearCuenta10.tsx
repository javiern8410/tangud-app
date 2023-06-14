import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DialogoCancelarCuentaNueva from "../components/DialogoCancelarCuentaNueva";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const CrearCuenta10 = () => {
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
        style={styles.crearCuenta10}
        onPress={() => navigation.navigate("CrearCuenta11")}
      >
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={styles.tangudColorIcon}
          contentFit="cover"
          source={require("../assets/tangud-color3.png")}
        />
        <Text style={[styles.insertaLosDatos, styles.text1Typo]}>
          Inserta los datos necesarios para crear tu cuenta con Tangud.
        </Text>
        <View style={[styles.input, styles.inputLayout1]}>
          <View style={[styles.rectngulo2, styles.rectnguloShadowBox1]} />
          <Text style={[styles.miemailemaildomcom, styles.textPosition]}>
            miemail@emaildom.com
          </Text>
          <Image
            style={[styles.enmascararGrupo27, styles.enmascararPosition1]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-271.png")}
          />
        </View>
        <View style={[styles.input1, styles.inputLayout]}>
          <View style={styles.rectnguloPosition} />
          <Text style={[styles.miNombre, styles.textPosition]}>mi_nombre</Text>
          <Image
            style={[styles.enmascararGrupo20, styles.enmascararPosition1]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-20.png")}
          />
          <View style={[styles.grupo149, styles.grupoPosition]}>
            <View style={[styles.rectngulo1533, styles.rectnguloShadowBox]} />
            <Text style={[styles.serVisiblePara, styles.superfuerteTypo]}>
              Será visible para otros usuarios
            </Text>
          </View>
        </View>
        <View style={[styles.passInput, styles.inputLayout]}>
          <View style={styles.rectnguloPosition} />
          <Text style={[styles.text, styles.textPosition]}>●●●●●●●●●●</Text>
          <Image
            style={[styles.enmascararGrupo20, styles.enmascararPosition1]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-21.png")}
          />
          <Image
            style={[styles.enmascararGrupo25, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-25.png")}
          />
          <View style={[styles.grupo146, styles.grupoPosition]}>
            <View style={[styles.rectngulo15331, styles.rectnguloShadowBox]} />
            <Text style={[styles.superfuerte, styles.superfuerteTypo]}>
              Superfuerte
            </Text>
          </View>
        </View>
        <View style={[styles.passInput1, styles.inputLayout1]}>
          <View style={[styles.rectngulo23, styles.rectnguloShadowBox1]} />
          <Text style={[styles.text1, styles.text1Position]}>{` `}</Text>
          <Image
            style={[styles.enmascararGrupo27, styles.enmascararPosition1]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-21.png")}
          />
          <Image
            style={[styles.enmascararGrupo24, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-25.png")}
          />
          <View style={[styles.lnea4, styles.text1Position]} />
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
  text1Typo: {
    textAlign: "left",
    color: Color.slategray,
    fontSize: FontSize.size_sm,
  },
  inputLayout1: {
    height: 48,
    width: 304,
  },
  rectnguloShadowBox1: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
  },
  textPosition: {
    color: Color.darkslategray_100,
    left: 54,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  enmascararPosition1: {
    width: 36,
    maxHeight: "100%",
    left: 6,
    top: 6,
    position: "absolute",
  },
  inputLayout: {
    height: 56,
    width: 304,
  },
  grupoPosition: {
    height: 17,
    bottom: -1,
    right: 42,
    position: "absolute",
  },
  rectnguloShadowBox: {
    height: 16,
    elevation: 8,
    shadowRadius: 8,
    borderRadius: Border.br_5xs,
    left: "50%",
    bottom: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    position: "absolute",
  },
  superfuerteTypo: {
    textShadowRadius: 16,
    textShadowOffset: {
      width: 0,
      height: 8,
    },
    textShadowColor: "rgba(38, 50, 56, 0.3)",
    textAlign: "right",
    color: Color.white,
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    lineHeight: 14,
    letterSpacing: 0,
    fontSize: FontSize.size_3xs,
    left: "50%",
    bottom: 1,
    position: "absolute",
  },
  enmascararPosition: {
    left: 262,
    width: 36,
    maxHeight: "100%",
    top: 6,
    position: "absolute",
  },
  text1Position: {
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
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
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
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  miemailemaildomcom: {
    marginTop: -9,
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
  },
  enmascararGrupo27: {
    bottom: 6,
  },
  input: {
    marginTop: 30,
  },
  rectnguloPosition: {
    bottom: 8,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    borderRadius: Border.br_9xl,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  miNombre: {
    marginTop: -13,
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
  },
  enmascararGrupo20: {
    bottom: 14,
  },
  rectngulo1533: {
    marginLeft: -79,
    shadowColor: "rgba(38, 50, 56, 0.3)",
    width: 154,
    backgroundColor: Color.darkgray,
  },
  serVisiblePara: {
    marginLeft: -67,
  },
  grupo149: {
    width: 150,
  },
  input1: {
    marginTop: 32,
  },
  text: {
    marginTop: -11,
    letterSpacing: 1,
    fontFamily: FontFamily.poppins,
  },
  enmascararGrupo25: {
    bottom: 14,
  },
  rectngulo15331: {
    marginLeft: -35.5,
    backgroundColor: Color.mediumspringgreen,
    width: 69,
    shadowColor: "rgba(38, 50, 56, 0.5)",
    height: 16,
    elevation: 8,
    shadowRadius: 8,
    borderRadius: Border.br_5xs,
    left: "50%",
    bottom: 1,
  },
  superfuerte: {
    marginLeft: -25.5,
  },
  grupo146: {
    width: 67,
  },
  passInput: {
    marginTop: 24,
  },
  rectngulo23: {
    shadowRadius: 24,
    elevation: 24,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 1,
    borderRadius: Border.br_9xl,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  text1: {
    marginTop: -9,
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    textAlign: "left",
    color: Color.slategray,
    fontSize: FontSize.size_sm,
  },
  enmascararGrupo24: {
    bottom: 6,
  },
  lnea4: {
    marginTop: -9.5,
    borderColor: "#263238",
    borderRightWidth: 1,
    width: 2,
    height: 19,
    borderStyle: "solid",
  },
  passInput1: {
    marginTop: 25,
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
  crearCuenta10: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default CrearCuenta10;
