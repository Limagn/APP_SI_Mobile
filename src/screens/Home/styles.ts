import { StyleSheet } from "react-native";


const textColor = "#E0E0E0"
const borderColor = "#00FFFF"

export const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A0A0A',
  },

  title: {
    marginTop: 50,
    marginBottom: 30,
    fontSize: 35,
    fontWeight: 'bold',
    color: '#00FFFF',
  },

  body: {
    height: '100%',
    backgroundColor: '#1C1C1C',
  },

  inputs: {
    margin: 15,
    marginBottom: 5,
    paddingLeft: 15,
    height: 56,
    color: textColor,
    backgroundColor: '#141414',
    borderColor: borderColor,
    borderWidth: 1,
    fontSize: 22,
  },

  button: {
    marginHorizontal: 15,
    marginTop: 40,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#00FFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#0A0A0A',
    fontSize: 40,
    fontWeight: 'bold'
  },

  list: {
    margin: 15,
    marginTop: 50,
    paddingLeft: 15,
    height: 320,
    backgroundColor: '#141414',
    borderColor: borderColor,
    borderWidth: 1,
  },

  listText: {
    color: textColor,
  }
})