import React from "react";
import { TextInput, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { styleEmpresas } from "./style";
import { dataEmpresas } from "../utils/empresas/data";

import EmpresasList from "@/app/components/empresas";
import Search from "../components/search";
import { StrictMode } from "react";

export default function Empresas() {
  const [search, setSearch] = useState("");
  const empresasFiltradas = dataEmpresas.filter((e) =>
    (e.nome + e.cnpj + e.email).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <StrictMode>
      <SafeAreaView style={styleEmpresas.container}>
        <View style={{ flex: 1 }}>
          <Search setSearch={setSearch} search={search} />

          {empresasFiltradas.length === 0 ? (
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              Nenhuma empresa encontrada.
            </Text>
          ) : (
            <EmpresasList dados={empresasFiltradas} />
          )}
        </View>
      </SafeAreaView>
    </StrictMode>
  );
}
