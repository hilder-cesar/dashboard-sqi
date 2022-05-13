export interface SentimentCountInterface {
  impartial: number,
  negative: number;
  positive: number;
  unqualified: number;
  total: number;
  totalAnalisado: number;
}

export interface SentimentTime {
  dateString: string;
  impartial: number;
  negative: number;
  positive: number;
  total: number;
  postDate: Date;
  range: string;
  unqualified: number;
}
export interface SentimentByTime {
  impartial: SentimentTime[]; 
  negative: SentimentTime[]; 
  positive: SentimentTime[]; 
}

export enum Sentiment {
  positive = 'positive', 
  negative = 'negative', 
  impartial = 'impartial',
  unqualified = 'unqualified'
}