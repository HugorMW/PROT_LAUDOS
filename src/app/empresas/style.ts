import { StyleSheet } from "react-native";

export const styleEmpresas = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#219ebc",
    textAlign: "center",
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#023047",
    marginBottom: 4,
  },
  info: {
    fontSize: 16,
    color: "#555",
    flexShrink: 1, // evita overflow
    flexWrap: "wrap", // quebra linha se necessário
  },
  infoContainer: {
    flex: 1, // ocupa o espaço restante
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 8, // substituto do gap
  },
  buttonEditar: {
    backgroundColor: "#219ebc",
    padding: 10,
    borderRadius: 100,
  },
  buttonExcluir: {
    backgroundColor: "#e63946",
    padding: 10,
    borderRadius: 100,
  },
  buttonText: {
    color: "#fff",
  },
  naoEncontrado: {
    textAlign: "center",
    color: "#999",
    marginTop: 40,
    fontStyle: "italic",
  },
});
