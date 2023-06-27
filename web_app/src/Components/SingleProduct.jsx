import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { GetProductById } from '../Services/Services';
import { useFocusEffect } from '@react-navigation/native';
import IconXC from 'react-native-vector-icons/Feather';
import IconArrow from 'react-native-vector-icons/MaterialIcons';

const SingleProduct = () => {

    const [scroll, setScroll] = useState(0);
    const [count, setCount] = useState(1)
    // const[xd,setXD]=useState(false)
    const windowWidth = useWindowDimensions().width;

    const route = useRoute()
    const { Id } = route.params;

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state;
    });


    useEffect(() => {
        setScroll(0);
        const { Id } = route.params;
        dispatch(GetProductById(Id));
    }, [windowWidth]);

    useFocusEffect(
        React.useCallback(() => {
            dispatch(GetProductById(Id));
        }, [dispatch, Id])
    );


    const screenWidth = Dimensions.get('window').width;
    const cardWidth = Math.min(screenWidth - 20, 240);
    const cardHeight = (cardWidth / 500) * 300;

    const carddata = data.data;
    // console.log(carddata);

    return (
        <React.Fragment>
            {/* <View>
                <Text>{data.data.productDetails}</Text>
            </View> */}

            <ScrollView style={{ backgroundColor: '#FFFF' }}>
                <View style={styles.main}>

                    <View>
                        {carddata.images ?
                            <View style={styles.container}>
                                {carddata.images.map((imageUrl, index) => (
                                    <Image
                                        key={index}
                                        source={{ uri: imageUrl }}
                                        style={[
                                            styles.image,
                                            { opacity: index === scroll ? 1 : 0 },
                                            { width: windowWidth - 28 },
                                        ]}
                                    />
                                ))}

                                <View style={styles.dotsContainer}>
                                    {carddata.images.map((_, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            style={[
                                                styles.dot,
                                                { backgroundColor: index === scroll ? 'rgba(37,175,57,0.93)' : '#ccc' },
                                            ]}
                                            onPress={() => setScroll(index)}
                                        />
                                    ))}
                                </View>
                            </View>
                            : []}
                    </View>


                    <View style={[styles.card, { width: cardWidth, height: cardHeight }]}>
                        <Text style={styles.productName}>{carddata.productName}</Text>
                        <Text style={styles.quantity}>{carddata.quantity}kg</Text>
                        <View style={styles.XDiscontainer}>
                            <Text style={styles.strike}>RS100 </Text>
                            <Text style={styles.discount}>20% off</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 100 }}>
                                <IconXC name="minus" size={30} color='rgba(37,175,57,0.93)' onPress={() => { count > 1 ? setCount(count - 1) : '' }} />
                                <Text style={{ color: 'black', borderWidth: 1, borderColor: 'black', borderRadius: 10, paddingLeft: 14, paddingRight: 14, paddingBottom: 6, paddingTop: 6, margin: 4 }}>
                                    {count}
                                </Text>
                                <IconXC name="plus" size={30} color='rgba(37,175,57,0.93)' onPress={() => { setCount(count + 1) }} />
                            </View>

                        </View>
                        <Text style={styles.price}>Rs {count * carddata.price}</Text>
                    </View>



                </View>

                <View style={styles.details}>
                    <Text style={styles.nestDetail}>Product Detail</Text>
                    <Text style={styles.productDetails}>{carddata.productDetails}</Text>
                    <View style={{ borderColor: '#9BABB8', borderWidth: 0.4 }}></View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 4 }}>
                    <Text style={styles.review}>Review</Text>
                    <Text>Stars</Text>
                    <IconArrow style={styles.btn} name='keyboard-arrow-down' size={28} color='black' onPress={() => { console.log('review'); }} />
                </View>
                <View style={styles.reviewMain}>
                    <View style={{ borderColor: '#9BABB8', borderWidth: 0.4 }}></View>
                </View>

            </ScrollView>

        </React.Fragment>
    )
}

export default SingleProduct

const styles = StyleSheet.create({
    container: {
        marginTop: 103,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 240,
        width: 'auto',
        position: 'absolute',
        resizeMode: 'cover',
        // borderRadius: 8
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    dot: {
        top: 84,
        width: 14,
        height: 14,
        borderRadius: 10,
        marginHorizontal: 4,
    },
    card: {
        marginTop: 120,
        marginLeft: 16
    },
    XDiscontainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginLeft: 24,
        transform: [{ scale: 1.2 }]
    },
    strike: {
        textDecorationLine: 'line-through',
        color: 'red',
        fontSize: 16,
    },
    discount: {
        color: 'green',
        fontSize: 12,
        marginLeft: 10
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#001C30'
    },
    quantity: {
        fontSize: 14,
        marginBottom: 4,
        marginLeft: 2
    },
    price: {
        fontSize: 14,
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 24,
        color: '#001C30'
    },
    main: {
        backgroundColor: '#FFFF',
        borderBottomWidth: 0.8,
        borderColor: '#9BABB8',
        shadowColor: 'rgba(0,0,0,0.1)',
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    details: {
        marginTop: 14,
        marginLeft: 14,
        marginRight: 14,
    },
    nestDetail: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#001C30',
        marginBottom: 10
    },
    productDetails: {
        fontSize: 16.5,
        marginBottom: 12
    },
    review: {
        fontSize: 18,
        color: '#001C30',
        marginLeft: 16
    },
    reviewMain: {
        marginTop: 8,
        marginLeft: 14,
        marginRight: 14,
    },
    btn: {
        marginRight: 18,
        alignItems: 'baseline',
        paddingTop: 10
    }
}
);