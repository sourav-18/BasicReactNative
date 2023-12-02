import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import React from 'react'

const PokemonCard = ({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses
}) => {

    const getTypeStyle=(type)=>{
        switch(type.toLowerCase()){
            case "fire":
                return {emoji:'🔥',borderColor:"red"}
            case "water":
                return {emoji:'💦',borderColor:"#FF5733"}
            case "grass":
                return {emoji:'🌾',borderColor:"#66CC66"}
            case "electric":
                return {emoji:'⚡',borderColor:"#FFD700"}
                default:
                return {emoji:'❓',borderColor:"#A0A0A0"}
                

        }
    }
    const {emoji,borderColor}=getTypeStyle(type)
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️ {hp}</Text>
      </View>
      <Image style={styles.image} source={image} accessibilityLabel={`${name} pokemon`} resizeMode='contain'/>
      <View style={[styles.typeCard,{borderColor}]}>
        <Text style={[styles.typeText]}>{emoji} {type} </Text>
      </View>

      <View>
        <Text style={styles.moves}>Moves: {moves.join(", ")}</Text>
      </View>
      
      <View>
        <Text style={styles.moves}>Weakness: {weaknesses.join(", ")}</Text>
      </View>
    </View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
    card:{
        backgroundColor:"white",
        borderRadius:16,
        borderWidth:2,
        padding:16,
        margin:16,
        elevation:5,
        
    },
    image:{
        marginVertical:10,
        width:"100%",
        height:200,
    },
    textContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    name:{
        fontSize:30,
        fontWeight:"bold",
    },
    hp:{
        fontSize:22
    },
    typeCard:{
        alignSelf:"center",
        borderWidth:3,
        borderRadius:17,
        padding:5,
        marginBottom:6
    },
    typeText:{
        fontSize:25,
        fontWeight:"bold"
        
    },
    moves:{
        marginVertical:5,
        fontSize:23,
        fontWeight:"bold",
    }
})