import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Divider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconX from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCart, GetCart } from '../Services/Services';
import { useFocusEffect } from '@react-navigation/native';

const Bag = () => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const cartData = useSelector((state) => {
    return state
  })

  const forCartDelete=(id)=>{
    console.log(id);
    dispatch(DeleteCart(id))
  }

  useFocusEffect(
    React.useCallback(() => {
      dispatch(GetCart())
    }, [dispatch,forCartDelete])
  );

  useEffect(() => {
    dispatch(GetCart())
  }, [dispatch])


  // cartData.cart.map((xd) => {
  //   return (console.log(xd.productId && xd.productId._id && xd.productId===undefined && 'app'))
  // })


  const forNext = () => {
    setCount(count + 1);
  };

  const forPrevious = () => {
    setCount(count - 1);
  };
  return (
    <React.Fragment>
      <View style={styles.container}>

        <View style={{ marginBottom: 20 }}>
          <View style={styles.forStep}>
            <Icon name={'numeric-1-circle-outline'} size={40} color={count === 0 ? '#1B9C85' : '#16213E'} />
            <View style={styles.line} />
            <Icon name={'numeric-2-circle-outline'} size={40} color={count === 1 ? '#1B9C85' : '#16213E'} />
            <View style={styles.line} />
            <Icon name={'numeric-3-circle-outline'} size={40} color={count === 2 ? '#1B9C85' : '#16213E'} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10 }}>
            <Text>Cart</Text>
            <Text>Payment</Text>
            <Text>Summary</Text>
          </View>
        </View>

        <View>
          <Divider width={0.6} color={'#9BABB8'} />
        </View>

        <View>
          {count === 0 && <View>
            {cartData.cart && cartData.cart.length > 0 && cartData.cart.map((xd) => {
              return (
                xd.productId && xd.productId._id ?             
                <View key={xd.productId._id}>
                <View style={styles.mainCard}>
                  <Image source={{ uri: xd.productId.length > 0 && xd.productId.images.length > 0 ? xd.productId.images[1] : xd.productId.images[0] }} style={{ width: 140, height: 100 }} />
                  <View style={styles.alignTxt}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={styles.cartProductName}>{xd.productId.productName}</Text>
                      <IconX name="x" size={24} color='#9BABB8' onPress={()=> forCartDelete(xd._id)}/>
                    </View>
                    <View style={styles.quanCart}>
                      <Text style={styles.cartquantity}>{xd.productId.quantity}KG</Text>
                    </View>
                    <View style={styles.XDiscontainer}>
                      <Text style={styles.cartQty}>Qty:{xd.productquantity}</Text>
                      <Text style={styles.cartPrice}>Rs {xd.productquantity * xd.productId.price}</Text>
                    </View>
                  </View>
                </View>
                <Divider width={0.6} color={'#9BABB8'} />
              </View>:<Text>No data</Text>)
            })}</View>}
          {count === 1 && <Text>Payment</Text>}
          {count === 2 && <Text>Summarys</Text>}
        </View>

        <View style={styles.buttonsContainer}>
          {count > 0 && (
            <Text onPress={forPrevious} style={[styles.button, styles.previousButton]}>
              <Text style={styles.buttonText}>Previous</Text>
            </Text>
          )}

          {count < 2 && (
            <Text onPress={forNext} style={[styles.button, styles.nextButton]}>
              <Text style={styles.buttonText}>Next</Text>
            </Text>
          )}
        </View>
      </View>
    </React.Fragment>
  )
}

export default Bag

const styles = StyleSheet.create({
  container: {
    margin: 16
  },
  forStep: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  step: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  count: {
    borderBottomWidth: 2,
    borderBottomColor: '#00FF00',
  },
  firstStep: {
    marginLeft: 0,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#16213E',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
    marginHorizontal: 10,
  },
  previousButton: {
    backgroundColor: 'red',
  },
  nextButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
  },
  review: {
    fontSize: 18,
    color: '#001C30',
  },
  mainCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
    top: 16
  },
  proImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  alignTxt: {
    flex: 1,
    marginLeft: 10,
  },
  cartProductName: {
    fontWeight: '600',
    fontSize: 16,
    color: '#001C30'
  },
  quanCart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  cartquantity: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
  },
  cartPrice: {
    fontSize: 16,
    color: '#001C30',
    marginLeft: 120
  },
  cartQty: {
    fontWeight: '500',
    fontSize: 16,
    color: '#001C30',
  },
  XDiscontainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
});