import { faCircle, faFemale, faMale, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export const getIcon = (gender: string): IconDefinition => {
  switch (gender) {
    case 'Masculino': return faMale;
    case 'Feminino': return faFemale;
    default: return faCircle;
  }
};

export const getColor = (gender: string): string => {
  switch (gender) {
    case 'Masculino': return '#6002ee';
    case 'Feminino': return '#ee0290';
    default: return 'white';
  }
}