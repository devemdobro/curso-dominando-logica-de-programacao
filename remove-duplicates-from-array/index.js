if (nums.length === 0) {
	return 0;
}

let index = 1; // Iniciar a contagem de elementos únicos a partir do segundo elemento

for (let i = 1; i < nums.length; i++) {
   const isDifferentNumber = nums[i] !== nums[i - 1];
    if (isDifferentNumber) { // Verificar se o elemento atual é diferente do anterior
        nums[index] = nums[i]; // Atualizar o array com o elemento único
        index++; // Mover o índice para a próxima posição única
    }
}

return index; // O valor de 'index' representa o número de elementos únicos
