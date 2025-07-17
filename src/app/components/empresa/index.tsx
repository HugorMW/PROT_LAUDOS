import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styleEmpresas } from "@/app/components/empresa/style";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  id: string;
  nome: string;
  cnpj: string;
  email: string;
};

export default function Empresas({ id, nome, cnpj, email }: Props) {
  return (
    <View key={id} style={styleEmpresas.card}>
      <View style={styleEmpresas.infoContainer}>
        <Text style={styleEmpresas.nome}>{nome}</Text>
        <Text style={styleEmpresas.info}>CNPJ: {cnpj}</Text>
        <Text style={styleEmpresas.info} numberOfLines={1}>
          Email: {email}
        </Text>
      </View>
      <View style={styleEmpresas.buttonContainer}>
        <TouchableOpacity style={styleEmpresas.buttonEditar}>
          <MaterialIcons name="edit" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styleEmpresas.buttonExcluir}>
          <MaterialIcons name="close" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
