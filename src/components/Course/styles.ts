import { StyleSheet } from "react-native";

const textColor = "#E0E0E0"
const borderColor = "#00FFFF"

export const styles = StyleSheet.create({
  course: {
    marginBottom: 5,
    backgroundColor: 'black',
    borderColor: borderColor,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  listText: {
    flex: 1,
    margin: 10,
    color: textColor,
    fontSize: 22,
  },

  listButton: {
    width: 56,
    height: 56,
    backgroundColor: '#00FFFF',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listButtonText: {
    color: '#0A0A0A',
    fontSize: 30,
  },
})