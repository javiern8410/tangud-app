import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const RecuperarCuenta7 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.recuperarCuenta7}>
      <Image
        style={styles.backgroundIcon}
        contentFit="cover"
        source={require("../assets/background.png")}
      />
      <Image
        style={styles.tangudColorIcon}
        contentFit="cover"
        source={require("../assets/tangud-color19.png")}
      />
      <Text
        style={[
          styles.holaMiNombreInsertaContainer,
          styles.nuevaContraseaFlexBox,
        ]}
      >
        <Text style={styles.hola}>{`Hola `}</Text>
        <Text style={styles.miNombre}>Mi_nombre</Text>
        <Text style={styles.hola}>
          . Inserta la nueva contraseña de tu cuenta.
        </Text>
      </Text>
      <Pressable
        style={[styles.passInput, styles.passLayout]}
        onPress={() => navigation.navigate("RecuperarCuenta8")}
      >
        <View style={[styles.rectngulo2, styles.rectnguloPosition]} />
        <Text style={[styles.nuevaContrasea, styles.listoPosition]}>
          Nueva contraseña
        </Text>
        <Image
          style={styles.enmascararGrupo21}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-213.png")}
        />
      </Pressable>
      <View style={[styles.passInput1, styles.passLayout]}>
        <View style={[styles.rectngulo21, styles.rectnguloPosition]} />
        <Text style={[styles.nuevaContrasea, styles.listoPosition]}>
          Confirma la Nueva contraseña
        </Text>
        <Image
          style={styles.enmascararGrupo21}
          contentFit="cover"
          source={require("../assets/enmascarar-grupo-213.png")}
        />
      </View>
      <View style={styles.buttonFilledBlock}>
        <View style={[styles.container, styles.rectnguloPosition]} />
        <Text style={[styles.listo, styles.listoPosition]}>Listo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nuevaContraseaFlexBox: {
    textAlign: "left",
    color: Color.slategray,
    lineHeight: 19,
  },
  passLayout: {
    height: 48,
    width: 304,
  },
  rectnguloPosition: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  listoPosition: {
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
    fontSize: FontSize.size_sm,
    color: Color.slategray,
    lineHeight: 19,
  },
  rectngulo2: {
    elevation: 16,
    shadowRadius: 16,
    borderRadius: Border.br_9xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  nuevaContrasea: {
    left: 54,
    fontFamily: FontFamily.sourceSansProRegular,
    textAlign: "left",
    color: Color.slategray,
    lineHeight: 19,
  },
  enmascararGrupo21: {
    top: 6,
    bottom: 6,
    left: 6,
    maxHeight: "100%",
    width: 36,
    position: "absolute",
  },
  passInput: {
    marginTop: 30,
  },
  rectngulo21: {
    elevation: 16,
    shadowRadius: 16,
    borderRadius: Border.br_9xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    backgroundColor: Color.white,
  },
  passInput1: {
    marginTop: 33,
  },
  container: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.darkgray,
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.5)",
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
  },
  listo: {
    marginLeft: -14.29,
    left: "50%",
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.sourceSansProSemibold,
    color: Color.white,
    textAlign: "center",
  },
  buttonFilledBlock: {
    width: 146,
    height: 36,
    marginTop: 48,
    marginLeft: 158,
  },
  recuperarCuenta7: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: Color.white,
  },
});

export default RecuperarCuenta7;
