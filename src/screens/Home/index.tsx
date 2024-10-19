import { useState } from "react";
import { 
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Course } from "../../components/Course";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


type CoursesProps = {
  idCourse: string;
  courseHours: string;
  teacher: string;
}

const placeHolder = "#9B9B9B"


export function Home() {
  const [idCourse, setIdCourse] = useState('')
  const [courseHours, setCourseHours] = useState('')
  const [teacher, setTeacher] = useState('')
  const [courses, setCourses] = useState<CoursesProps[]>([])
  const permitedCourses = ["PM I", "PM II", "LPW II", "BD", "LOG", "POO", "ALG"]


  function handleAddCourse() {
    if (idCourse.trim() === '' || courseHours.trim() === '' || teacher.trim() === '') {
      return Alert.alert('Campos Vazios','Favor preencher todos os campos!')
    }

    if (permitedCourses.includes(idCourse)){
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
    } else {
      return Alert.alert('Código de Curso',`Código "${idCourse}" Inválido!`)
    }

  }

  function handleRemoveCourse(idCourse: string) {
    Alert.alert(
      'Curso',
      `Remover o curso ${idCourse}?`,
      [
        {
          text: 'Sim',
          onPress: () =>
            setCourses(
              courses.filter(course => course.idCourse !== idCourse)
            )
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]
    )
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
            <MaterialIcons name="download" size={36} color="black" />
          </TouchableOpacity>

          <View style={styles.list}>

            <FlatList
              data={courses}
              keyExtractor={item => item.idCourse}
              renderItem={({item}) => (
                <Course
                  idCourse={item.idCourse}
                  courseHours={item.courseHours}
                  teacher={item.teacher}
                  onRemove={() => handleRemoveCourse(item.idCourse)}
                  
                />
              )}
              ListEmptyComponent={() => (
                <Text
                  style={styles.listEmptyText}
                >
                  Adicione algum curso.
                </Text>
              )}
            />
          </View>

      </View>
    </View>
  )
}