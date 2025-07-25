import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

type CadEmpresaModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave?: (empresa: { id: string; name: string; cnpj: string; email: string }) => void;
};

export default function CadEmpresaModal({visible,onClose,onSave,}: CadEmpresaModalProps) {
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");

  const handleSalvar = () => {
  if (onSave) {
    const novaEmpresa = {
      id: Date.now().toString(), // Gera ID único baseado no timestamp
      name,
      cnpj,
      email,
    };

    onSave(novaEmpresa); // Envia empresa com id
  }
    onClose();
}

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.headerModal}>
            <Text style={styles.titulo}>Cadastrar Empresa</Text>
            <TouchableOpacity onPress={onClose}>
              <MaterialIcons
                name="close"
                size={24}
                color="#333"
              ></MaterialIcons>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="CNPJ"
            value={cnpj}
            onChangeText={setCnpj}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <View style={styles.botoes}>
            <TouchableOpacity style={styles.botao} onPress={handleSalvar}>
              <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.botao, { backgroundColor: "#ccc" }]}
              onPress={onClose}
            >
              <Text style={styles.textoBotao}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
