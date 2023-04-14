import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from "react-native";

const StageInfoOverlayBloodSugarRises = ({
  visible,
  onClose,
  title,
  description,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalText}>{description}</Text>
          <Image
            style={styles.modalImage}
            source={require("../../assets/images/fastingStages/bloodSugarRises.png")}
          />
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 20,
    margin: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
  },
    modalImage: {
    width: 120,
    resizeMode: "contain",
    },
  closeButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default StageInfoOverlayBloodSugarRises;
