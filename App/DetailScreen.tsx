/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { addFav, removeFav } from './redux/actions';

interface Data {
    title: string,
    overview: string,
    vote_average: number,
    poster_path: string
}

function DetailScreen({ route, navigation }) {
    const { fav } = useSelector((state: any) => state.favReducer);
    const dispatch = useDispatch();

    const [data, setData] = useState<Data>({
        title: '', overview: '', vote_average: 0, poster_path: '',
    });
    const [img, setImg] = useState<string>('https://image.tmdb.org/t/p/w500/');
    const [like, setLike] = useState<boolean>(false);

    const getImgURL = (path: string) => setImg(`https://image.tmdb.org/t/p/w500${path}`);

    const editFav = (movie: string) => {
        var inst = fav;
        setLike(!like);
        if (inst.includes(movie)) {
            dispatch(removeFav(movie) as any);
        }
        else {
            dispatch(addFav(movie) as any);
        }
    };

    useEffect(() => {
        let screenData: Data = route.params.item;
        if (fav.includes(screenData.title)) { setLike(true); }

        setData(screenData);
        getImgURL(screenData.poster_path);
    }, []);

    useLayoutEffect(() => {
        let title = '';
        if (route.params.item) {
            title = route.params.item.title;
        }
        else { return; }
        navigation.setOptions({
            title: title,
        });
    }, []);

    return (
        <ScrollView style={styles.main}>
            <TouchableOpacity onPress={() => editFav(data.title)}>
                <View style={styles.like}>
                    <Icon name={like ? 'heart' : 'heart-outline'} color={'#3D405B'} size={40} />
                </View>
            </TouchableOpacity>
            <View style={styles.container}>
                <Image source={{ uri: img }} style={styles.img} />
                <Text style={styles.text}>{data.vote_average}</Text>
                <Text style={styles.overveiw}>{data.overview}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#F4F1DE',
        padding: 10,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#3D405B',
        fontSize: 18,
        padding: 5,
        margin: 5,
    },
    overveiw: {
        padding: 5,
        margin: 5,
        color: '#3D405B',
    },
    img: {
        width: 300,
        height: 500,
        borderRadius: 11,
    },
    like: {
        margin: 10,
        alignSelf: 'center',
        alignItems: 'center',
    },
});
export default DetailScreen;
