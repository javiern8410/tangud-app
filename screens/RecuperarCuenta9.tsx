import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const RecuperarCuenta9 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recuperarCuenta9}>
      <Image
        style={styles.backgroundIcon}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <Image
        style={styles.tangudColorIcon}
        contentFit="cover"
        source={require("../assets/tangud-color18.png")}
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
        <Text style={[styles.text, styles.textPosition]}>●●●●●●●●●●</Text>
        <Image
          style={[styles.enmascararGrupo21, styles.enmascararLayout]}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-213.png")}
        />
        <Image
          style={[styles.enmascararGrupo25, styles.enmascararLayout]}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-25.png")}
        />
        <View style={styles.grupo146}>
          <View style={styles.rectngulo1533} />
          <Text style={[styles.superfuerte, styles.listoTypo]}>
            Superfuerte
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.passInput1}
        onPress={() => navigation.navigate("RecuperarCuenta10")}
      >
        <View style={[styles.rectngulo21, styles.containerPosition]} />
        <Text style={[styles.confirmaLaNueva, styles.listoPosition]}>
          Confirma la Nueva contraseña
        </Text>
        <Image
          style={[styles.enmascararGrupo211, styles.enmascararLayout]}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-213.png")}
        />
      </Pressable>
      <View style={styles.buttonFilledBlock}>
        <View style={[styles.container, styles.containerPosition]} />
        <Text style={[styles.listo, styles.listoPosition]}>Listo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: 54,
    textAlign: "left",
  },
  enmascararLayout: {
    width: 36,
    maxHeight: "100%",
    top: 6,
    position: "absolute",
  },
  listoTypo: {
    color: Color.white,
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    left: "50%",
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
  listoPosition: {
    marginTop: -9,
    top: "50%",
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
    width: 305,
    marginTop: 58,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    color: Color.slategray,
    lineHeight: 19,
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
    letterSpacing: 1,
    fontFamily: FontFamily.poppins,
    color: Color.darkslategray_100,
    top: "50%",
    left: 54,
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  enmascararGrupo21: {
    left: 6,
    width: 36,
    maxHeight: "100%",
    top: 6,
    bottom: 14,
  },
  enmascararGrupo25: {
    left: 262,
    bottom: 14,
    width: 36,
    maxHeight: "100%",
    top: 6,
  },
  rectngulo1533: {
    marginLeft: -35.5,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.mediumspringgreen,
    shadowRadius: 8,
    elevation: 8,
    width: 69,
    height: 16,
    left: "50%",
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
    position: "absolute",
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
  confirmaLaNueva: {
    left: 54,
    textAlign: "left",
    fontFamily: FontFamily.sourceSansProRegular,
    color: Color.slategray,
    lineHeight: 19,
    marginTop: -9,
  },
  enmascararGrupo211: {
    bottom: 6,
    left: 6,
    width: 36,
    maxHeight: "100%",
    top: 6,
  },
  passInput1: {
    height: 48,
    marginTop: 25,
    width: 304,
  },
  container: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.darkgray,
    shadowRadius: 2,
    elevation: 2,
  },
  listo: {
    marginLeft: -14.29,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    letterSpacing: 0,
    left: "50%",
  },
  buttonFilledBlock: {
    width: 146,
    height: 36,
    marginTop: 48,
    marginLeft: 158,
  },
  recuperarCuenta9: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default RecuperarCuenta9;
