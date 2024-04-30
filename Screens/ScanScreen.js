import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {userResult} from "../Contexts/ResultContext";
import { BarCodeScanner } from 'expo-barcode-scanner';


import { Camera } from 'expo-camera';
import {useEffect, useState} from "react";
export default function ScanScreen({navigation}){

    const {result, setResult} = userResult();

    const [hasPermission, setHasPermission] = useState(false);
    const [scanned, setScanned] = useState(false);


    useEffect(() => {
            const getBarCodeScannerPermission = async () => {
                const {status} = await BarCodeScanner.requestPermissionsAsync();
                setHasPermission(status === "granted");
            }
            getBarCodeScannerPermission()
        },
        []);

    const handleBarCodeScanned = ({ type, data }) => {
        console.log("Bar code scanned")
        setScanned(true);
        const result = {
            type : type,
            data : data,
        }
        setResult(result);
        navigation.navigate("Result")
    };

    if(!hasPermission){
        return <View></View>
    }

    return (
        <View style={styles.content}>
            <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={StyleSheet.absoluteFillObject}>

            </BarCodeScanner>

        </View>
    )


}

const styles = StyleSheet.create({
    content : {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    buttonDiv : {
        backgroundColor : "pink",
        borderRadius : 8,
        width : 180,
        height : 40,
        justifyContent : "center",
        alignItems : "center",
        margin : 80,
    },
    button : {
        color : "white",
        fontSize : 16,
    }
})