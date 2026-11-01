import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const ARTWORK =
    "https://raw.githubusercontent.com/PokeAPI/sprites" +
    "/master/sprites/pokemon/other/official-artwork/";

// la couleur selon sont type
function getColor(type) {
    if (type == "Plante") {
        return "#78C850"
    }
    if (type == "Feu") {
        return "#F08030";
    }
    if (type == "Eau") {
        return "#6890F0"
    }
    if (type == "Électrik") {
        return "#F8D030";
    }
}

export default function PokemonCard(props) {
    const color = getColor(props.type);
    const [estCapturer, setEstCapturer] = useState(false);
    const [nbClics, setNbClics] = useState(0);

    return (
        <View
            style={[
                styles.card,
                { backgroundColor: color },
                estCapturer ? styles.cardCapturee : {},
            ]}
        >
            <Image source={{ uri: `${ARTWORK}${props.number}.png` }} style={styles.image} />
            <View>
                <Text style={styles.number}>#{props.number}</Text>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.type}>{props.type}</Text>
                <Pressable
                    onPress={() => setEstCapturer(!estCapturer)}
                    style={[styles.bouton, estCapturer == true && styles.boutonCapture]}
                >
                    <Text style={[styles.boutonTexte, estCapturer && styles.boutonTexteCapture]}>
                        {estCapturer == true ? "Capturé ✓" : "Capturer"}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    card: {
        flexDirection: "row", alignItems: "center", gap: 12,
        padding: 12, borderRadius: 14,
        borderWidth: 3, borderColor: "transparent"
    },
    cardCapturee: { borderColor: "#3B5BDB" },
    image: { width: 80, height: 80 },
    number: { color: "#888" },
    name: { fontSize: 18, fontWeight: "700" },
    type: {
        alignSelf: "flex-start", backgroundColor: "#ECE8DE",
        paddingHorizontal: 10, borderRadius: 10, overflow: "hidden"
    },
    bouton: {
        alignSelf: "flex-start", marginTop: 6,
        paddingHorizontal: 12, paddingVertical: 4,
        borderRadius: 10, borderWidth: 1, borderColor: "#3B5BDB",
        backgroundColor: "#ffffff"
    },
    boutonCapture: { backgroundColor: "#3B5BDB" },
    boutonTexte: { color: "#3B5BDB", fontWeight: "bold" },
    boutonTexteCapture: { color: "white" },
});
