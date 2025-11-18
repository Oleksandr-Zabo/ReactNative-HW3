import { Modal, Text, TouchableOpacity, View, StyleSheet, Alert, TextInput } from "react-native";

interface ModalNotesProps {
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    textNote: string;
    setTextNote: (text: string) => void;
    addNote: () => void;
}

export const ModalNotes = ({ modalVisible, setModalVisible, textNote, setTextNote, addNote }: ModalNotesProps) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(false);
            }}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Hello World form Modal!</Text>
                    <TextInput
                        style={styles.modalInput}
                        value={textNote}
                        onChangeText={setTextNote}
                        placeholder="Введіть текст"
                        placeholderTextColor="#a1a1a1a1"
                        multiline={true}
                        numberOfLines={2}
                    />
                    <View style={styles.modalButtonsContainer}>
                        <TouchableOpacity
                            style={styles.modalButton}
                            onPress={() => {
                                addNote();
                                setModalVisible(false);
                            }}
                        >
                            <Text style={styles.modalButtonText}>Додати</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalCancelButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.modalButtonText}>Відміна</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );

}

const styles = StyleSheet.create(
    {
        modalContent: {
            backgroundColor: "#fff",
            padding: 20,
            borderRadius: 10,
            width: "80%",
        },
        modalOverlay: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        modalTitle: {
            fontSize: 20,
            marginBottom: 20,
        },
        modalInput: {
            borderColor: "green",
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 20,
        },
        modalButtonsContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        modalCancelButton: {
            backgroundColor: "#ccc",
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
        },
        modalButton: {
            backgroundColor: "#007bff",
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
        },
        modalButtonText: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
        },
    }
)
    ;