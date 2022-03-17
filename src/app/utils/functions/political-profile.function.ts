export const getColor = (gender: string): string => {
  switch (gender) {
    case 'Esquerda': return '#f83800';
    case 'Direita': return '#29a9e1';
    case 'Bolsonarista': return '#5B9FBE';
    case 'Centro': return '#FDB913';
    case 'LulaPetista': return '#F04248';
    case 'Filiado PSDB': return '#0078BD';
    default: return '#ffbb13';
  }
}