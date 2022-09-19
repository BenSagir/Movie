/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, FlatList, Dimensions, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
    const [data, setData] = useState([]);

    const getDataFromAPI = () => {
        let req = 'https://api.themoviedb.org/3/movie/popular?api_key=247082c0fd9674d69377c506d2b38e04&amp;language=en-US&amp;page=1';
        return fetch(req)
            .then(res => res.json())
            .then(json => setData(json.results))
            .catch(err => {
                console.log(err);
                Alert.alert('API Call failed!', '', [
                    { text: 'OK', style: 'destructive' },
                ]);
            });
    };

    const renderItem = (item: any) => {     //render function of each score object in a flatlist
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
                <View style={styles.item}>
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </TouchableOpacity >
        );
    };

    return (
        <View style={styles.main}>
            {data.length > 0 ?
                <FlatList
                    data={data}
                    renderItem={({ item }) => renderItem(item)}
                /> :
                <TouchableOpacity onPress={() => getDataFromAPI()} style={styles.button}>
                    <Text style={styles.buttonText}>Movie List</Text>
                </TouchableOpacity>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F4F1DE',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#000',
        fontSize: 18,
        padding: 5,
        margin: 5,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    img: {
        width: 300,
        height: 500,
    },
    item: {
        alignSelf: 'center',
        padding: 15,
        marginVertical: 5,
        borderRadius: 11,
        backgroundColor: '#F2CC8F',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 90 / 100,
        shadowColor: '#000',
        shadowOffset: {
            width: 9,
            height: 11,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 4,
        flexDirection: 'row',
    },
    button: {
        padding: 5,
        borderRadius: 11,
        backgroundColor: '#F2CC8F',
        margin: 10,
        marginHorizontal: 25,
        borderColor: '#4c3c5e',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width * 50 / 100,
        height: Dimensions.get('screen').width * 50 / 100,
    },
    buttonText: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24,
    },
});
export default HomeScreen;
