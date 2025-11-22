import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useTheme from "@/hooks/useTheme";

function TabsLayout(){
    const { colors } = useTheme();
    return(
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.textMuted,
            tabBarStyle:
            {
                backgroundColor: colors.bg,
                height: 110,
                paddingTop: 5,
                borderTopColor: colors.border,
                borderTopWidth: 2,
            },
            tabBarLabelStyle:
            {
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 10,
            }
        }}>
            <Tabs.Screen name="index" options={{title: "Home", 
                tabBarIcon: ({size, color})=> <Feather name="home" size={size} color={color} />}}/>
            <Tabs.Screen name="Notes" options={{title: "Notes", tabBarIcon: ({size, color})=> <Foundation name="clipboard-notes" size={size} color={color} />}}/>
            <Tabs.Screen name="Users" options={{title: "Users", tabBarIcon: ({size, color})=> <FontAwesome name="users" size={size} color={color} />}}/>
        </Tabs>
    );
}

export default TabsLayout;