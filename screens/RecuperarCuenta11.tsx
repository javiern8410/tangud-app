import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RecuperarCuenta11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recuperarCuenta11}>
      <Image
        style={styles.backgroundIcon}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <Image
        style={styles.tangudColorIcon}
        contentFit="cover"
        source={require("../assets/tangud-color16.png")}
      />
      <Text style={styles.holaMiNombreInsertaContainer}>
        <Text style={styles.hola}>{`Hola `}</Text>
        <Text style={styles.miNombre}>Mi_nombre</Text>
        <Text style={styles.hola}>
          . Inserta la nueva contraseña de tu cuenta.
        </Text>
      </Text>
      <View style={styles.passInput}>
        <View style={styles.rectngulo2} />
        <Text style={[styles.text, styles.textTypo]}>●●●●●●●●●●</Text>
        <Image
          style={[styles.enmascararGrupo21, styles.enmascararPosition1]}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-215.png")}
        />
        <Image
          style={[styles.enmascararGrupo25, styles.enmascararPosition1]}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-25.png")}
        />
        <View style={styles.grupo146}>
          <View style={[styles.rectngulo1533, styles.containerShadowBox]} />
          <Text style={[styles.superfuerte, styles.listoTypo]}>
            Superfuerte
          </Text>
        </View>
      </View>
      <View style={styles.passInput1}>
        <View style={[styles.rectngulo21, styles.containerPosition]} />
        <Text style={[styles.text1, styles.textTypo]}>●●●●●●●●●●</Text>
        <Image
          style={[styles.enmascararGrupo211, styles.enmascararPosition]}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-215.png")}
        />
        <Image
          style={[styles.enmascararGrupo251, styles.enmascararPosition]}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-25.png")}
        />
      </View>
      <Pressable
        style={styles.buttonFilledBlock}
        onPress={() => navigation.navigate("Login14")}
      >
        <View style={[styles.container, styles.containerPosition]} />
        <Text style={[styles.listo, styles.listoTypo]}>Listo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.poppins,
    letterSpacing: 1,
    left: 54,
    top: "50%",
    position: "absolute",
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  enmascararPosition1: {
    width: 36,
    maxHeight: "100%",
    bottom: 14,
    top: 6,
    position: "absolute",
  },
  containerShadowBox: {
    elevation: 8,
    shadowRadius: 8,
  },
  listoTypo: {
    color: Color.white,
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    left: "50%",
    position: "absolute",
  },
  containerPosition: {
    bottom: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  enmascararPosition: {
    bottom: 6,
    width: 36,
    maxHeight: "100%",
    top: 6,
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
  hola: {
    fontFamily: FontFamily.sourceSansProRegular,
  },
  miNombre: {
    fontStyle: "italic",
    fontFamily: FontFamily.sourceSansProRegularItalic,
  },
  holaMiNombreInsertaContainer: {
    lineHeight: 19,
    color: Color.slategray,
    width: 305,
    marginTop: 58,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  rectngulo2: {
    bottom: 8,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    left: 0,
    right: 0,
    top: 0,
    elevation: 16,
    shadowRadius: 16,
    borderRadius: Border.br_9xl,
    position: "absolute",
    backgroundColor: Color.white,
  },
  text: {
    marginTop: -11,
  },
  enmascararGrupo21: {
    left: 6,
  },
  enmascararGrupo25: {
    left: 262,
  },
  rectngulo1533: {
    marginLeft: -35.5,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.mediumspringgreen,
    width: 69,
    height: 16,
    left: "50%",
    shadowRadius: 8,
    bottom: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    position: "absolute",
  },
  superfuerte: {
    marginLeft: -25.5,
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    textAlign: "right",
    textShadowColor: "rgba(38, 50, 56, 0.3)",
    textShadowOffset: {
      width: 0,
      height: 8,
    },
    textShadowRadius: 16,
    bottom: 1,
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    letterSpacing: 0,
  },
  grupo146: {
    right: 42,
    bottom: -1,
    width: 67,
    height: 17,
    position: "absolute",
  },
  passInput: {
    height: 56,
    marginTop: 30,
    width: 304,
  },
  rectngulo21: {
    elevation: 16,
    shadowRadius: 16,
    borderRadius: Border.br_9xl,
    bottom: 0,
    backgroundColor: Color.white,
  },
  text1: {
    marginTop: -7,
  },
  enmascararGrupo211: {
    left: 6,
  },
  enmascararGrupo251: {
    left: 262,
  },
  passInput1: {
    height: 48,
    marginTop: 25,
    width: 304,
  },
  container: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.darkorange,
    elevation: 8,
    shadowRadius: 8,
  },
  listo: {
    marginTop: -9,
    marginLeft: -14.29,
    textAlign: "center",
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    top: "50%",
    fontSize: FontSize.size_sm,
  },
  buttonFilledBlock: {
    width: 146,
    height: 36,
    marginTop: 48,
    marginLeft: 158,
  },
  recuperarCuenta11: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default RecuperarCuenta11;
