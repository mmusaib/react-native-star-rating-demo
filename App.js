import React from "react";
import { View,Text,StyleSheet, Image, TouchableOpacity } from "react-native";
import { Rating, RatingInput } from 'react-native-stock-star-rating';


const App = () => {
  const [rating, setRating] = React.useState(0);

  return(
    <View style={styles.container}>
      <Image 
        source={{uri: "https://i0.wp.com/batman-news.com/wp-content/uploads/2019/08/Joker-Official-Images-Final-Poster-1600-Featured-01.jpg?fit=1600%2C900&quality=80&strip=info&ssl=1"}}
        resizeMode={'cover'}
        style={styles.poster}
      />
      <View style={{paddingHorizontal: 20}}>
        <View style={{flexDirection:'row', alignItems: 'center', marginTop: 6}}>
          <Text style={[styles.heading, {color: 'white'}]}>Joker</Text>
          <Text style={[styles.subheading, {marginLeft: 8}]}>(2019)</Text>
        </View>

        <View style={styles.row}>
          <Rating maxStars={10} size={13} stars={8} />
          <Text style={[styles.small, {marginLeft: 5}]}>8/10</Text>
        </View>
        <Text style={styles.subheading}>2hr 2 min</Text>

        <View>
          <View style={{marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Description</Text>
            <View style={styles.underline}></View>
          </View>
          <View>
            <View style={[styles.row, {marginTop: 8}]}>
              <Text style={[styles.subheading,{color: 'white'}]}>Initial Release</Text>
              <Text style={[styles.subheading, {marginLeft: 5}]}>24 Oct 2019</Text>
            </View>

            <View style={[styles.row, {marginTop: 2}]}>
              <Text style={[styles.subheading,{color: 'white'}]}>Producers</Text>
              <Text style={[styles.subheading, {marginLeft: 5}]}>John Doe, John Snow</Text>
            </View>

            <View style={[styles.row, {marginTop: 2}]}>
              <Text style={[styles.subheading,{color: 'white'}]}>Writers</Text>
              <Text style={[styles.subheading, {marginLeft: 5}]}>John Doe, John Snow</Text>
            </View>
          </View>

          <View style={{alignItems: 'center', marginTop: 30}}>
            <View style={{marginTop: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Give Rating</Text>
              <View style={styles.underline}></View>
            </View>
            <RatingInput 
              maxStars={10}
              rating={rating}
              setRating={setRating}
              size={35}
            />
          </View>

          <View style={{alignItems: 'flex-end'}}>
            <TouchableOpacity style={styles.submit} onPress={() => alert(`You have rated ${rating} stars to the movie`)}>
              <Text style={styles.submitText}>SUBMIT</Text>
            </TouchableOpacity>
         </View>
        </View>
      </View>
    </View>
  )
}


export default App;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#111111'
    },
    row:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    poster:{
      width: '100%',
      height: 220,
    },
    heading: {
      fontWeight: 'bold',
      fontSize: 30,
      color: '#FFFFFF'
    },
    subheading:{
      color: '#bbbbbb',
      fontSize: 13
    },
    small:{
      fontSize: 11,
      color: '#aaaaaa'
    },
    underline: {
      width: 50,
      height: 3,
      backgroundColor: 'yellow',
      marginTop: 2
    },
    submit: {
      backgroundColor: 'yellow',
      paddingHorizontal: 15,
      paddingVertical: 8,
      borderRadius: 8,
      marginTop: 15,
    },
    submitText: {
      fontWeight: 'bold',
      fontSize: 17,
      color: 'black'
    }
})