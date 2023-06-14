import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Login7 = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.login7}
      onPress={() => navigation.navigate("Login8")}
    >
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
          source={require("../assets/enmascarar-grupo-204.png")}
        />
        <View style={styles.grupo149}>
          <View style={[styles.rectngulo1533, styles.rectnguloPosition]} />
          <Text style={styles.errorTypo}>Error</Text>
        </View>
      </View>
      <View style={[styles.passInput, styles.inputLayout]}>
        <View style={[styles.rectngulo21, styles.rectnguloShadowBox]} />
        <Text style={[styles.text, styles.textPosition]}>●●●●●●●●●●</Text>
        <Image
          style={[styles.enmascararGrupo20, styles.enmascararPosition]}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-216.png")}
        />
        <Image
          style={[styles.enmascararGrupo25, styles.enmascararPosition]}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-25.png")}
        />
        <View style={styles.grupo149}>
          <View style={[styles.rectngulo15331, styles.rectnguloPosition]} />
          <Text style={styles.errorTypo}>Error</Text>
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
      <View style={styles.toast}>
        <Text style={[styles.nombreDeUsuario, styles.entrarTypo]}>
          Nombre de usuario o contraseña no valido
        </Text>
      </View>
      <Text style={[styles.salirDeAqu, styles.entrarTypo]}>Salir de aquí</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    height: 56,
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
    color: Color.crimson,
    fontSize: FontSize.size_sm,
    left: 54,
    top: "50%",
    position: "absolute",
  },
  enmascararPosition: {
    width: 36,
    maxHeight: "100%",
    bottom: 14,
    top: 6,
    position: "absolute",
  },
  rectnguloPosition: {
    height: 16,
    width: 39,
    left: "50%",
    bottom: 1,
    marginLeft: -20,
    elevation: 8,
    shadowRadius: 8,
    backgroundColor: Color.crimson,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    position: "absolute",
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
    bottom: 0,
    left: 0,
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
    elevation: 16,
    shadowRadius: 16,
    borderRadius: Border.br_9xl,
    left: 0,
    bottom: 8,
    right: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    position: "absolute",
    backgroundColor: Color.white,
  },
  miNombre: {
    marginTop: -13,
    fontFamily: FontFamily.sourceSansProRegular,
    lineHeight: 19,
    color: Color.crimson,
    fontSize: FontSize.size_sm,
    left: 54,
    top: "50%",
  },
  enmascararGrupo20: {
    left: 6,
  },
  rectngulo1533: {
    shadowColor: "rgba(38, 50, 56, 0.3)",
  },
  errorTypo: {
    textShadowRadius: 16,
    textShadowOffset: {
      width: 0,
      height: 8,
    },
    textShadowColor: "rgba(38, 50, 56, 0.3)",
    textAlign: "right",
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
    marginLeft: -11,
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
    width: 38,
    height: 17,
    position: "absolute",
  },
  input: {
    marginTop: 127,
  },
  rectngulo21: {
    elevation: 16,
    shadowRadius: 16,
    borderRadius: Border.br_9xl,
    left: 0,
    bottom: 8,
    right: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    position: "absolute",
    backgroundColor: Color.white,
  },
  text: {
    marginTop: -11,
    letterSpacing: 1,
    fontFamily: FontFamily.poppins,
    color: Color.crimson,
    fontSize: FontSize.size_sm,
    left: 54,
    top: "50%",
  },
  enmascararGrupo25: {
    left: 262,
  },
  rectngulo15331: {
    shadowColor: "rgba(38, 50, 56, 0.5)",
    height: 16,
    width: 39,
    left: "50%",
    bottom: 1,
    marginLeft: -20,
  },
  passInput: {
    marginTop: 24,
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
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    borderRadius: Border.br_lg,
    bottom: 0,
  },
  entrar: {
    marginLeft: -18.29,
    marginTop: -9,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    left: "50%",
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
    marginTop: -9,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    left: "50%",
  },
  buttonOutlinedTextBlock: {
    marginTop: -36,
    marginRight: 158,
  },
  nombreDeUsuario: {
    left: 34,
    lineHeight: 21,
    marginTop: -9,
    textAlign: "center",
    top: "50%",
    position: "absolute",
    fontFamily: FontFamily.sourceSansProRegular,
  },
  toast: {
    shadowColor: "rgba(38, 50, 56, 0.25)",
    width: 328,
    height: 48,
    marginTop: 2,
    elevation: 8,
    shadowRadius: 8,
    backgroundColor: Color.crimson,
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  salirDeAqu: {
    marginTop: -18,
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
    marginLeft: 1,
  },
  login7: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default Login7;
