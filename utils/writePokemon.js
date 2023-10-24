const axios = require("axios");
const fs = require("fs");

const getPokemon = async () => {
  try {
    const res = await axios.get(
      "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
      { responseType: "buffer" }
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const writePokemon = async () => {
  const writeStream = fs.createWriteStream("./pokemonFile.json");
  writeStream.write(await getPokemon());
  console.log("Wrote response to pokemonFile.json");
};

writePokemon();
