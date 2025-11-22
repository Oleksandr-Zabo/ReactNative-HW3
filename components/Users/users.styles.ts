import { StyleSheet } from "react-native";

export default function getUsersStyles(colors: any) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.bg,
            paddingHorizontal: 16,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: '700',
            color: colors.primary,
        },
        headerRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
        },
        searchInput: {
            backgroundColor: colors.surface,
            borderRadius: 8,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: colors.border,
            marginBottom: 8,
            color: colors.text,
        },
        filterRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
        },
        sortRow: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        sortLabel: {
            marginRight: 8,
            color: colors.textMuted,
        },
        controlsColumn: {
            marginBottom: 6,
        },
        // item-level styles can remain in ItemUser but defaults provided here
        itemContainer: {
            backgroundColor: colors.surface,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: 12,
            padding: 8,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        nameText: {
            color: colors.text,
            fontSize: 16,
            fontWeight: '700',
        },
        emailText: {
            color: colors.textMuted,
            fontSize: 13,
            marginTop: 2,
        },
    });
}
