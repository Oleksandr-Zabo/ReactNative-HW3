import { Tabs } from "expo-router";


function TabsLayout(){
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{title: "Home"}}/>
            <Tabs.Screen name="Notes" options={{title: "Notes"}}/>
            <Tabs.Screen name="Users" options={{title: "Users"}}/>
        </Tabs>
    );
}

export default TabsLayout;