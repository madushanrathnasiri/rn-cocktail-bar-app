import { Tabs } from "expo-router";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShadowVisible: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "All",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="drink" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="favorite-border" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
