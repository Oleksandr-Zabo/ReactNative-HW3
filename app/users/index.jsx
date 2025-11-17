import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function UsersScreen() {
    const [users, setUsers] = useState([
        { id: 1, name: "Олена Коваль", email: "olena@example.com", age: 28 },
        { id: 2, name: "Петро Сидоренко", email: "petro@example.com", age: 32 },
    ]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [showForm, setShowForm] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterAdults, setFilterAdults] = useState(false);
    const [sortBy, setSortBy] = useState(null); // 'name' | 'age' | 'email'
    const [editingUserId, setEditingUserId] = useState(null);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const validateAge = (age) => {
        const ageNumber = Number(age);
        return Number.isInteger(ageNumber) && ageNumber > 0;
    }

    const addUser = () => {
        if (name.trim() === "" || email.trim() === "" || age.trim() === "") return;
        if (!validateEmail(email)) {
            alert("Будь ласка, введіть дійсну електронну адресу.");
            return;
        }
        if (!validateAge(age)) {
            alert("Будь ласка, введіть дійсний вік.");
            return;
        }
        if (editingUserId) {
            setUsers(prev => prev.map(u => u.id === editingUserId ? { ...u, name: name.trim(), email: email.trim(), age: Number(age) } : u));
            setEditingUserId(null);
        } else {
            const newUser = {
                id: Date.now(),
                name: name.trim(),
                email: email.trim(),
                age: Number(age),
            };
            setUsers((prevUsers) => [...prevUsers, newUser]);
        }
        setName("");
        setEmail("");
        setAge("");
    }

    const deleteUser = (id) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    }

    const startEdit = (user) => {
        setEditingUserId(user.id);
        setName(user.name);
        setEmail(user.email);
        setAge(String(user.age));
        setShowForm(true);
    }

    const cancelEdit = () => {
        setEditingUserId(null);
        setName("");
        setEmail("");
        setAge("");
    }

    const getDisplayedUsers = () => {
        let list = [...users];
        const q = searchQuery.trim().toLowerCase();
        if (q) {
            list = list.filter(u => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
        }
        if (filterAdults) {
            list = list.filter(u => Number(u.age) > 18);
        }
        if (sortBy === 'name') list.sort((a,b) => a.name.localeCompare(b.name));
        if (sortBy === 'age') list.sort((a,b) => Number(a.age) - Number(b.age));
        if (sortBy === 'email') list.sort((a,b) => a.email.localeCompare(b.email));
        return list;
    }

    return (
        <View style={styles.container}>

            <View style={styles.controlsColumn}>
                <View style={styles.headerRow}>
                    <Text style={styles.sectionTitle}>Користувачів: {users.length}</Text>
                    <TouchableOpacity style={styles.toggleButton} onPress={() => setShowForm(prev => !prev)}>
                        <Text style={styles.toggleButtonText}>{showForm ? 'Приховати форму' : 'Показати форму'}</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Пошук за ім'ям або email"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    autoCapitalize="none"
                />

                <View style={styles.filterRow}>
                    <TouchableOpacity style={[styles.filterButton, filterAdults && styles.filterButtonActive]} onPress={() => setFilterAdults(prev => !prev)}>
                        <Text style={[styles.filterButtonText, filterAdults && styles.filterButtonTextActive]}>{filterAdults ? 'Показати всіх' : 'Лише 18+'}</Text>
                    </TouchableOpacity>
                    <View style={styles.sortRow}>
                        <Text style={styles.sortLabel}>Сортувати:</Text>
                        <TouchableOpacity style={[styles.sortButton, sortBy === 'name' && styles.sortButtonActive]} onPress={() => setSortBy(prev => prev === 'name' ? null : 'name')}>
                            <Text style={sortBy === 'name' ? styles.sortTextActive : styles.sortText}>Ім'я</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sortButton, sortBy === 'age' && styles.sortButtonActive]} onPress={() => setSortBy(prev => prev === 'age' ? null : 'age')}>
                            <Text style={sortBy === 'age' ? styles.sortTextActive : styles.sortText}>Вік</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.sortButton, sortBy === 'email' && styles.sortButtonActive]} onPress={() => setSortBy(prev => prev === 'email' ? null : 'email')}>
                            <Text style={sortBy === 'email' ? styles.sortTextActive : styles.sortText}>Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {showForm && (
                    <View style={styles.form}>
                        <Text style={styles.title}>{editingUserId ? 'Редагувати користувача' : 'Додати користувача'}:</Text>
                        <TextInput style={styles.input}
                            value={name}
                            placeholder="Введіть ім'я користувача"
                            onChangeText={setName}
                        />
                        <TextInput style={styles.input}
                            value={email}
                            placeholder="Введіть email користувача"
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <TextInput style={styles.input}
                            value={age}
                            placeholder="Введіть вік користувача"
                            onChangeText={setAge}
                            keyboardType="numeric"
                        />
                        <View style={styles.formButtonsRow}>
                            <TouchableOpacity style={styles.submitButton} onPress={addUser}>
                                <Text style={styles.submitButtonText}>{editingUserId ? 'Зберегти' : 'Додати користувача'}</Text>
                            </TouchableOpacity>
                            {editingUserId && (
                                <TouchableOpacity style={styles.cancelButton} onPress={cancelEdit}>
                                    <Text style={styles.cancelButtonText}>Скасувати</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                )}
            </View>
            {/* {users.map((user)=>(
                <Text key={user.id}>{user.name}</Text>
            ))} */}
            <FlatList style={styles.list}
                data={getDisplayedUsers()}
                keyExtractor={user => user.id.toString()}
                renderItem={({ item }) =>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemColumn}>
                            <Text style={styles.item}>{item.name}</Text>
                            <Text style={styles.userEmail}>{item.email}</Text>
                            <Text style={styles.userAge}>Вік: {item.age}</Text>
                        </View>
                        <View style={styles.itemActions}>
                            <TouchableOpacity style={styles.editButton} onPress={() => startEdit(item)}>
                                <Text style={styles.editButtonText}>Редагувати</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => { deleteUser(item.id) }}>
                                <Text style={styles.deleteText}>Видалити</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
            />
        </View>
    );

}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#f3f7fb",
            paddingHorizontal: 16,
            paddingTop: 20,
        },
        title: {
            fontSize: 22,
            fontWeight: "700",
            textAlign: "center",
            color: "#05668d",
            marginBottom: 12,
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
        list: {
            marginTop: 12,
        },
        itemContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
            padding: 8,
            borderRadius: 12,
            backgroundColor: "#ffffff",
            borderWidth: 1,
            borderColor: "#eef6fb",
        },
        item: {
            color: "#1b262c",
            fontSize: 16,
            paddingVertical: 6,
            paddingHorizontal: 8,
            flex: 1,
        },
        itemColumn: {
            flex: 1,
            paddingRight: 8,
        },
        userEmail: {
            color: '#4b5b6a',
            fontSize: 13,
            marginTop: 2,
        },
        userAge: {
            color: '#6b7a86',
            fontSize: 12,
            marginTop: 2,
        },
        itemActions: {
            alignItems: 'flex-end',
            justifyContent: 'center',
        },
        editButton: {
            backgroundColor: '#f0f6fb',
            paddingVertical: 6,
            paddingHorizontal: 8,
            borderRadius: 8,
            marginBottom: 6,
        },
        editButtonText: {
            color: '#05668d',
            fontWeight: '600',
        },
        // button used with TouchableOpacity
        button: {
            backgroundColor: "#ff6b6b",
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 8,
            marginLeft: 8,
            minWidth: 40,
            alignItems: "center",
            justifyContent: "center",
        },
        submitButton: {
            backgroundColor: '#05668d',
            paddingVertical: 10,
            paddingHorizontal: 14,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 6,
        },
        toggleButton: {
            backgroundColor: '#e6f2f8',
            paddingVertical: 6,
            paddingHorizontal: 10,
            borderRadius: 8,
        },
        toggleButtonText: {
            color: '#05668d',
            fontWeight: '600'
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
        filterButton: {
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 8,
            backgroundColor: '#f8fbfd',
            borderWidth: 1,
            borderColor: '#e6eef5',
        },
        filterButtonActive: {
            backgroundColor: '#e1f4fb',
            borderColor: '#bfe9fb',
        },
        filterButtonText: {
            color: '#05668d',
            fontWeight: '600',
        },
        filterButtonTextActive: {
            color: '#013a52',
        },
        sortRow: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        sortLabel: {
            marginRight: 8,
            color: '#2b4b5b'
        },
        sortButton: {
            paddingHorizontal: 8,
            paddingVertical: 6,
            borderRadius: 8,
            marginRight: 6,
            backgroundColor: '#f6fbfd',
            borderWidth: 1,
            borderColor: '#e6eef5',
        },
        sortButtonActive: {
            backgroundColor: '#cfeefc',
            borderColor: '#9fe3fb',
        },
        sortText: {
            color: '#05668d'
        },
        sortTextActive: {
            color: '#013a52',
            fontWeight: '700'
        },
        controlsColumn: {
            marginBottom: 6,
        },
        formButtonsRow: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        cancelButton: {
            marginLeft: 8,
            paddingHorizontal: 12,
            paddingVertical: 10,
            borderRadius: 10,
            backgroundColor: '#f3f7fb',
            borderWidth: 1,
            borderColor: '#e6eef5',
        },
        cancelButtonText: {
            color: '#05668d',
            fontWeight: '700',
        },
        deleteText: {
            color: "#fff",
            fontWeight: "700",
            fontSize: 14,
        },
        form: {
            marginBottom: 8,
        },
        input: {
            backgroundColor: "#ffffff",
            borderRadius: 10,
            paddingHorizontal: 14,
            paddingVertical: 10,
            marginBottom: 8,
            borderWidth: 1,
            borderColor: "#e6eef5",
        },
        submitButtonText: {
            color: "#fff",
            fontWeight: "700",
            fontSize: 16,
        }
    }
)
    ;