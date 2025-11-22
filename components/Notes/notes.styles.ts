import { StyleSheet } from "react-native";

export default function getNotesStyles(colors: any) {
    return StyleSheet.create({
        container: {
            paddingTop: 40,
            paddingHorizontal: 5,
            backgroundColor: colors.bg,
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
            backgroundColor: colors.primary,
        },
        addButtonText: {
            color: colors.surface,
            fontSize: 18,
            fontWeight: "bold",
        },
        // note item
        noteItem: {
            backgroundColor: colors.surface,
            padding: 16,
            marginVertical: 8,
            borderRadius: 12,
            borderLeftWidth: 4,
            borderLeftColor: colors.primary,
        },
        noteItemCompleted: {
            backgroundColor: colors.bg,
            borderLeftColor: colors.success,
            opacity: 0.95,
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
            borderColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.surface,
        },
        checkboxChecked: {
            backgroundColor: colors.success,
            borderColor: colors.success,
        },
        checkmark: {
            color: colors.surface,
            fontSize: 16,
            fontWeight: "bold",
        },
        noteButton: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 8,
            alignItems: "center",
        },
        noteButtonDelete: {
            backgroundColor: colors.danger,
        },
        noteButtonText: {
            color: colors.surface,
            fontSize: 18,
            fontWeight: "bold",
        },
        noteText: {
            fontSize: 16,
            color: colors.text,
            flex: 1,
            lineHeight: 22,
        },
        noteTextCompleted: {
            textDecorationLine: "line-through",
            color: colors.textMuted,
        },
        // modal
        modalContent: {
            backgroundColor: colors.surface,
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
            color: colors.text,
        },
        modalInput: {
            borderColor: colors.primary,
            paddingHorizontal: 16,
            paddingVertical: 10,
            borderWidth: 1,
            borderRadius: 10,
            marginBottom: 20,
            color: colors.text,
            backgroundColor: colors.surface,
        },
        modalButtonsContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        modalButtonLeft: { marginRight: 8 },
        modalButtonText: {
            color: colors.surface,
            fontSize: 18,
            fontWeight: "bold",
        },
    });
}