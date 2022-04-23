import React from 'react';

import { Routes } from './src/routes';

import AppLoading from 'expo-app-loading';

import { Poppins_700Bold, Poppins_400Regular, Poppins_500Medium, useFonts } from '@expo-google-fonts/poppins';


export default function App() {

  const [fontValid] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontValid) return <AppLoading />

  return (
    <Routes />
  );
}
