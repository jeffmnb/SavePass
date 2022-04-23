import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Auth } from '../pages/Auth';

export const AuthRoute = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Auth' component={Auth} />
        </Stack.Navigator>
    )
};