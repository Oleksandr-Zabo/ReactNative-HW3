import { FlatList, StyleSheet, Text, View } from "react-native";
import { ItemNote } from "./ItemNote";
interface NoteListProps{
    notes: { id: string; text: string; completed: boolean }[];
    toggleNote: (id: string) => void;
    deleteNote: (id: string) => void;
}

export const NotesList = ({ notes, toggleNote, deleteNote }: NoteListProps) => { 
    return (
        <View>
        <Text style={styles.title}> Список наших заміток </Text>
                    {/* {nodes.map((node)=>( <Text key={node.id}>{node.text}</Text>) )} */}
                    <FlatList
                        style={styles.list}
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

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: "azure",
            flex: 1,
        },
        title: {
            fontSize: 20,
            fontStyle: "italic",
            textAlign: "center",
            color: "green"
        },
        list: {
            backgroundColor: "azure",
        },
    }
);