import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { ListItem, Divider, CheckBox, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconX from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteCart, GetCart } from '../Services/Services';
import { useFocusEffect } from '@react-navigation/native';

const Bag = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [paymentType, setPaymentType] = useState('');
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();

  const cartData = useSelector((state) => {
    return state;
  });

  const forCartDelete = (id) => {
    dispatch(DeleteCart(id));
    dispatch(GetCart());
  };

  const totalCart = useMemo(() => {
    const prices = cartData.cart.map((xd) => {
      return xd.productId.price * xd.productquantity;
    });

    console.log(cartData.cart);

    const totalVal = prices.reduce((x, y) => {
      return x + y;
    }, 0);
    setTotal(totalVal);
    return totalVal;
  },[cartData])

  const forChange = (value) => {
    setPaymentType(value);
  };

  const forSubmit = () => {
    cartData.cart.forEach(val => {
      const { productId, productquantity } = val;
      console.log({ "products": productId._id, "productPrice": productId.price, "productquantity": productquantity,paymentType:paymentType });
    })
  };

  useEffect(() => {
    dispatch(GetCart())
  }, [total]);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(GetCart());
    }, [dispatch,total])
  );



  const forNext = () => {
    setCount(count + 1);
  };

  const forDis = count === 1 && paymentType === '';

  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.container}>
          {count === 0 || count == 1 ? <View style={{ marginBottom: 20 }}>
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
          </View> : <Text>Ordered</Text>}

          {count === 0 || count == 1 ? <View>
            <Divider width={0.6} color={'#9BABB8'} />
          </View> : ''}

          <View>
            {count === 0 && (
              <View>
                {cartData.cart && cartData.cart.length > 0 ? (
                  cartData.cart.map((xd) => (
                    <View key={xd.productId._id}>
                      <View style={styles.mainCard}>

                        {xd.productId && xd.productId.images && xd.productId.images.length > 0 ? (
                          <Image
                            source={{ uri: xd.productId.images[1] || xd.productId.images[0] }}
                            style={{ width: 140, height: 100 }}
                          />
                        ) : null}

                        {/* <Image
                          source={{
                            uri:
                              xd.productId && xd.productId.images && xd.productId.images.length > 0
                                ? xd.productId.images[1]
                                : xd.productId && xd.productId.images && xd.productId.images[0]
                          }}
                          style={{ width: 140, height: 100 }}
                        /> */}

                        <View style={styles.alignTxt}>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.cartProductName}>{xd.productId && xd.productId.productName}</Text>
                            <IconX name="x" size={24} color="#9BABB8" onPress={() => forCartDelete(xd._id)} />
                          </View>
                          <View style={styles.quanCart}>
                            <Text style={styles.cartquantity}>{xd.productId && xd.productId.quantity}KG</Text>
                          </View>
                          <View style={styles.XDiscontainer}>
                            <Text style={styles.cartQty}>Qty: {xd.productquantity}</Text>
                            <Text style={styles.cartPrice}>
                              Rs {xd.productquantity * (xd.productId && xd.productId.price)}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <Divider width={0.6} color={'#9BABB8'} />
                    </View>
                  ))
                ) : (
                  <Text>No data</Text>
                )}
              </View>
            )}

            {count === 1 && (
              <View style={{ marginTop: 20, marginBottom: 16 }}>
                <ListItem.Accordion
                  content={
                    <ListItem.Content>
                      <ListItem.Title style={styles.pay}>Select Payment Method</ListItem.Title>
                    </ListItem.Content>
                  }
                  isExpanded={expanded} onPress={() => { setExpanded(!expanded); }}>
                  <ListItem>
                    <View>
                      <CheckBox
                        title="Google"
                        checked={paymentType === 'Google'}
                        onPress={() => forChange('Google')}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                      />
                      <CheckBox
                        title="Net Banking"
                        checked={paymentType === 'Net Banking'}
                        onPress={() => forChange('Net Banking')}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                      />
                    </View>
                  </ListItem>

                </ListItem.Accordion>
                <Divider style={{ marginTop: 10 }} width={4} color={'#9BABB8'} />

                <View style={{ marginTop: 28, backgroundColor: '#FFFF', padding: 14, borderRadius: 8 }}>
                  <Text style={{ fontSize: 20, color: '#001C30', fontWeight: '700' }}>Price Details ({cartData.cart.length} items)</Text>

                  <View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: 20 }}>
                    <Text style={{ fontSize: 20, color: '#9BABB8' }}>Total Products Price</Text><Text style={{ marginLeft: 60, fontSize: 20, color: '#9BABB8' }}>+ Rs{total}</Text>
                  </View>

                  <View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: 20 }}>
                    <Text style={{ fontSize: 20, color: '#1B9C85' }}>Total Discount</Text><Text style={{ marginLeft: 112, fontSize: 20, color: '#1B9C85' }}>+ Rs 0</Text>
                  </View>

                  <Divider style={{ marginTop: 10 }} width={0.6} color={'#9BABB8'} />

                  <View style={{ flexDirection: 'row', alignItems: 'baseline', marginTop: 20 }}>
                    <Text style={{ fontSize: 20, color: '#001C30', fontWeight: '700' }}>Order Total</Text><Text style={{ marginLeft: 142, fontSize: 20, color: '#9BABB8' }}>Rs {total}</Text>
                  </View>

                </View>
              </View>
            )}

          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {/* {count ===2 && (
              <Text style={{ backgroundColor: 'rgba(111, 202, 186, 1)' }}>order</Text>
            )} */}

            {(count === 0 || count === 1) && cartData.cart.length > 0 && (
              <View>
                <Button onPress={count === 1 ? (() => { forNext(), forSubmit() }) : forNext} title={`PROCEED TO BUY    Rs${total}`} buttonStyle={{
                  backgroundColor: 'rgba(111, 202, 186, 1)',
                  borderRadius: 5,
                }}
                  titleStyle={{ fontSize: 23 }}
                  containerStyle={{
                    height: 50,
                    width: 320,
                  }}
                  disabled={forDis} /></View>
            )}
          </View>
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

export default Bag;

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
    top: 360
  },
  button: {
    paddingVertical: 14,
    // paddingHorizontal: 160,
    backgroundColor: 'blue',
    borderRadius: 10,
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
  forRadio: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedValueText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  pay: {
    fontSize: 18,
    color: '#001C30',
    marginLeft: 16
  }
});


{/* <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
<Button onPress={forNext} title={`PROCEED TO BUY    Rs${total}`} buttonStyle={{
  backgroundColor: 'rgba(111, 202, 186, 1)',
  borderRadius: 5,
}}
  titleStyle={{ fontSize: 23 }}
  containerStyle={{
    height: 50,
    width: 320,
  }} /></View> */}