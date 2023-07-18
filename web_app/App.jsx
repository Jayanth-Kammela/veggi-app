import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Provider } from 'react-redux'
import Store from './src/Store'
import Stack from './src/Navigation/Stack'
import Radio from './src/Components/Radio'

const App = () => {

  return (
    <React.Fragment>
      <Provider store={Store}>
        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </Provider>
      {/* <Radio/> */}
    </React.Fragment>
  )
}

export default App


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native';
// import Icon from 'react-native-vector-icons/Entypo';

// const Rating = () => {
//   const [ratingData, setRatingData] = useState({
//     rating: 1,
//     comment: '',
//   });

//   const handleRatingAndComment = (value, comment) => {
//     setRatingData({ rating: value, comment: comment });
//   };

//   const handlePost = () => {
//     console.log(ratingData);
//   };

//   return (
//     <View style={{ alignItems: 'center' }}>
//       <Text style={{ fontSize: 24 }}>Rating: {ratingData.rating}</Text>
//       <View style={{ flexDirection: 'row', marginTop: 10 }}>
//         {[1, 2, 3, 4, 5].map((value) => (
//           <TouchableOpacity key={value} onPress={() => handleRatingAndComment(value, ratingData.comment)}>
//             <Icon
//               name={ratingData.rating >= value ? 'star' : 'star-outlined'}
//               size={30}
//               color={ratingData.rating >= value ? '#ffc107' : '#ccc'}
//               style={{ marginRight: 5 }}
//             />
//           </TouchableOpacity>
//         ))}
//       </View>
//       <TextInput
//         placeholder="Enter your comment"
//         onChangeText={(text) => setRatingData({ ...ratingData, comment: text })}
//         value={ratingData.comment}
//         style={{ marginTop: 20, padding: 10, width: 200, borderColor: 'gray', borderWidth: 1 }}
//       />
//       <Button title="Post" onPress={handlePost} />
//     </View>
//   );
// };

// export default Rating;

