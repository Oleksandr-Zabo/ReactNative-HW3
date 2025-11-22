import useTheme from "@/hooks/useTheme";
import { FlatList, Text, View } from "react-native";
import { ItemNote } from "./ItemNote";
import getNotesStyles from "./notes.styles";
interface NoteListProps{
    notes: { id: string; text: string; completed: boolean }[];
    toggleNote: (id: string) => void;
    deleteNote: (id: string) => void;
}

export const NotesList = ({ notes, toggleNote, deleteNote }: NoteListProps) => {
    const { colors } = useTheme();
    const styles = getNotesStyles(colors);

    if (!notes || notes.length === 0) {
        return (
            <View style={{ padding: 20 }}>
                <Text style={{ color: colors.textMuted, textAlign: 'center' }}>Поки що немає заміток.</Text>
            </View>
        );
    }

    return (
        <View>
            <Text style={{ fontSize: 20, fontStyle: 'italic', textAlign: 'center', color: colors.success }}> Список наших заміток </Text>
            <FlatList
                style={{}}
                data={notes}
                keyExtractor={node => node.id}
                renderItem={({ item }) => (
                    <ItemNote
                        {...item}
                        toggleNote={toggleNote}
                        deleteNote={deleteNote}
                    />
                )}
            />
        </View>
    );
}