import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f7fb",
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#05668d'
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#e6eef5',
        marginBottom: 8,
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
        color: '#2b4b5b'
    },
    controlsColumn: {
        marginBottom: 6,
    },
});

export default styles;
