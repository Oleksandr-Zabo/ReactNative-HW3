import { Text, TextInput, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import ModalUsers from "../../components/Users/ModalUsers";
import styles from "../../components/Users/styles";
import UserList from "../../components/Users/UserList";
import useUsers from "./useUsers";

export default function UsersScreen() {
    const {
        users,
        name,
        setName,
        email,
        setEmail,
        age,
        setAge,
        showForm,
        setShowForm,
        searchQuery,
        setSearchQuery,
        filterAdults,
        setFilterAdults,
        sortBy,
        setSortBy,
        editingUserId,
        addUser,
        deleteUser,
        startEdit,
        cancelEdit,
        getDisplayedUsers,
    } = useUsers();

    return (
        <View style={styles.container}>

            <View style={styles.controlsColumn}>
                <View style={styles.headerRow}>
                    <Text style={styles.sectionTitle}>Користувачів: {users.length}</Text>
                    <CustomButton
                        title={showForm ? 'Приховати форму' : 'Показати форму'}
                        variant="secondary"
                        onPress={() => setShowForm(prev => !prev)}
                    />
                </View>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Пошук за ім'ям або email"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    autoCapitalize="none"
                />

                <View style={styles.filterRow}>
                    <CustomButton
                        title={filterAdults ? 'Показати всіх' : 'Лише 18+'}
                        variant={filterAdults ? 'primary' : 'secondary'}
                        active={filterAdults}
                        onPress={() => setFilterAdults(prev => !prev)}
                    />
                    <View style={styles.sortRow}>
                        <Text style={styles.sortLabel}>Сортувати:</Text>
                        <CustomButton
                            title={`Ім'я`}
                            variant={sortBy === 'name' ? 'primary' : 'secondary'}
                            active={sortBy === 'name'}
                            onPress={() => setSortBy(prev => prev === 'name' ? null : 'name')}
                        />
                        <CustomButton
                            title={`Вік`}
                            variant={sortBy === 'age' ? 'primary' : 'secondary'}
                            active={sortBy === 'age'}
                            onPress={() => setSortBy(prev => prev === 'age' ? null : 'age')}
                        />
                        <CustomButton
                            title={`Email`}
                            variant={sortBy === 'email' ? 'primary' : 'secondary'}
                            active={sortBy === 'email'}
                            onPress={() => setSortBy(prev => prev === 'email' ? null : 'email')}
                        />
                    </View>
                </View>

                <ModalUsers
                    modalVisible={showForm}
                    setModalVisible={setShowForm}
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    age={age}
                    setAge={setAge}
                    onSubmit={addUser}
                    onCancel={cancelEdit}
                    editing={!!editingUserId}
                />
            </View>
            {/* {users.map((user)=>(
                <Text key={user.id}>{user.name}</Text>
            ))} */}
            <UserList users={getDisplayedUsers()} onEdit={startEdit} onDelete={deleteUser} />
        </View>
    );

}
