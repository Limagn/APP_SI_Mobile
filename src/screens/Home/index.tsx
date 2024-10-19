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

type DataProps = {
  idCourse: string;
  courseHours: number;
  teacher: string;
}
const placeHolder = "#E0E0E0"

export function Home() {
  const [idCourse, setIdCourse] = useState('')
  const [courseHours, setCourseHours] = useState()
  const [teacher, setTeacher] = useState('')
  const [data, setData] = useState<DataProps[]>([])

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>
          Cursos S.I.
        </Text>
      </View>
      
      <View style={styles.body}>
          <TextInput
            style={styles.inputs}
            placeholder='ID Curso'
            placeholderTextColor={placeHolder}
            keyboardAppearance="dark"
            />
          <TextInput
            style={styles.inputs}
            placeholder='Carga Horária'
            placeholderTextColor={placeHolder}
            keyboardType="decimal-pad"
            keyboardAppearance="dark"
            />
          <TextInput
            style={styles.inputs}
            placeholder='Professor'
            placeholderTextColor={placeHolder}
            keyboardAppearance="dark"
          />

          <View style={styles.list}>
            <ScrollView>
              <Text style={styles.listText}>Test</Text>  
            </ScrollView>
          </View>

          <TouchableOpacity
            style={styles.button}
            // onPress={handleAddInputs}
          >
            <Text
              style={styles.buttonText}
            >
              ENVIAR
            </Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}