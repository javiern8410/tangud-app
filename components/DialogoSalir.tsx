import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

type DialogoSalirType = {
  onClose?: () => void;
};

const DialogoSalir = ({ onClose }: DialogoSalirType) => {
  const navigation = useNavigation();

  return (
    <View style={styles.dialogoSalir}>
      <View style={[styles.dialog, styles.carrdLayout]}>
        <Text style={styles.quieresSalirDe}>
          ¿Quieres salir de la aplicación?
        </Text>
        <View style={styles.grupo125}>
          <Pressable
            style={styles.buttonOutlinedTextBlock}
            onPress={() => navigation.navigate("Login1")}
          >
            <View style={[styles.rectngulo1511, styles.rectnguloPosition]} />
            <Text style={[styles.sSalir, styles.sSalirTypo]}>Sí, salir</Text>
          </Pressable>
          <View style={styles.buttonFilledText}>
            <View style={[styles.rectngulo1510, styles.carrdShadowBox]} />
            <Text style={[styles.noVolver, styles.sSalirTypo]}>No, volver</Text>
          </View>
        </View>
        <View style={[styles.carrd, styles.carrdShadowBox]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carrdLayout: {
    height: 110,
    width: 328,
  },
  rectnguloPosition: {
    borderRadius: Border.br_lg,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  sSalirTypo: {
    textAlign: "right",
    fontFamily: FontFamily.sourceSansProSemibold,
    fontWeight: "600",
    left: "50%",
    top: "50%",
    marginTop: -9,
    position: "absolute",
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  carrdShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(38, 50, 56, 0.3)",
  },
  quieresSalirDe: {
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: FontFamily.sourceSansProBold,
    textAlign: "center",
    width: 297,
    color: Color.darkslategray_100,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  rectngulo1511: {
    borderStyle: "solid",
    borderColor: "#263238",
    borderWidth: 1,
  },
  sSalir: {
    marginLeft: -21.5,
    color: Color.darkslategray_100,
  },
  buttonOutlinedTextBlock: {
    width: 79,
    height: 36,
  },
  rectngulo1510: {
    backgroundColor: Color.dodgerblue,
    shadowRadius: 16,
    elevation: 16,
    borderRadius: Border.br_lg,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  noVolver: {
    marginLeft: -30,
    color: Color.white,
  },
  buttonFilledText: {
    width: 96,
    marginLeft: 12,
    height: 36,
  },
  grupo125: {
    width: 187,
    flexDirection: "row",
    marginTop: 24,
    height: 36,
  },
  carrd: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    shadowRadius: 24,
    elevation: 24,
    marginRight: -16,
    marginTop: 24,
    height: 110,
    width: 328,
  },
  dialog: {
    padding: Padding.p_base,
    alignItems: "flex-end",
  },
  dialogoSalir: {
    backgroundColor: Color.darkslategray_200,
    width: 360,
    paddingLeft: Padding.p_base,
    paddingTop: 265,
    paddingRight: Padding.p_base,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default DialogoSalir;
