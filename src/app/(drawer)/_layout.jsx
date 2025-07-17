import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { router } from "expo-router";

export default function LayoutDrawer() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          contentStyle: {
            backgroundColor: "#219ebc", // ✅ cor do fundo do menu lateral (Drawer)
          },
          drawerStyle: {
            width: "50%",
            //backgroundColor: "#219ebc", // ✅ cor do menu lateral (Drawer)
          },
        }}
        drawerContent={(props) => (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Empresas"
              onPress={() => {
                setTimeout(async () => {
                  await router.push("/empresas"); // Aguarda a navegação
                }, 200); // 300ms é o tempo padrão da animação do Drawer
                props.navigation.closeDrawer();
              }}
            />
          </DrawerContentScrollView>
        )}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Nome da Empresa -------------------> Nome Usuario logado",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
