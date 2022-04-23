import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Create } from '../pages/Create';
import { Dash } from '../pages/Dash';
import { Auth } from '../pages/Auth';

export const StackRoutes = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name='Auth' component={Auth} /> */}
            <Stack.Screen name='Dash' component={Dash} />
            <Stack.Screen name='Create' component={Create} />
        </Stack.Navigator>
    )
};