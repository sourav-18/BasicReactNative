import { SafeAreaView, StyleSheet, Text, View,StatusBar, ScrollView, FlatList } from 'react-native'
import React from 'react'
import Data from "../Data.json"
export default function List() {
  return (
    <SafeAreaView style={styles.safe}>
        <Text style={styles.title}>Wellcome To List World</Text>
        {/* <ScrollView style={styles.container}> */}

        {/* {Data.map(data=>{
            return(
                <View key={data.id} style={styles.card} >
                    <View style={styles.boxcard}><Text style={styles.text}>{data.name}</Text><Text style={styles.text}>{data.id}</Text></View>
                    <Text style={styles.text}>{data.type}</Text>
                </View>
            )
        })} */}
        
        <FlatList style={styles.container1}
        data={Data}
        renderItem={({item})=>{
            // console.log(item.id)
            return(
                <View key={item.id} style={styles.card} >
                    <View style={styles.boxcard}><Text style={styles.text}>{item.name}</Text><Text style={styles.text}>{item.id}</Text></View>
                    <Text style={styles.text}>{item.type}</Text>
                </View>
            )
        }}
        horizontal
        keyExtractor={(item)=>item.id.toString()}
        ItemSeparatorComponent={<View style={{width:16}}></View>} //here you can see no nedd to add margin between two element(that work done by itemseparatorcomponent)
        ListEmptyComponent={<Text>no data found</Text>}
        />
        <FlatList style={styles.container2}
        data={Data}
        renderItem={({item})=>{
            // console.log(item.id)
            return(
                <View key={item.id} style={styles.card} >
                    <View style={styles.boxcard}><Text style={styles.text}>{item.name}</Text><Text style={styles.text}>{item.id}</Text></View>
                    <Text style={styles.text}>{item.type}</Text>
                </View>
            )
        }}
        keyExtractor={(item)=>item.id.toString()}
        ItemSeparatorComponent={<View style={{height:16}}></View>} //here you can see no nedd to add margin between two element(that work done by itemseparatorcomponent)
        ListEmptyComponent={<Text>no data found</Text>}
        ListFooterComponent={<Text>Footer</Text>}
        ListHeaderComponent={<Text>Header</Text>}
        />
        
        {/* </ScrollView> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safe:{
        // flex:1,
        paddingTop:StatusBar.currentHeight,
        
    },
    container1:{
        // backgroundColor:"red"
        // flex:1,
        // backgroundColor:"red",
        // backgroundColor:"gray",
        marginHorizontal:10,
        // alignItems:'flex-start',
    },
    container2:{
        // backgroundColor:"blue"
        marginHorizontal:20,
    },
    card:{
        // alignSelf:"flex-start",
        // alignContent:"flex-end",
        // marginHorizontal:10,
        backgroundColor:"#232F34",
        marginVertical:10,
        padding:15,
        borderWidth:2,
        borderColor:"blue",
        borderRadius:10,
        elevation:10,
        shadowColor:"white",
    },
    boxcard:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between',
    },
    text:{
        fontSize:18,
        fontWeight:"bold",
    },
    title:{
        marginTop:10,
        alignSelf:"center",
        fontSize:24,
        fontWeight:"bold",
        fontStyle:"italic"
    }
})