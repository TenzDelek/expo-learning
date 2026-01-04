import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 justify-center bg-red-100 items-center"
    >
      <Text className="text-2xl font-bold">Edit app/index.tsx to edit this screen.</Text>
      <Link href="/routes/Onboarding" className="text-blue-500">Go to Onboarding</Link>
      <Link href="/routes/Pokemon/1" className="text-blue-500">Go to Pokemon 1</Link>
      <Link href="/routes/(tabs)/Poke" className="text-blue-500">Go to Poke</Link>
    </View>
  );
}
