import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

type DialogoCancelarCuentaNuevaType = {
  onClose?: () => void;
};

const DialogoCancelarCuentaNueva = ({
  onClose,
}: DialogoCancelarCuentaNuevaType) => {
  const navigation = useNavigation();

  return (
    <View style={styles.dialogoCancelarCuentaNueva}>
      <View style={[styles.dialog, styles.carrdLayout]}>
        <Text style={[styles.deseasCancelarLa, styles.deseasCancelarLaLayout]}>
          ¿Deseas cancelar la creación de tu cuenta?
        </Text>
        <Text
          style={[styles.noGuardaremosNingn, styles.deseasCancelarLaLayout]}
        >
          No guardaremos ningún dato insertados hasta ahora.
        </Text>
        <View style={styles.grupo125}>
          <Pressable
            style={styles.buttonOutlinedTextBlock}
            onPress={() => navigation.navigate("Login1")}
          >
            <View style={[styles.rectngulo1511, styles.rectnguloPosition]} />
            <Text style={[styles.sCancelar, styles.noVolverTypo]}>
              Sí, cancelar
            </Text>
          </Pressable>
          <View style={styles.buttonFilledText}>
            <View style={[styles.rectngulo1510, styles.carrdShadowBox]} />
            <Text style={[styles.noVolver, styles.noVolverTypo]}>
              No, volver
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
    height: 149,
    width: 328,
  },
  deseasCancelarLaLayout: {
    width: 297,
    textAlign: "center",
    letterSpacing: 0,
  },
  rectnguloPosition: {
    borderRadius: Border.br_lg,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  noVolverTypo: {
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
  deseasCancelarLa: {
    lineHeight: 19,
    fontWeight: "700",
    fontFamily: FontFamily.sourceSansProBold,
    color: Color.darkslategray_100,
    fontSize: FontSize.size_sm,
    width: 297,
    textAlign: "center",
    letterSpacing: 0,
  },
  noGuardaremosNingn: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    fontFamily: FontFamily.sourceSansProRegular,
    color: Color.slategray,
    marginTop: 12,
  },
  rectngulo1511: {
    borderStyle: "solid",
    borderColor: "#263238",
    borderWidth: 1,
  },
  sCancelar: {
    marginLeft: -34.5,
    color: Color.darkslategray_100,
  },
  buttonOutlinedTextBlock: {
    width: 105,
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
    width: 213,
    flexDirection: "row",
    marginTop: 36,
    height: 36,
  },
  carrd: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.white,
    shadowRadius: 24,
    elevation: 24,
    marginRight: -16,
    marginTop: 12,
    height: 149,
    width: 328,
  },
  dialog: {
    padding: Padding.p_base,
    alignItems: "flex-end",
  },
  dialogoCancelarCuentaNueva: {
    backgroundColor: Color.darkslategray_200,
    width: 360,
    paddingLeft: Padding.p_base,
    paddingTop: 246,
    paddingRight: Padding.p_base,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default DialogoCancelarCuentaNueva;
