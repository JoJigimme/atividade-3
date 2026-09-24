const listaCompras = [];

// Adicionando elementos
listaCompras.push("Maçãs");
listaCompras.push("Ovos");
listaCompras.push("Café");

# Exibindo a lista com índices numerados
listaCompras.forEach((item, indice) => {
  console.log(`${indice + 1}.${item}`);
});