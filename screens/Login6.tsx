import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DialogoSalir from "../components/DialogoSalir";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Login6 = () => {
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
      <View style={styles.login6}>
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
          <View style={styles.rectnguloShadowBox} />
          <Text style={[styles.miNombre, styles.textPosition]}>mi_nombre</Text>
          <Image
            style={[styles.enmascararGrupo20, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-202.png")}
          />
        </View>
        <View style={[styles.passInput, styles.inputLayout]}>
          <View style={styles.rectnguloShadowBox} />
          <Text style={[styles.text, styles.textPosition]}>●●●●●●●●●●</Text>
          <Image
            style={[styles.enmascararGrupo20, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-214.png")}
          />
          <Image
            style={[styles.enmascararGrupo25, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-25.png")}
          />
        </View>
        <Pressable
          style={styles.olvidMiContraseaContainer}
          onPress={() => navigation.navigate("RecuperarCuenta1")}
        >
          <Text style={[styles.olvidMiContrasea, styles.salirDeAquTypo]}>
            Olvidé mi contraseña
          </Text>
        </Pressable>
        <Pressable
          style={[styles.buttonFilledBlock, styles.buttonLayout]}
          onPress={() => navigation.navigate("Login7")}
        >
          <View style={[styles.container, styles.toastShadowBox]} />
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
        <View style={[styles.toast, styles.toastShadowBox]}>
          <Text style={[styles.nombreDeUsuario, styles.entrarTypo]}>
            Nombre de usuario o contraseña no valido
          </Text>
        </View>
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
    width: 304,
    height: 48,
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
    fontWeight: "600",
    fontStyle: "italic",
    lineHeight: 19,
  },
  buttonLayout: {
    height: 36,
    width: 146,
  },
  toastShadowBox: {
    elevation: 8,
    shadowRadius: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  entrarTypo: {
    textAlign: "center",
    color: Color.white,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  containerPosition: {
    borderRadius: Border.br_lg,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
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
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    shadowColor: "rgba(38, 50, 56, 0.5)",
    backgroundColor: Color.white,
  },
  miNombre: {
    fontFamily: FontFamily.sourceSansProRegular,
    marginTop: -9,
    lineHeight: 19,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_sm,
    left: 54,
  },
  enmascararGrupo20: {
    left: 6,
  },
  input: {
    marginTop: 127,
    height: 48,
  },
  text: {
    marginTop: -7,
    letterSpacing: 1,
    fontFamily: FontFamily.poppins,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_sm,
    left: 54,
  },
  enmascararGrupo25: {
    left: 262,
  },
  passInput: {
    marginTop: 32,
    height: 48,
  },
  olvidMiContrasea: {
    color: Color.white,
    letterSpacing: 0,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowColor: "rgba(38, 50, 56, 0.5)",
    fontFamily: FontFamily.sourceSansProSemiboldItalic,
    fontWeight: "600",
    fontStyle: "italic",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  olvidMiContraseaContainer: {
    marginTop: 24,
    marginRight: 174,
  },
  container: {
    backgroundColor: Color.darkorange,
    borderRadius: Border.br_lg,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
    shadowColor: "rgba(38, 50, 56, 0.5)",
    shadowRadius: 8,
  },
  entrar: {
    marginLeft: -18.29,
    fontFamily: FontFamily.sourceSansProSemibold,
    left: "50%",
    textAlign: "center",
    fontWeight: "600",
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
    fontWeight: "600",
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
    fontWeight: "600",
    fontStyle: "italic",
    lineHeight: 19,
    textAlign: "center",
  },
  salirDeAquContainer: {
    marginTop: 32,
    marginLeft: 1,
  },
  nombreDeUsuario: {
    left: 34,
    lineHeight: 21,
    fontFamily: FontFamily.sourceSansProRegular,
    marginTop: -9,
    textAlign: "center",
    top: "50%",
    position: "absolute",
  },
  toast: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.crimson,
    shadowColor: "rgba(38, 50, 56, 0.25)",
    width: 328,
    opacity: 0,
    marginTop: 21,
    height: 48,
  },
  login6: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default Login6;
