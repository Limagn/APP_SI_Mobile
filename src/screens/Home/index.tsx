import { useState } from "react";
import { 
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
  ScrollView
} from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  )
}