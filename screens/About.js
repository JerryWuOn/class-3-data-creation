import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { bookStore } from '../data/books';
import { CheckBox,Button } from '@ui-kitten/components';
import { useState } from 'react';


export default function About({navigation}) {
    const [data, setData] = useState();
    const [checked,setChecked] = useState(false);

    const addingData = () => {
        console.log("Started")
        setData(bookStore);
    }
    return (
        <View style={styles.container}>
            <Text>About Jerry</Text>
            <StatusBar style="auto" />
            {checked ? (
            <Text style={styles.blueText}>Yes she is!</Text>
            ) : (
            <Text>Is Monika the best coding teacher?</Text>
            )}
            <CheckBox
                checked={checked}
                onChange={nextChecked => setChecked(nextChecked)}
                >
                {`Check me: Click me!`}
            </CheckBox>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.button}
                >
                <Text>Go Back</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
            <Button title="Show data" onPress={() => addingData()}>
                <Text>Show Data</Text>
            </Button>
            {
            data && data.books.map((b, index) => {
                if(b.category.toLowerCase() == 'java'){
                    return(
                        <View key={index}>
                            <Text>{b.title}</Text>
                            {
                                b.authors && b.authors.map((a, ind) => {
                                    return(
                                        <View key={ind}>
                                            <Text style={styles.popData}>{a}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    )
                }
            })
        }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        gap:30,
        backgroundColor: "transparent",
    },
    text: {
        marginHorizontal: 8,
    },
    button: {
        backgroundColor:"red",
        width:100,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
    },
    blueText: {
        color: 'blue',
    },
    popData:{
        alignItems:'center',
        justifyContent:'center',
    }
});
