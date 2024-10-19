import { 
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Entypo from '@expo/vector-icons/Entypo';

const permitedCourses = ["PM I", "PM II", "LPW II", "BD", "LOG", "POO", "ALG"]

type CoursesProps = {
  idCourse: string;
  courseHours: string;
  teacher: string;
  onRemove?: () => void;
}

// {idCourse, courseHours, teacher, onRemove}: CoursesProps
export function Course() {
  return (
    <View style={styles.course}>
      <Text style={styles.listText}>
          PM I - 80h - Luiz Cláudio
      </Text>

      <TouchableOpacity 
          style={styles.listButton}
          // onPress={onRemove}
      >
          <Text style={styles.listButtonText}>
            <Entypo 
              name="trash" 
              size={30} 
              color="black"
            />
          </Text>
      </TouchableOpacity>
    </View>
  )
}