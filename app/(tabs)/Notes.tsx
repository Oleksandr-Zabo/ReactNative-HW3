import getNotesStyles from "@/components/Notes/notes.styles";
import useTheme from "@/hooks/useTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
//import { Button } from "react-native-web";

import { ModalNotes } from "@/components/Notes/ModalNotes";
import { NotesList } from "@/components/Notes/NotesList";
import CustomButton from "../../components/CustomButton";
import type { Note } from "../../types/notes";

export default function NotesScreen() {
    const inset = useSafeAreaInsets();
    const [notes, setNotes] = useState<Note[]>([]);
    const [textNote, setTextNote] = useState<string>("");
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const { colors } = useTheme();
    const styles = getNotesStyles(colors);

    // load notes from AsyncStorage
    useEffect(() => {
        (async () => {
            try {
                const raw = await AsyncStorage.getItem('notes');
                if (raw) {
                    const parsed = JSON.parse(raw) as Note[];
                    setNotes(parsed);
                }
            } catch (e) {
                // ignore
            }
        })();
    }, []);

    // save notes on change
    useEffect(() => {
        (async () => {
            try {
                await AsyncStorage.setItem('notes', JSON.stringify(notes));
            } catch (e) {
                // ignore
            }
        })();
    }, [notes]);

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
        <View style={{...styles.container, paddingTop: inset.top}}>
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

