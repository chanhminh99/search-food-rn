import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term, onSearchTermChange, onSearchTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        autoCapitalize='none'
        autoCompleteType='off'
        style={styles.textInputStyle}
        placeholder='Search'
        value={term}
        onChangeText={onSearchTermChange}
        onEndEditing={onSearchTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  textInputStyle: {
    flex: 1,
    fontSize: 18
  }
})

export default SearchBar
