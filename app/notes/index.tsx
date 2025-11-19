import { useState } from "react";
import { StyleSheet, View } from "react-native";
//import { Button } from "react-native-web";

import { ModalNotes } from "@/components/Notes/ModalNotes";
import { NotesList } from "@/components/Notes/NotesList";
import CustomButton from "../../components/CustomButton";
import type { Note } from "../../types/notes";

export default function NotesScreen() {
    const [notes, setNotes] = useState<Note[]>([
        { id: "aaa", text: "Вивчти перший модуль", completed: false },
        { id: "aab", text: "Вивчти другий модуль", completed: false },
        { id: "aac", text: "Зробити домашку", completed: false },
    ]);
    const [textNote, setTextNote] = useState<string>("");
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const addNote = () => {
        if (textNote.trim() === "") return;
        setNotes((prevNotes) => [...prevNotes, { id: Date.now().toString(), text: textNote, completed: false }]);
        setTextNote("");

    }

    const deleteNote = (id: string): void => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    }

    const toggleNote = (id: string): void => {
        const newNotes = notes.map((note) => (note.id === id) ? { ...note, completed: !note.completed } : note);
        setNotes(newNotes);
    }

    return (
        <View style={styles.container}>
            <NotesList
                notes={notes}
                toggleNote={toggleNote}
                deleteNote={deleteNote}
            />

            <View style={styles.addButtonWrapper}>
                <CustomButton title="Додати замітку" onPress={() => setModalVisible(true)} />
            </View>

            <ModalNotes
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                textNote={textNote}
                setTextNote={setTextNote}
                addNote={addNote}
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
        
        addButtonWrapper: {
            position: "absolute",
            bottom: 20,
            right: 20,
            left: 20,
        },
        addButton: {
            padding: 12,
            borderRadius: 8,
        },
        addButtonText: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
        }
    }
);