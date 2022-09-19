/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

function Cart() {
    const { fav } = useSelector((state: any) => state.favReducer);

    return (
        <View style={styles.main}>
            <Icon name={'cart-outline'} color={'#F4F1DE'} size={35} style={styles.icon} />
            <View style={styles.circle}>
                <Text style={styles.text}>{fav.length}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
    },
    circle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff99',
        width: 30,
        height: 30,
        borderRadius: 100,
        padding: 5,
        marginTop: -65, margin: 30,
        marginLeft: 0,
    },
    text: {
        color: '#A72608',
        fontSize: 16,
        margin: -2,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    icon: {
        padding: 15,
    },
});
export default Cart;
