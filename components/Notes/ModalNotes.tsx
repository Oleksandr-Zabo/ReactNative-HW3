import useTheme from "@/hooks/useTheme";
import { Alert, Modal, Text, TextInput, View } from "react-native";
import CustomButton from "../CustomButton";
import getNotesStyles from "./notes.styles";

interface ModalNotesProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    textNote: string;
    setTextNote: (text: string) => void;
    addNote: () => void;
}

export const ModalNotes = ({ modalVisible, setModalVisible, textNote, setTextNote, addNote }: ModalNotesProps) => {
    const { colors } = useTheme();
    const styles = getNotesStyles(colors);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(false);
            }}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Додати замітку</Text>
                    <TextInput
                        style={styles.modalInput}
                        value={textNote}
                        onChangeText={setTextNote}
                        placeholder="Введіть текст"
                        placeholderTextColor={colors.textMuted}
                        multiline={true}
                        numberOfLines={2}
                    />
                    <View style={styles.modalButtonsContainer}>
                        <View style={styles.modalButtonLeft}>
                            <CustomButton title="Додати" onPress={() => { addNote(); setModalVisible(false); }} />
                        </View>
                        <CustomButton title="Відміна" onPress={() => setModalVisible(false)} variant="secondary" />
                    </View>
                </View>
            </View>
        </Modal>
    );
};