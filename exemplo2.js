async function fetchCharacterById(id) {
    try {
      const response = await fetch(`https://hp-api.onrender.com/api/character/${id}`);
      if (!response.ok) {
        throw new Error(`Personagem não encontrado (ID: ${id})`);
      }
      const character = await response.json();
      console.log("Personagem encontrado:", character);
      return character;
    } catch (error) {
      console.error("Erro:", error.message);
    }
  }
  
  async function getData() {
    const char = await fetchCharacterById("9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8"); // ID de Harry Potter
    console.log(char);
  }
  
  getData();
  