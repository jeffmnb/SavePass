import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAllPass = async () => {

    let allPass = await AsyncStorage.getItem('savepass:pass');

    const result = allPass ? JSON.parse(allPass) : [];

    return result;
};


export const savePass = async (item) => {

    let hasPass = await getAllPass();

    hasPass.push(item);

    await AsyncStorage.setItem('savepass:pass', JSON.stringify(hasPass));

    console.log('Salvo com sucesso!');

};

export const deletePass = async (itemDelele) => {

    let passStoraged = await getAllPass();

    const result = passStoraged.filter(item => {
        return item.id != itemDelele.id;
    });

    console.log(result);

    AsyncStorage.setItem('savepass:pass', JSON.stringify(result));

};
