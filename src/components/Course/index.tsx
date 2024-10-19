import { 
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Entypo from '@expo/vector-icons/Entypo';


type CoursesProps = {
  idCourse: string;
  courseHours: string;
  teacher: string;
  onRemove?: () => void;
}

export function Course({idCourse, courseHours, teacher, onRemove}: CoursesProps) {
  return (
    <View style={styles.course}>
      <Text style={styles.listText}>
          {idCourse} - {courseHours}h - {teacher}
      </Text>

      <TouchableOpacity 
          style={styles.listButton}
          onPress={onRemove}
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