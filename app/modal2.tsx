import { StatusBar } from "expo-status-bar";
import { Platform, Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Link, useRouter } from "expo-router";
import { TrueSheet } from "@lodev09/react-native-true-sheet";

export default function Modal2Screen() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 10,
        margin: 10,
        flex: 1,
        backgroundColor: "transparent",
      }}
    >
      <Text>
        I am just the background and should not stay here when sheet is closed
        or reloaded
      </Text>
      <TrueSheet
        initialIndex={0}
        initialIndexAnimated
        onDismiss={() => {
          router.dismiss();
        }}
        sizes={["auto"]}
        cornerRadius={24}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Modal2</Text>
        </View>
      </TrueSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
