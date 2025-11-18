import { useState } from "react";
import { Alert, Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
//import { Button } from "react-native-web";

import type { Note } from "../../types/notes";
import { ModalNotes } from "@/components/ModalNotes";
import { NoteList } from "@/components/NoteList";

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
            <NoteList
                notes={notes}
                toggleNote={toggleNote}
                deleteNote={deleteNote}
            />

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}>Додати замітку</Text>
            </TouchableOpacity>

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
        title: {
            fontSize: 20,
            fontStyle: "italic",
            textAlign: "center",
            color: "green"
        },
        list: {
            backgroundColor: "azure",
        },
        addButton: {
            position: "absolute",
            bottom: 20,
            right: 20,
            left: 20,
            padding: 10,
            borderRadius: 5,
            backgroundColor: "#007bff",
            alignItems: "center",
        },
        addButtonText: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
        },
        // styles for Button dont work properly
        button: {
            width: "10%",
            padding: 5,
            paddingHorizontal: 16,
            backgroundColor: "lightgray",
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 10,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
        },
        form: {
            //dispaly: "flex" - default for View
            //flexDirection: "column" - default for View
            gap: 10,
        },
        input: {
            borderColor: "green",
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderWidth: 1,
            borderRadius: 10
        },
        deleteText: {
            color: "red",
            fontWeight: "bold",
            fontSize: 18,
            textAlign: "center"
        },
        itemContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
            paddingHorizontal: 5,
        },
        modalContent: {
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 10,
            width: "80%",
        }
    }
);