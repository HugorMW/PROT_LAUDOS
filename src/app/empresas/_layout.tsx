import React, { useState } from "react";
import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CadEmpresaModal from "@/app/components/modals/cadEmpresa";

export default function LayoutEmpresas() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            title: "Empresas",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#f8f9fa",
            },
            headerTintColor: "#212529",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={{
                  width: 40,
                  height: 40,
                  padding: 8,
                  borderRadius: 24,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <AntDesign name="pluscircle" size={25} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
      <CadEmpresaModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}
