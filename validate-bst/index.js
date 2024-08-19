const isValidBST = function (root, min = null, max = null) {
	console.log("------------------------------------");
	console.log("root", root);
	console.log("root.left", root?.left?.val);
	console.log("root.right", root?.right?.val);
	console.log("min", min);
	console.log("max", max);

	/* **Lógica**:
    passo 1 - Se o nó for `null`, retornamos `true` porque um nó nulo é considerado válido.*/
	if (!root) return true;

	/*passo 2 - Verificamos se valor do nó está fora dos limites permitidos (`max` e `min`). Se estiver, retornamos `false`, indicando que a árvore não é um BST válido.*/
	//verificamos se o valor do nó atual é menor ou igual ao valor mínimo
	//se for, retornamos falso e a árvore não é válida
	if (min != null && root.val <= min) {
		return false;
	}

	//verificamos se o valor do nó atual é maior ou igual que o valor máximo
	//se for, retornamos falso e a árvore não é válida
	console.log(max != null);
	console.log(root.val >= max);
	
	
	if (max != null && root.val >= max) {
		return false;
	}

	/*passo 3 - Chamamos a função recursivamente para os filhos esquerdo e direito, ajustando os limites:
        - Para o filho esquerdo, o limite superior (`max`) é o valor do nó atual (`node.val`).
        - Para o filho direito, o limite inferior (`min`) é o valor do nó atual (`node.val`).*/

	//primeiro testamos recursivamente a árvore da esquerda
	//definindo o valor atual do nó como o novo máximo e mantendo o mínimo atual
	const leftTree = isValidBST(root.left, min, root.val);

	//depois testamos recursivamente a árvore da direita
	//definindo o valor atual do nó como o novo mínimo e mantendo o máximo atual
	const rightTree = isValidBST(root.right, root.val, max);

	/*passo 4 - A função recursiva retorna `true` somente se todas as verificações passarem, o que significa que a árvore é um BST válido.*/
	//se esquerda for uma bst válida (true) e direita for uma bst válida (true)
	return leftTree && rightTree;
};

class TreeNode {
	constructor(val, left, right) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

// Exemplo de uso
// Criando a árvore:
//    2
//   / \
//  1   3
const root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

console.log(isValidBST(root)); // Saída: true

// Criando uma árvore inválida:
//     5
//    / \
//   3   8
//      /
//     2
const invalidRoot = new TreeNode(5);
invalidRoot.left = new TreeNode(3);
invalidRoot.right = new TreeNode(8, new TreeNode(2));

console.log(isValidBST(invalidRoot)); // Saída: false
