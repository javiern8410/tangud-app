import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DialogoSalir from "../components/DialogoSalir";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const Login8 = () => {
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
      <View style={styles.login8}>
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
        <View style={styles.input}>
          <View style={[styles.rectngulo2, styles.rectnguloShadowBox]} />
          <Text style={[styles.miNombre, styles.textPosition]}>mi_nombre</Text>
          <Image
            style={styles.enmascararGrupo20}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-202.png")}
          />
          <View style={[styles.lnea3, styles.lnea3Position]} />
        </View>
        <View style={styles.passInput}>
          <View style={[styles.rectngulo21, styles.rectnguloShadowBox]} />
          <Text style={[styles.text, styles.textPosition]}>●●●●●●●●●●</Text>
          <Image
            style={[styles.enmascararGrupo21, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-216.png")}
          />
          <Image
            style={[styles.enmascararGrupo25, styles.enmascararPosition]}
            contentFit="cover"
            source={require("../assets/enmascarar-grupo-25.png")}
          />
          <View style={styles.grupo146}>
            <View style={[styles.rectngulo1533, styles.toastShadowBox]} />
            <Text style={styles.error}>Error</Text>
          </View>
        </View>
        <Pressable
          style={styles.olvidMiContraseaContainer}
          onPress={() => navigation.navigate("RecuperarCuenta1")}
        >
          <Text style={[styles.olvidMiContrasea, styles.salirDeAquTypo]}>
            Olvidé mi contraseña
          </Text>
        </Pressable>
        <View style={[styles.buttonFilledBlock, styles.buttonLayout]}>
          <View style={[styles.container, styles.containerPosition]} />
          <Text style={[styles.entrar, styles.entrarTypo]}>Entrar</Text>
        </View>
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
  rectnguloShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
  },
  textPosition: {
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 54,
    top: "50%",
    position: "absolute",
  },
  lnea3Position: {
    top: "50%",
    position: "absolute",
  },
  enmascararPosition: {
    bottom: 14,
    width: 36,
    maxHeight: "100%",
    top: 6,
    position: "absolute",
  },
  toastShadowBox: {
    elevation: 8,
    shadowRadius: 8,
    backgroundColor: Color.crimson,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 16,
    },
  },
  salirDeAquTypo: {
    textShadowRadius: 4,
    textShadowColor: "rgba(38, 50, 56, 0.5)",
    fontFamily: FontFamily.sourceSansProSemiboldItalic,
    fontStyle: "italic",
    textShadowOffset: {
      width: 0,
      height: 8,
    },
    fontWeight: "600",
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
    shadowRadius: 24,
    elevation: 24,
    borderRadius: Border.br_9xl,
    left: 0,
    right: 0,
    top: 0,
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    position: "absolute",
    backgroundColor: Color.white,
    bottom: 0,
  },
  miNombre: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.sourceSansProRegular,
    marginTop: -9,
    lineHeight: 19,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 54,
  },
  enmascararGrupo20: {
    bottom: 6,
    width: 36,
    maxHeight: "100%",
    top: 6,
    left: 6,
    position: "absolute",
  },
  lnea3: {
    marginTop: -9.5,
    left: 122,
    borderColor: "#263238",
    borderRightWidth: 1,
    width: 2,
    height: 19,
    borderStyle: "solid",
  },
  input: {
    marginTop: 127,
    height: 48,
    width: 304,
  },
  rectngulo21: {
    bottom: 8,
    shadowRadius: 16,
    elevation: 16,
    borderRadius: Border.br_9xl,
    left: 0,
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
  text: {
    marginTop: -11,
    letterSpacing: 1,
    fontFamily: FontFamily.poppins,
    color: Color.crimson,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 54,
  },
  enmascararGrupo21: {
    left: 6,
    bottom: 14,
  },
  enmascararGrupo25: {
    left: 262,
  },
  rectngulo1533: {
    marginLeft: -20,
    width: 39,
    height: 16,
    left: "50%",
    bottom: 1,
    shadowRadius: 8,
    backgroundColor: Color.crimson,
    borderRadius: Border.br_5xs,
    shadowColor: "rgba(38, 50, 56, 0.5)",
    position: "absolute",
  },
  error: {
    marginLeft: -11,
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    textAlign: "right",
    textShadowColor: "rgba(38, 50, 56, 0.3)",
    textShadowRadius: 16,
    textShadowOffset: {
      width: 0,
      height: 8,
    },
    color: Color.white,
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    left: "50%",
    bottom: 1,
    position: "absolute",
  },
  grupo146: {
    right: 42,
    bottom: -1,
    width: 38,
    height: 17,
    position: "absolute",
  },
  passInput: {
    height: 56,
    marginTop: 32,
    width: 304,
  },
  olvidMiContrasea: {
    color: Color.white,
    letterSpacing: 0,
    textShadowColor: "rgba(38, 50, 56, 0.5)",
    fontFamily: FontFamily.sourceSansProSemiboldItalic,
    fontStyle: "italic",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  olvidMiContraseaContainer: {
    marginTop: 16,
    marginRight: 174,
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
  entrar: {
    marginLeft: -18.29,
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    textAlign: "center",
    left: "50%",
    top: "50%",
    marginTop: -9,
    position: "absolute",
  },
  buttonFilledBlock: {
    marginTop: 30,
    marginLeft: 158,
  },
  rectngulo1511: {
    borderColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
  },
  nuevaCuenta: {
    marginLeft: -42,
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    textAlign: "center",
    left: "50%",
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
    textShadowColor: "rgba(38, 50, 56, 0.5)",
    fontFamily: FontFamily.sourceSansProSemiboldItalic,
    fontStyle: "italic",
    textShadowOffset: {
      width: 0,
      height: 8,
    },
    fontWeight: "600",
    lineHeight: 19,
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
    top: "50%",
    position: "absolute",
    textAlign: "center",
  },
  toast: {
    shadowColor: "rgba(38, 50, 56, 0.25)",
    width: 328,
    opacity: 0,
    marginTop: 21,
    height: 48,
  },
  login8: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default Login8;
