import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View, TouchableOpacity } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import { useState } from 'react';

export default function Home({navigation}) {
    const [number,setNumber] = useState(1);
    const [counter,setCounter] = useState(0);
    const check = () => {
        if(number == 1){
          console.log("ONE");
        }else if(number == 2){
          console.log("TWO");
        }else if(number == 3){
          navigation.push('About')
        }
        setNumber(number + 1);
      }

    return (
        <View style={styles.container}>
          <Layout
                style={styles.container}
                level='1'
                >
                <Button onPress={() => setCounter(counter + 1)}>
                    Increment
                </Button>
                <Text style={styles.text}>
                    {`Pressed ${counter} times`}
                </Text>
                <Button onPress={() => setCounter(counter - 1)}>
                    Decrement
                </Button>
            </Layout>

            <TouchableOpacity onPress={() => check()}
            style={number == 1 ? styles.btnBlue: 
            number == 2 ? styles.btnRed: styles.btnGreen}>
                <Text>Go to About Page</Text>
            </TouchableOpacity>
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
    btnBlue:{
      alignItems: 'center',
      backgroundColor: '63C5DA',
      borderColor: '#63C5DA',
      borderRadius:10,
      borderWidth:1,
      padding: 10
    },
    btnRed:{
      alignItems: 'center',
      backgroundColor: '800000',
      borderColor: '#800000',
      borderRadius:10,
      borderWidth:1,
      padding: 10
    },
    btnGreen:{
      alignItems: 'center',
      backgroundColor: '#00563B',
      borderColor: '#00563B',
      borderRadius:10,
      borderWidth:1,
      padding: 10
    }
});
