import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ItemNoteProps{
    text: string;
    id: string;
    completed: boolean;
    deleteNote: (id: string) => void;
    toggleNote: (id: string) => void;
    
}

export const ItemNote = ({text, id, completed, deleteNote: deleteNote, toggleNote}: ItemNoteProps) => {
    return (
        <View style={[styles.noteItem, completed && styles.noteItemCompleted]}>
      <View style={styles.noteContent}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => toggleNote(id)}
        >
          <View
            style={[styles.checkbox, completed && styles.checkboxChecked]}
          >
            {completed && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>
        <Text
          style={[styles.noteText, completed && styles.noteTextCompleted]}
        >
          {text}
        </Text>
        <TouchableOpacity
          style={[styles.noteButton, styles.noteButtonDelete]}
          onPress={() => {
            deleteNote(id);
          }}
        >
          <Text style={styles.noteButtonText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
}

const styles = StyleSheet.create(
    {
    noteItem: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: "#007bff",
  },
  noteButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#007bff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  noteItemCompleted: {
    backgroundColor: "#f0f9ff",
    borderLeftColor: "#28a745",
    opacity: 0.85,
  },
  noteContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  checkboxContainer: {
    marginRight: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  checkboxChecked: {
    backgroundColor: "#28a745",
    borderColor: "#28a745",
  },
  checkmark: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
//   noteButton: {
//     backgroundColor: "#007bff",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     alignItems: "center",
//     shadowColor: "#007bff",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 2,
//   },
  noteButtonDelete: {
    backgroundColor: "#dc3545",
    shadowColor: "#dc3545",
  },
  noteButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  noteText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    lineHeight: 22,
  },
  noteTextCompleted: {
    textDecorationLine: "line-through",
    color: "#888",
  },
}
)
;