import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-web";

export default function NodesScreen(){
    const [nodes, setNodes] = useState([
        {id: "aaa", text: "Вивчти перший модуль", completed: false},
        {id: "aab", text: "Вивчти другий модуль", completed: false},
        {id: "aac", text: "Зробити домашку", completed: false},
    ]);
    const [text, setText] = useState("");

    const addNode = () =>{
        if (text.trim() === "") return;
        setNodes((prevNodes)=> [...prevNodes, {id: Date.now().toString(), text: text, completed: false}]);
        setText("");
        
    }

    const deleteNode = (id) => {
        setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
    }

    return (
        <View style={styles.container}>
            
            <View style = {styles.form}>
                <Text style={styles.title}>Додати замітку:</Text>
                <TextInput style={styles.input}
                value={text}
                placeholder="Введіть текст"
                onChangeText={setText}
                multiline = {true}
                numberOfLines={2}
                
                />
                <Button title="Додати замітку" style={styles.button}
                onPress={addNode}/>
                </View>
            
            <Text style={styles.title}> Список наших заміток </Text>
            {/* {nodes.map((node)=>(
                <Text key={node.id}>{node.text}</Text>
            ))} */}
            <FlatList style={styles.list}
            data = {nodes}
            keyExtractor={node => node.id}
            renderItem = {({item}) => 
                <View style={styles.itemContainer}><Text style={styles.item}>{item.text}</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{deleteNode(item.id)}}>
                <Text style={styles.deleteText}>X</Text>
            </TouchableOpacity>
            </View>
            
        }
            >
            </FlatList>
        </View>
    );

}

const styles = StyleSheet.create(
    {
    container:{
        backgroundColor: "azure",
        flex: 1,
    },
    title:{
        fontSize: 20,
        fontStyle: "italic",
        textAlign: "center",
        color: "green"
    },
    list:{
        backgroundColor: "azure",
    },
    item:{
        backgroundColor: "lightgray",
        color: "black",
        padding: 5,
        borderColor: "gray",
        borderBottomColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        fontSize: 18,
        width: "100%"

    },
    // styles for Button dont work properly
    button:{ 
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
    form:{
        //dispaly: "flex" - default for View
        //flexDirection: "column" - default for View
        gap: 10,
    },
    input:{
        borderColor: "green",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderWidth: 1,
        borderRadius: 10
    },
    deleteText:{
        color: "red",
        fontWeight: "bold", 
        fontSize: 18,
        textAlign: "center"
    },
    itemContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
        paddingHorizontal: 5,
    }
}
)
;