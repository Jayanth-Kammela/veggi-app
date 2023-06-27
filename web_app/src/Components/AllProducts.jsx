import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GetProduct } from '../Services/Services';
import { useNavigation,useFocusEffect } from '@react-navigation/native';

const AllProducts = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const wholeData = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch,navigation]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(GetProduct());
    }, [dispatch])
  );

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const forSize = windowWidth > windowHeight;

  const cardWidth = forSize ? Math.floor(windowWidth / 2) - 28 : Math.floor(windowWidth / 2) - 18;
  const cardHeight = forSize ? (cardWidth / 560) * 500 : (cardWidth / 240) * 300;

  const forPress = (id) => {
    console.log(id);
  };

  const forItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('product', { Id: item._id })}>
      <View style={[styles.card, { width: cardWidth, height: cardHeight }]}>
        <Image source={{ uri: item.images[0] }} style={styles.image} />
        <Text style={styles.productName}>{item.productName}</Text>
        <Text style={styles.quantity}>{item.quantity}kg</Text>
        <View style={styles.XDiscontainer}>
          <Text style={styles.strike}>RS100 </Text>
          <Text style={styles.discount}> 20% off</Text>
        </View>
        <Text style={styles.price}>₹{item.price}</Text>
        <TouchableOpacity style={styles.button} onPress={() => forPress(item._id)}>
          <Text style={styles.buttonTxt}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={wholeData.data}
        keyExtractor={(item) => item._id}
        renderItem={forItem}
        numColumns={2}
      />
    </View>
  );
}

export default AllProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
    margin: Dimensions.get('window').width > Dimensions.get('window').height ? 12 : 8,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#001C30'
  },
  price: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#001C30'
  },
  quantity: {
    fontSize: 14,
    marginTop: 5,
  },
  button: {
    position: 'absolute',
    bottom: 16,
    right: 14,
    backgroundColor: 'green',
    borderRadius: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  XDiscontainer: {
    flexDirection: 'row',
    alignItems: 'baseline'
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
  }
});
