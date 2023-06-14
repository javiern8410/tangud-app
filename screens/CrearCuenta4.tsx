import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DialogoCancelarCuentaNueva from "../components/DialogoCancelarCuentaNueva";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const CrearCuenta4 = () => {
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
      <View style={styles.crearCuenta4}>
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={styles.tangudColorIcon}
          contentFit="cover"
          source={require("../assets/tangud-color7.png")}
        />
        <Text style={styles.insertaLosDatos}>
          Inserta los datos necesarios para crear tu cuenta con Tangud.
        </Text>
        <View style={[styles.input, styles.inputLayout]}>
          <View style={[styles.rectngulo2, styles.rectnguloShadowBox]} />
          <Text style={[styles.miemailemaildomcom, styles.tuContraseaPosition]}>
            miemail@emaildom.com
          </Text>
          <Image
            style={[styles.enmascararGrupo27, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-271.png")}
          />
        </View>
        <Pressable
          style={styles.input1}
          onPress={() => navigation.navigate("CrearCuenta5")}
        >
          <View style={[styles.rectngulo21, styles.rectnguloShadowBox]} />
          <Text style={[styles.unNombrePara, styles.tuContraseaPosition]}>
            Un nombre para tu perfil
          </Text>
          <Image
            style={[styles.enmascararGrupo20, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-20.png")}
          />
          <View style={styles.grupo149}>
            <View style={[styles.rectngulo1533, styles.containerShadowBox]} />
            <Text style={styles.serVisiblePara}>
              Será visible para otros usuarios
            </Text>
          </View>
        </Pressable>
        <View style={[styles.passInput, styles.inputLayout]}>
          <View style={[styles.rectngulo22, styles.rectnguloShadowBox]} />
          <Text style={[styles.tuContrasea, styles.tuContraseaPosition]}>
            Tu contraseña
          </Text>
          <Image
            style={[styles.enmascararGrupo27, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-212.png")}
          />
        </View>
        <View style={[styles.passInput1, styles.inputLayout]}>
          <View style={[styles.rectngulo23, styles.rectnguloShadowBox]} />
          <Text style={[styles.tuContrasea, styles.tuContraseaPosition]}>
            Repite la contraseña para confirmar
          </Text>
          <Image
            style={[styles.enmascararGrupo27, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-212.png")}
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
  inputLayout: {
    height: 48,
    width: 304,
  },
  rectnguloShadowBox: {
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
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
  tuContraseaPosition: {
    left: 54,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
  },
  enmascararPosition: {
    width: 36,
    maxHeight: "100%",
    left: 6,
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
    textAlign: "left",
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    fontSize: FontSize.size_sm,
    color: Color.slategray,
  },
  rectngulo2: {
    bottom: 0,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: Border.br_9xl,
    left: 0,
    right: 0,
    top: 0,
  },
  miemailemaildomcom: {
    color: Color.darkslategray_100,
    marginTop: -9,
    top: "50%",
  },
  enmascararGrupo27: {
    bottom: 6,
  },
  input: {
    marginTop: 30,
  },
  rectngulo21: {
    bottom: 8,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: Border.br_9xl,
    left: 0,
    right: 0,
    top: 0,
  },
  unNombrePara: {
    marginTop: -13,
    color: Color.slategray,
  },
  enmascararGrupo20: {
    bottom: 14,
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
    bottom: 0,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: Border.br_9xl,
    left: 0,
    right: 0,
    top: 0,
  },
  tuContrasea: {
    marginTop: -9,
    top: "50%",
    color: Color.slategray,
  },
  passInput: {
    marginTop: 24,
  },
  rectngulo23: {
    bottom: 0,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    borderRadius: Border.br_9xl,
    left: 0,
    right: 0,
    top: 0,
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
  crearCuenta4: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default CrearCuenta4;
