import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const StartingLogo = () => {
    return(
        <View>
            <Image
                source={require('../assets/icon.png')}
                style={styles.icon}
            />
            <Text
                style={styles.text}
            >
                FreeMe
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        width: 80,
        height: 80
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 600
    }
})

export default StartingLogo