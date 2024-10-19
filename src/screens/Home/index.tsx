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
import { Course } from "../../components/Course";


type CoursesProps = {
  idCourse: string;
  courseHours: string;
  teacher: string;
}

const placeHolder = "#E0E0E0"

export function Home() {
  const [idCourse, setIdCourse] = useState('')
  const [courseHours, setCourseHours] = useState('')
  const [teacher, setTeacher] = useState('')
  const [courses, setCourses] = useState<CoursesProps[]>([])

  function handleAddCourse() {
    if (idCourse.trim() === '' || courseHours.trim() === '' || teacher.trim() === '') {
      return Alert.alert('Campos Vazios','Favor preencher todos os campos!')
    }

    const data = {
      idCourse,
      courseHours,
      teacher
    }

    const result =
      courses.filter(
        course => course.idCourse.toLowerCase() === idCourse.toLowerCase()
    )

    if (result.length > 0) {
      return Alert.alert('Curso', 'Este curso já está cadastrado!')
    }

    setCourses([...courses, data])
    setIdCourse('')
    setCourseHours('')
    setTeacher('')
  }

  function handleRemoveCourse() {

  }

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
            onChangeText={value => setIdCourse(value)}
            value={idCourse}
            />
          <TextInput
            style={styles.inputs}
            placeholder='Carga Horária'
            placeholderTextColor={placeHolder}
            keyboardType="decimal-pad"
            keyboardAppearance="dark"
            onChangeText={value => setCourseHours(value)}
            value={courseHours}
            />
          <TextInput
            style={styles.inputs}
            placeholder='Professor'
            placeholderTextColor={placeHolder}
            keyboardAppearance="dark"
            onChangeText={value => setTeacher(value)}
            value={teacher}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleAddCourse}
          >
            <Text
              style={styles.buttonText}
            >
              ENVIAR
            </Text>
          </TouchableOpacity>

          <View style={styles.list}>
            <ScrollView>
              <Course/>
              <Course/>
              <Course/>
              <Course/>
              <Course/>
              <Course/>
              <Course/>
              <Course/>
              <Course/>
            </ScrollView>
          </View>

      </View>
    </View>
  )
}