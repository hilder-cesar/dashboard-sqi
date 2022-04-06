export const getColor = (gender: string): any[] => {
  switch (gender) {
    case 'Esquerda': return [[0, '#c43e20'], [0.5, '#c43e20'], [1, '#86281d']];
    case 'Direita': return [[0, '#c75d85'], [0.5, '#c75d85'], [1, '#9d4a6b']];
    case 'Bolsonarista': return [[0, '#d17964'], [0.5, '#d17964'], [1, '#aa6251']];
    case 'Centro': return [[0, '#a27b36'], [0.5, '#e2ab47'], [1, '#e2ab47']];
    case 'LulaPetista': return [[0, '#679d92'], [0.5, '#679d92'], [1, '#567c79']];
    case 'Petista': return [[0, '#679d92'], [0.5, '#679d92'], [1, '#567c79']];
    case 'Filiado PSDB': return [[0, '#4177b1'], [0.5, '#4177b1'], [1, '#325c87']];
    case 'Não Politizado': return [[0, '#658b39'], [0.5, '#7baa58'], [1, '#7baa58']];
    default: return [[0, '#8866a1'], [0.5, '#8866a1'], [1, '#6a4f84']];
  }
}