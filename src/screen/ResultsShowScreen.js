import React, {useState, useEffect} from 'react'
import yelp from '../api/yelp'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'

const ResultsShowScreen = (props) => {
  const [result, setResult] = useState(null)
  const id = props.navigation.getParam('id')

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={styles.imageStyle} source={{uri: item}} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 300,
    height: 200
  }
})

export default ResultsShowScreen
