import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {userResult} from "../Contexts/ResultContext";

export default function ResultScreen({navigation}) {
    const {result, setResult, clearResultData} = userResult();


    const navigateScann =() =>{
        clearResultData;
        navigation.push("Scann")
    }

    return (
        <View style={styles.content}>
            <View style={styles.titleDiv}>
                <Text style={styles.title}>Votres Résultat : </Text>
            </View>

            <View style={styles.resultDiv}>
                <View style={styles.typeDiv}>
                    <Text style={styles.label}>Type :</Text>
                    <Text style={styles.type}>{result.type}</Text>
                </View>
                <View style={styles.dataDiv}>
                    <Text style={styles.label}>Data :</Text>
                    <Text style={styles.data}>{result.data}</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigateScann()}>
                <View style={styles.buttonDiv}>
                    <Text style={styles.button}>Scanner de nouveau</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        margin: 40,
        height: "100%",
        alignItems: "center",
    },
    titleDiv: {
        fontSize: 32,
        margin: 40,
        width: "auto",

    },
    title: {
        fontSize: 32,
    },
    resultDiv: {
        alignItems: "center",
        justifyContent: "center",
        height: "50%",
        backgroundColor: "white",
        borderRadius: 80,
    },
    typeDiv: {
        borderStyle: "solid",
        backgroundColor: "blue",
        width: 180,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: 40,
        borderRadius: 40,
    },
    type: {
        fontSize: 40,
        color: "white",
    },
    dataDiv: {
        borderStyle: "solid",
        backgroundColor: "blue",
        width: "100%",
        flexWrap: "nowrap",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: 40,
        borderRadius: 40,
        padding: 6,
    },
    data: {
        fontSize: 30,
        color: "white"
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
    },
    label : {
        color : "white"
    }

})