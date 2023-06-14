import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

type DialogoBievenida1Type = {
  onClose?: () => void;
};

const DialogoBievenida1 = ({ onClose }: DialogoBievenida1Type) => {
  return (
    <View style={styles.dialogoBievenida1}>
      <View style={[styles.dialog, styles.carrdLayout]}>
        <Text style={styles.enhorabuena}>¡Enhorabuena!</Text>
        <Text style={[styles.hasCreadoTu, styles.hasCreadoTuSpaceBlock]}>
          Has creado tu cuenta con éxito.
        </Text>
        <Text
          style={[
            styles.recibeTusPrimerosContainer,
            styles.hasCreadoTuSpaceBlock,
          ]}
        >
          <Text style={styles.recibeTusPrimeros}>{`Recibe tus primeros `}</Text>
          <Text style={styles.puntos}>{`100 puntos `}</Text>
          <Text style={styles.recibeTusPrimeros}>completando tu Perfil.</Text>
        </Text>
        <View style={styles.grupo125}>
          <View style={styles.buttonOutlinedTextBlock}>
            <View style={[styles.rectngulo1511, styles.rectnguloPosition]} />
            <Text style={[styles.msTarde, styles.msTardeTypo]}>Más tarde</Text>
          </View>
          <View style={styles.buttonFilledText}>
            <View style={[styles.rectngulo1510, styles.carrdShadowBox]} />
            <Text style={[styles.irAlPerfil, styles.msTardeTypo]}>
              Ir al perfil
            </Text>
          </View>
        </View>
        <View style={[styles.carrd, styles.carrdShadowBox]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carrdLayout: {
    height: 192,
    width: 328,
  },
  hasCreadoTuSpaceBlock: {
    letterSpacing: 0,
    marginTop: 12,
    width: 297,
    textAlign: "center",
  },
  rectnguloPosition: {
    borderRadius: Border.br_lg,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  msTardeTypo: {
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
  },
  enhorabuena: {
    fontSize: 24,
    letterSpacing: 1,
    width: 297,
    textAlign: "center",
    lineHeight: 19,
    color: Color.dodgerblue,
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
  },
  hasCreadoTu: {
    marginTop: 12,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
    lineHeight: 19,
  },
  recibeTusPrimeros: {
    fontFamily: FontFamily.sourceSansProRegular,
    color: Color.slategray,
  },
  puntos: {
    color: Color.dodgerblue,
    fontFamily: FontFamily.sourceSansProBold,
    fontWeight: "700",
  },
  recibeTusPrimerosContainer: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    marginTop: 12,
  },
  rectngulo1511: {
    borderStyle: "solid",
    borderColor: "#263238",
    borderWidth: 1,
  },
  msTarde: {
    marginLeft: -29.5,
    color: Color.darkslategray_100,
  },
  buttonOutlinedTextBlock: {
    width: 93,
    height: 36,
  },
  rectngulo1510: {
    backgroundColor: Color.dodgerblue,
    shadowColor: "rgba(38, 50, 56, 0.3)",
    shadowRadius: 16,
    elevation: 16,
    borderRadius: Border.br_lg,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  irAlPerfil: {
    marginLeft: -28,
    color: Color.white,
  },
  buttonFilledText: {
    width: 94,
    marginLeft: 12,
    height: 36,
  },
  grupo125: {
    width: 199,
    flexDirection: "row",
    marginTop: 36,
    height: 36,
  },
  carrd: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    shadowColor: "rgba(96, 125, 139, 0.25)",
    shadowRadius: 8,
    elevation: 8,
    marginRight: -16,
    marginTop: 12,
    height: 192,
    width: 328,
  },
  dialog: {
    padding: Padding.p_base,
    alignItems: "flex-end",
  },
  dialogoBievenida1: {
    backgroundColor: Color.darkslategray_200,
    width: 360,
    paddingLeft: Padding.p_base,
    paddingTop: 224,
    paddingRight: Padding.p_base,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default DialogoBievenida1;
