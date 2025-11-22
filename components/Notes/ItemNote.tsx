import useTheme from "@/hooks/useTheme";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Text, TouchableOpacity, View } from "react-native";
import getNotesStyles from "./notes.styles";

interface ItemNoteProps{
    text: string;
    id: string;
    completed: boolean;
    deleteNote: (id: string) => void;
    toggleNote: (id: string) => void;
    
}

export const ItemNote = ({ text, id, completed, deleteNote: deleteNote, toggleNote }: ItemNoteProps) => {
  const { colors } = useTheme();
  const styles = getNotesStyles(colors);

  return (
    <View style={[styles.noteItem, completed && styles.noteItemCompleted]}>
      <View style={styles.noteContent}>
        <TouchableOpacity style={styles.checkboxContainer} onPress={() => toggleNote(id)}>
          <View style={[styles.checkbox, completed && styles.checkboxChecked]}>
            {completed && <Text style={styles.checkmark}>✓</Text>}
          </View>
        </TouchableOpacity>
        <Text style={[styles.noteText, completed && styles.noteTextCompleted]}>{text}</Text>
        <TouchableOpacity
          style={[styles.noteButton, styles.noteButtonDelete]}
          onPress={() => {
            deleteNote(id);
          }}
        >
          <Text style={styles.noteButtonText}>
            <AntDesign name="close-circle" size={24} color={colors.surface} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};