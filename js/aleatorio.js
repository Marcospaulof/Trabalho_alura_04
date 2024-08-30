const nomes = [ "Leonardo Torrensis", "Lucius Cafenus", "Valerius Roestis", "Gaius Cafficus", "Aurelius Baristus", "Cassius Mocharus", "Flavius Robustus", "Titus Latteus"];
export function aleatorio(lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
