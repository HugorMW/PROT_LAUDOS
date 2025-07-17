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
    color: "blue",
    textAlign: "center",
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    maxHeight: 120,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start", // Opcional, para alinhar verticalmente
    padding: 16,
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

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch", // Faz ocupar toda altura do card
  },
  buttonEditar: {
    flex: 1,
    alignSelf: "stretch", // Faz ocupar toda altura do card
    justifyContent: "center",
    backgroundColor: "#219ebc",
    paddingHorizontal: 26,
    borderTopLeftRadius: 8, // canto superior direito
    borderBottomLeftRadius: 8,
  },
  buttonExcluir: {
    flex: 1,
    alignSelf: "stretch", // Faz ocupar toda altura do card
    justifyContent: "center",
    backgroundColor: "#e63946",
    paddingHorizontal: 26,
    borderTopRightRadius: 8, // canto superior direito
    borderBottomRightRadius: 8,
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
