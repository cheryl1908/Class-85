import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "../navigations/DrawerNavigator";

export default function DashboardScreen(){
    return(
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
    )
}