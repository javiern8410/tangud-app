import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DialogoCancelarCuentaNueva from "../components/DialogoCancelarCuentaNueva";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CrearCuenta11 = () => {
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
      <View style={styles.crearCuenta11}>
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={styles.tangudColorIcon}
          contentFit="cover"
          source={require("../assets/tangud-color2.png")}
        />
        <Text style={styles.insertaLosDatos}>
          Inserta los datos necesarios para crear tu cuenta con Tangud.
        </Text>
        <View style={[styles.input, styles.inputLayout1]}>
          <View style={styles.rectnguloShadowBox1} />
          <Text style={[styles.miemailemaildomcom, styles.miNombrePosition]}>
            miemail@emaildom.com
          </Text>
          <Image
            style={[styles.enmascararGrupo27, styles.enmascararPosition1]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-27.png")}
          />
        </View>
        <View style={[styles.input1, styles.inputLayout]}>
          <View style={styles.rectnguloPosition} />
          <Text style={[styles.miNombre, styles.textSpaceBlock]}>
            mi_nombre
          </Text>
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
          <Text style={[styles.text, styles.textTypo]}>●●●●●●●●●●</Text>
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
          <View style={styles.rectnguloShadowBox1} />
          <Text style={[styles.text1, styles.textTypo]}>●●●●●●●●●●</Text>
          <Image
            style={[styles.enmascararGrupo27, styles.enmascararPosition1]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-21.png")}
          />
          <Image
            style={[styles.enmascararGrupo251, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-25.png")}
          />
        </View>
        <Pressable
          style={[styles.buttonFilledBlock, styles.buttonLayout]}
          onPress={() => navigation.navigate("CrearCuenta12")}
        >
          <View style={[styles.container, styles.containerPosition]} />
          <Text style={[styles.listo, styles.listoTypo]}>Listo</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonOutlinedTextBlock, styles.buttonLayout]}
          onPress={openButtonOutlinedTextBlockContainer}
        >
          <View style={[styles.rectngulo1511, styles.containerPosition]} />
          <Text style={[styles.cancelar, styles.listoTypo]}>Cancelar</Text>
        </Pressable>
      </View>

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
  inputLayout1: {
    height: 48,
    width: 304,
  },
  miNombrePosition: {
    color: Color.darkslategray_100,
    left: 54,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.sourceSansProRegular,
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
  textSpaceBlock: {
    marginTop: -13,
    lineHeight: 19,
  },
  grupoPosition: {
    height: 17,
    bottom: -1,
    right: 42,
    position: "absolute",
  },
  rectnguloShadowBox: {
    height: 16,
    borderRadius: Border.br_5xs,
    left: "50%",
    bottom: 1,
    elevation: 8,
    shadowRadius: 8,
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
  textTypo: {
    fontFamily: FontFamily.poppins,
    letterSpacing: 1,
    color: Color.darkslategray_100,
    left: 54,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  enmascararPosition: {
    left: 262,
    width: 36,
    maxHeight: "100%",
    top: 6,
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
    color: Color.slategray,
    width: 305,
    marginTop: 49,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  rectnguloShadowBox1: {
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
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
    shadowColor: "rgba(38, 50, 56, 0.5)",
    backgroundColor: Color.white,
  },
  miemailemaildomcom: {
    marginTop: -9,
    left: 54,
    top: "50%",
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
    color: Color.darkslategray_100,
    left: 54,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.sourceSansProRegular,
    fontSize: FontSize.size_sm,
  },
  enmascararGrupo20: {
    bottom: 14,
  },
  rectngulo1533: {
    marginLeft: -79,
    backgroundColor: Color.darkgray,
    shadowColor: "rgba(38, 50, 56, 0.3)",
    width: 154,
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
    fontWeight: "900",
    marginTop: -13,
    lineHeight: 19,
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
  text1: {
    marginTop: -7,
  },
  enmascararGrupo251: {
    bottom: 6,
  },
  passInput1: {
    marginTop: 25,
  },
  container: {
    backgroundColor: Color.darkorange,
    elevation: 8,
    shadowRadius: 8,
    borderRadius: Border.br_lg,
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
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
  },
  cancelar: {
    marginLeft: -27,
  },
  buttonOutlinedTextBlock: {
    marginTop: -36,
    marginRight: 160,
  },
  crearCuenta11: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default CrearCuenta11;
