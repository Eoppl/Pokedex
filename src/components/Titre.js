import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Titre(props) {
    return(
        <Text style={styles.title}>{ props.texte }</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 16,
    }
})
