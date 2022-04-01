import { faBlind, faChild, faHiking, faMale, faQuestion, faRunning, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export const getAgeIcon = (age: string): IconDefinition => {
  switch (age) {
    case '13-17': return faChild;
    case '18-24': return faMale;
    case '25-34': return faMale;
    case '35-44': return faRunning;
    case '45-54': return faHiking;
    case '55-64': return faHiking;
    case '65+': return faBlind;
    default: return faQuestion;
  }
};