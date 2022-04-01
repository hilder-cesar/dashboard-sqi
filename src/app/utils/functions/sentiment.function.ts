import { faFrown, faMeh, faQuestion, faSmile, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export const getSentimentIcon = (sentiment: string): IconDefinition => {
  switch (sentiment) {
    case 'Positivas': return faSmile;
    case 'Neutras': return faMeh;
    case 'Negativas': return faFrown;
    case 'Nenhuma': return faQuestion;
    default: return faQuestion;
  }
};