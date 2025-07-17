import React from "react";
import { TextInput } from "react-native";

type Search = {
  setSearch: (text: string) => void;
  search: string;
};

export default function Search({ setSearch, search }: Search) {
  return (
    <TextInput
      placeholder="Pesquisar..."
      value={search}
      onChangeText={setSearch}
      style={{
        backgroundColor: "#fff",
        margin: 8,
        padding: 8,
        borderRadius: 8,
      }}
    />
  );
}
