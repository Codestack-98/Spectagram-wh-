import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feeds from '../screens/Feed';
import CreatePost from '../screens/CreatePost';
// import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const createBottomTabNavigator = () => {
    return (
        <Tab.Nabigator
           screenOptions = {({ route }) => ({
               tabBarIcon : ({ focused , color, size }) => {
                   let iconName;
                   if (route.name === 'Feed') {
                       iconName = focused 
                          ? 'book'
                          : 'book-outline';
                   } else if (route.name === 'createPost') {
                       iconName = focused ? 'create' : 'create-outline';
                   }
                   return <Ionicon names={iconName} size={size} color={color} />;
                },
           })}
           tabBarOptions={{
               activeTintColor : 'tomato',
               inactiveTinColor : 'gray',
           }}
        >
            <Tab.Screen name="Feed" component={Food} />
            <Tab.Screen name="CreatePost" component={CreatePost} />
        </Tab.Nabigator>
    );
}

export default createBottomTabNavigator;