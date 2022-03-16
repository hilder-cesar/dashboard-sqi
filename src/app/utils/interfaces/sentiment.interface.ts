export interface SentimentCountInterface {
  impartial: number,
  negative: number;
  positive: number;
}

export interface SentimentTime {
  time: Date;
  total: number;
}
export interface SentimentByTime {
  impartial: SentimentTime[]; 
  negative: SentimentTime[]; 
  positive: SentimentTime[]; 
}

export enum Sentiment {
  positive = 'positive', 
  negative = 'negative', 
  impartial = 'impartial'
}