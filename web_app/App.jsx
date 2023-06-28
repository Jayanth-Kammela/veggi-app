import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Provider } from 'react-redux'
import Store from './src/Store'
import Stack from './src/Navigation/Stack'

const App = () => {

  return (
    // <React.Fragment>
    <Provider store={Store}>
      <NavigationContainer>
        <Stack/>
      </NavigationContainer>
    </Provider>
    // </React.Fragment>
  )
}

export default App