import Empresas from "@/app/components/empresa";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { empresasStorage, EmpresasStorage } from "@/app/storage";
import { styleEmpresas } from "../empresa/style";

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
  const [empresas, setEmpresas] = useState<EmpresasStorage[]>([]);

  async function getEmpresas() {
    try {
      const empresas = await empresasStorage.get();
      setEmpresas(empresas);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    console.log("Pagina recarregada!!!");
  }, [empresas]);

  return (
    <View style={{ flex: 1 }}>
      {dados.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Nenhuma empresa encontrada.
        </Text>
      ) : (
        <FlatList
          data={empresas}
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
