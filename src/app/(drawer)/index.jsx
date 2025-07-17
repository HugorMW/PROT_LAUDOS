import { View, Text, Switch } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [isEnabled, setIsEnabled] = useState(false);
  // Função para lidar com a mudança do switch
  function toggleSwitch() {
    // Inverte o estado do switch
    setIsEnabled(!isEnabled);
    console.log(`Switch ${isEnabled}`);
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
    </SafeAreaView>
  );
}
