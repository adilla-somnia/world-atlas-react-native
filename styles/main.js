import { StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: '#090713',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  activeButton: {
    backgroundColor: '#007AFF', // iOS blue
  },
  text: {
    color: '#ffffff',
    textAlignVertical:'center'
  },
  activeText: {
    color: '#fff',
    fontWeight: '600',
  },
gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // allow multiple rows
    gap: 10,          // spacing between cards
    paddingHorizontal: 10,
    backgroundColor: '#11091f'
  },
  gridCard: {
    flex: 1,               // take equal space in row
    minWidth: '45%',       // ensure 2 columns
    backgroundColor: 'rgba(42, 41, 43, 0.72)',
    padding: 10,
    borderRadius: 10
  },
  gridTitle: {
    fontSize: 18,
    color:'white'
  },
  gridValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white'
  },

});
