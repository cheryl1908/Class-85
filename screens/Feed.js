import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {RFValue} from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native-gesture-handler';
import StoryCard from './StoryCard';

 
var customFonts = {"Bubblegum-Sans":require("../assets/fonts/BubblegumSans-Regular.ttf")}
var stories=require("./tempStories.json")

export default class Feed extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fontLoaded:false
        }
    }
    componentDidMount(){
        this.loadFontsAsync();
    }
    async loadFontsAsync(){
        await Font.loadAsync(customFonts)
        this.setState({
            fontLoaded:true
        })
    }
    renderItem=({item:story})=>{
        return <StoryCard story={story}/> 
     }
    render(){
        if(!this.state.fontLoaded){
            return(
                <AppLoading/>
            )
        }else{
            return(
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.appTitle}>
                        <View style={styles.appIcon}>
                            <Image source={require("../assets/logo.png")} style={styles.iconImage}/>
                        </View>
                        <View style={styles.appTitleTextContainer}>
                            <Text style={styles.appTitleText}> Story Telling App</Text>
                        </View>
                    </View>
                    <View style={styles.cardContainer}>
                        <FlatList renderItem={this.renderItem} keyExtractor={(item,index)=>index.toString()} data={stories}></FlatList>
                    </View>
                </View>
            )
            }
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.3,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    cardContainer: {
      flex: 0.93,
      marginBottom:70,
    }
  });
