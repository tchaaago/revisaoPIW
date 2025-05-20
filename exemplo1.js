async function fetchAllCharacters() {
    try {
        const response = await fetch('https://hp-api.onrender.com/api/characters');
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        const characters = await response.json();
        console.log("Personagens:", characters);
        return characters;
    } catch (error) {
        console.error("Falha ao buscar personagens:", error);
    }
}
    async function getData(){
        const allChars = await fetchAllCharacters();
        console.log("Primeiro personagem:", allChars[0].name);
    }
    getData();