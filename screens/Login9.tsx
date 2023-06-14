import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DialogoSalir from "../components/DialogoSalir";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Login9 = () => {
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
      <View style={styles.login9}>
        <Image
          style={styles.backgroundIcon}
          contentFit="cover"
          source={require("../assets/background.png")}
        />
        <Image
          style={styles.tangudColorIcon}
          contentFit="cover"
          source={require("../assets/tangud-color11.png")}
        />
        <View style={[styles.input, styles.inputLayout]}>
          <View style={[styles.rectngulo2, styles.rectnguloShadowBox]} />
          <Text style={[styles.miNombre, styles.textPosition]}>mi_nombre</Text>
          <Image
            style={[styles.enmascararGrupo20, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-202.png")}
          />
        </View>
        <View style={[styles.passInput, styles.inputLayout]}>
          <View style={[styles.rectngulo21, styles.rectnguloShadowBox]} />
          <Text style={[styles.text, styles.textPosition]}>●●●●●●●●●●</Text>
          <Image
            style={[styles.enmascararGrupo20, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-213.png")}
          />
          <Image
            style={[styles.enmascararGrupo25, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-25.png")}
          />
        </View>
        <Text style={[styles.olvidMiContrasea, styles.salirDeAquTypo]}>
          Olvidé mi contraseña
        </Text>
        <Pressable
          style={[styles.buttonFilledBlock, styles.buttonLayout]}
          onPress={() => navigation.navigate("TFA1")}
        >
          <View style={[styles.container, styles.containerPosition]} />
          <Text style={[styles.entrar, styles.entrarTypo]}>Entrar</Text>
        </Pressable>
        <Pressable
          style={[styles.buttonOutlinedTextBlock, styles.buttonLayout]}
          onPress={() => navigation.navigate("CrearCuenta1")}
        >
          <View style={[styles.rectngulo1511, styles.containerPosition]} />
          <Text style={[styles.nuevaCuenta, styles.entrarTypo]}>
            Nueva cuenta
          </Text>
        </Pressable>
        <Pressable style={styles.salirDeAquContainer} onPress={openSalirDeAqu}>
          <Text style={[styles.salirDeAqu, styles.entrarTypo]}>
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
  inputLayout: {
    height: 48,
    width: 304,
  },
  rectnguloShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
  },
  textPosition: {
    textAlign: "left",
    color: Color.darkslategray_100,
    fontSize: FontSize.size_sm,
    left: 54,
    top: "50%",
    position: "absolute",
  },
  enmascararPosition: {
    width: 36,
    maxHeight: "100%",
    bottom: 6,
    top: 6,
    position: "absolute",
  },
  salirDeAquTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: "rgba(38, 50, 56, 0.5)",
    fontFamily: FontFamily.sourceSansProSemiboldItalic,
    fontStyle: "italic",
    lineHeight: 19,
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
  entrarTypo: {
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
  rectngulo2: {
    elevation: 16,
    shadowRadius: 16,
    borderRadius: Border.br_9xl,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    backgroundColor: Color.white,
  },
  miNombre: {
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    marginTop: -9,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_sm,
    left: 54,
    top: "50%",
  },
  enmascararGrupo20: {
    left: 6,
  },
  input: {
    marginTop: 127,
  },
  rectngulo21: {
    elevation: 16,
    shadowRadius: 16,
    borderRadius: Border.br_9xl,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    backgroundColor: Color.white,
  },
  text: {
    marginTop: -7,
    letterSpacing: 1,
    fontFamily: FontFamily.poppins,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_sm,
    left: 54,
    top: "50%",
  },
  enmascararGrupo25: {
    left: 262,
  },
  passInput: {
    marginTop: 32,
  },
  olvidMiContrasea: {
    marginTop: 24,
    marginRight: 174,
    color: Color.white,
    fontWeight: "600",
    letterSpacing: 0,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: "rgba(38, 50, 56, 0.5)",
    fontFamily: FontFamily.sourceSansProSemiboldItalic,
    fontStyle: "italic",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  container: {
    backgroundColor: Color.darkorange,
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    borderRadius: Border.br_lg,
  },
  entrar: {
    marginLeft: -18.29,
    fontFamily: FontFamily.sourceSansProSemibold,
    left: "50%",
    textAlign: "center",
    top: "50%",
    marginTop: -9,
    position: "absolute",
  },
  buttonFilledBlock: {
    marginTop: 30,
    marginLeft: 158,
  },
  rectngulo1511: {
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
  },
  nuevaCuenta: {
    marginLeft: -42,
    fontFamily: FontFamily.sourceSansProSemibold,
    left: "50%",
    textAlign: "center",
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
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: "rgba(38, 50, 56, 0.5)",
    fontFamily: FontFamily.sourceSansProSemiboldItalic,
    fontStyle: "italic",
    lineHeight: 19,
    textAlign: "center",
  },
  salirDeAquContainer: {
    marginTop: 32,
    marginLeft: 1,
  },
  login9: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default Login9;
