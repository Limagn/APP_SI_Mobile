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
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 40,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#00FFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    marginRight: 10,
    color: '#0A0A0A',
    fontSize: 40,
    fontWeight: 'bold'
  },

  list: {
    margin: 15,
    marginTop: 50,
    padding: 10,
    height: 340,
    backgroundColor: '#141414',
    borderColor: borderColor,
    borderWidth: 1,
  },

  listEmptyText: {
    color: '#E0E0E0',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  }
})