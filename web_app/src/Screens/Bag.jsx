import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from '@rneui/themed';
import IconX from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { GetCart } from '../Services/Services';

const Bag = () => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const cartData = useSelector((state) => {
    return state
  })

  useEffect(() => {
    dispatch(GetCart())
  }, [])

  // console.log(cartData.cart);

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
            <IconX name={'numeric-1-circle-outline'} size={40} color={count === 0 ? '#1B9C85' : '#16213E'} />
            <View style={styles.line} />
            <IconX name={'numeric-2-circle-outline'} size={40} color={count === 1 ? '#1B9C85' : '#16213E'} />
            <View style={styles.line} />
            <IconX name={'numeric-3-circle-outline'} size={40} color={count === 2 ? '#1B9C85' : '#16213E'} />
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
            {cartData.cart.map((xd) => {
            return (
              <View key={xd.productId._id}>
                <Text>{xd.productId.productName}</Text>
              </View>)
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
});