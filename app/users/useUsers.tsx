import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { validateAge, validateEmail } from "../../utils/validators";

type User = { id: number; name: string; email: string; age: number };

export const useUsers = () => {
  // start with empty list; persisted users are loaded from AsyncStorage on mount
  const [users, setUsers] = useState<User[]>([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterAdults, setFilterAdults] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'age' | 'email' | null>(null);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);

  const addUser = () => {
    if (name.trim() === "" || email.trim() === "" || age.trim() === "") return;
    if (!validateEmail(email)) {
      alert("Будь ласка, введіть дійсну електронну адресу.");
      return;
    }
    if (!validateAge(Number(age))) {
      alert("Будь ласка, введіть дійсний вік.");
      return;
    }
    if (editingUserId) {
      setUsers((prev) =>
        prev.map((u) => (u.id === editingUserId ? { ...u, name: name.trim(), email: email.trim(), age: Number(age) } : u))
      );
      setEditingUserId(null);
    } else {
      const newUser: User = { id: Date.now(), name: name.trim(), email: email.trim(), age: Number(age) };
      setUsers((prev) => [...prev, newUser]);
    }
    setName("");
    setEmail("");
    setAge("");
  };

  // load users from storage
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem('users');
        if (raw) {
          const parsed = JSON.parse(raw) as User[];
          setUsers(parsed);
        }
      } catch (e) {
        // ignore
      }
    })();
  }, []);

  // save users on change
  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem('users', JSON.stringify(users));
      } catch (e) {
        // ignore
      }
    })();
  }, [users]);

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const startEdit = (user: User) => {
    setEditingUserId(user.id);
    setName(user.name);
    setEmail(user.email);
    setAge(String(user.age));
    setShowForm(true);
  };

  const cancelEdit = () => {
    setEditingUserId(null);
    setName("");
    setEmail("");
    setAge("");
  };

  const getDisplayedUsers = () => {
    let list = [...users];
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter((u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
    }
    if (filterAdults) {
      list = list.filter((u) => Number(u.age) > 18);
    }
    if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "age") list.sort((a, b) => Number(a.age) - Number(b.age));
    if (sortBy === "email") list.sort((a, b) => a.email.localeCompare(b.email));
    return list;
  };

  return {
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
    setEditingUserId,
    addUser,
    deleteUser,
    startEdit,
    cancelEdit,
    getDisplayedUsers,
  };
};

export default useUsers;
