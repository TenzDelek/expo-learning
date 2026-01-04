import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="routes/Onboarding" options={{ headerShown: false }} />
    <Stack.Screen name="routes/Pokemon/[id]" options={{ headerShown: false }} />
    <Stack.Screen name="routes/(tabs)" options={{ headerShown: false }} />
  </Stack>;
}
