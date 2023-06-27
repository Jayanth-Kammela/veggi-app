import React, { useEffect } from 'react'
import { ScrollView, TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import IconX from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../Components/Search';
import Carousel from '../Components/Carousel';
import Products from '../Components/Products';
import { useNavigation } from '@react-navigation/native';

const Shop = () => {
  const navigation = useNavigation();

  return (
    <React.Fragment>
      <ScrollView>
        <View>

          <View style={styles.Icon}>
            <IconX name="fruit-cherries" size={80} color='#25AF39ED' />
          </View>

          <View style={styles.container}>
            <IconX name="map-marker" size={28} color='#16213E' />
            <View style={styles.textContainer}>
              <Text style={{ fontSize: 18, color: '#001C30' }}>Hyderabad,Telangana</Text>
            </View>
          </View>

          <View style={styles.view}>
            <Search />
          </View>

          <View style={{ height: 168 }}>
            <Carousel />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 14, marginRight: 14 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#001C30' }}>Exclusive Offer</Text>
            <Text style={{ color: '#25AF39ED', fontSize: 16 }} onPress={() => navigation.navigate('All-Products')}>See all</Text>
          </View>

          <View>
            <Products />
          </View>
        </View>
      </ScrollView>
    </React.Fragment>
  )
}

export default Shop

const styles = StyleSheet.create({
  Icon: {
    top: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  textContainer: {
    marginLeft: 10,
    color: '#16213E',
  },
  view: {
    margin: 12,
    marginBottom: 18,
    height: 20
  },
  ExlText: {
    marginLeft: 16,
    display: 'flex'
  }
})



{/* <View style={styles.Icon_container}>
  <Icon name="search-outline" size={20} color="#000" style={styles.searchIcon} />
  <TextInput
    style={styles.input}
    placeholder="Search"
    placeholderTextColor="#888"
  />
</View> */}

// Icon_container: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   // borderWidth: 1,
//   borderColor: '#000',
//   borderRadius: 5,
//   justifyContent: 'center',
//   margin: 24,
//   padding: 6,
//   backgroundColor: '#DDE6ED'
// },
// searchIcon: {
//   marginRight: 8,
// },
// input: {
//   flex: 1,
//   fontSize: 16,
//   padding: 6,
// },