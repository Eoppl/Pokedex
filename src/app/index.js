import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import PokemonCard from "../components/PokemonCard";
import Titre from '../components/Titre'

const POKEMONS = [
  { number: 1, name: "Bulbizarre", type: "Plante" },
  { number: 4, name: "Salamèche", type: "Feu" },
  { number: 7, name: "Carapuce", type: "Eau" },
  { number: 25, name: "Pikachu", type: "Électrik" },
  { number: 37, name: "Goupix", type: "Feu" },
  { number: 43, name: "Mystherbe", type: "Plante" }
];

export default function Index() {
  const [count, setCount] = useState(0);
  const [feuSeulement, setFeuSeulement] = useState(false);
  const [message, setMessage] = useState("");

  // on filtre les pokemon
  var visibles = []
  if (feuSeulement == true) {
    for (let i = 0; i < POKEMONS.length; i++) {
      if (POKEMONS[i].type == "Feu") {
        visibles.push(POKEMONS[i])
      }
    }
  } else {
    visibles = POKEMONS
  }

  function plus() {
    console.log(count)
    setCount(count + 1);
  }

  return (

    <ScrollView contentContainerStyle={styles.scrollView}>
      <Titre texte="Mon Pokédex" />
      <Text>{visibles.length} Pokémon</Text>

      <Pressable
        onPress={() => setFeuSeulement(!feuSeulement)}
        style={styles.filtre}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {feuSeulement == true ? "Voir tous les types" : "Seulement le type Feu"}
        </Text>
      </Pressable>

      <Pressable onPress={plus}>
        <Text>+1</Text>
      </Pressable>
      <Pressable onPress={() => { setCount(count - 1) }}>
        <Text>-1</Text>
      </Pressable>

      <Pressable onPress={() => setCount(0)}>
        <Text>reset</Text>
      </Pressable>

      <Text>{count}</Text>

      {visibles.map(function (p) {
        return (
          <PokemonCard
            key={p.number}
            number={p.number}
            name={p.name}
            type={p.type}
          />
        )
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 16, gap: 12
  },
  filtre: {
    alignSelf: "flex-start", backgroundColor: "#111111",
    paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20
  },
  filtreTexte: { color: "white", fontWeight: "bold" },
  bouton: { padding: 4 }
})
