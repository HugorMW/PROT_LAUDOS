import Empresas from "@/app/components/empresa";
import React from "react";
import { FlatList, Text, View } from "react-native";

type Empresa = {
  id: string;
  name: string;
  cnpj: string;
  email: string;
};

type EmpresasListProps = {
  dados: Empresa[];
};

export default function EmpresasList({ dados }: EmpresasListProps) {
  return (
    <View style={{ flex: 1 }}>
      {dados.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Nenhuma empresa encontrada.
        </Text>
      ) : (
        <FlatList
          data={dados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Empresas
              id={item.id}
              nome={item.name}
              cnpj={item.cnpj}
              email={item.email}
            />
          )}
          showsVerticalScrollIndicator={false} //Ocultar barra de rolagem vertical
        />
      )}
    </View>
  );
}
