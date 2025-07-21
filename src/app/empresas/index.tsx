import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { dataEmpresas } from "../utils/empresas/data";
import { styleEmpresas } from "./style";

import EmpresasList from "@/app/components/empresas";
import { StrictMode } from "react";
import Search from "../components/search";

export default function Empresas() {
  const [search, setSearch] = useState("");
  const empresasFiltradas = dataEmpresas.filter((e) =>
    (e.name + e.cnpj + e.email).toLowerCase().includes(search.toLowerCase())
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
