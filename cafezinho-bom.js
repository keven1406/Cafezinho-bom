const listaDeCafe = []
//acao(array):: string -> string -> numero -> obj
const acao = adicionar => cafe => gosto => nivel => {
	return adicionar.push({marca: cafe, sabor: gosto, nivelDoSabor: nivel}) 
}
 
const adicionarCafes = acao(listaDeCafe)
adicionarCafes('São Braz')('Bom')(6)
adicionarCafes('Santa Clara')('Ótimo')(10)
adicionarCafes('Melita')('Ótimo')(10)
adicionarCafes('Petinho')('Ruim')(4)

//acessarLista:: string -> array
const acessarLista = lista => verificarSabor => 
	lista.filter(verificarSabor) 

//verificarSabor:: item -> boolean
const verificarSabor = gostoDoCafe => cafe => cafe.sabor === gostoDoCafe
const verGostoDoCafe = acessarLista(listaDeCafe)
console.log(verGostoDoCafe(verificarSabor('Ótimo')))

