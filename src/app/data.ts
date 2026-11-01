export interface Transaction {
  id: number;
  place?: string;
  type: 'income' | 'outcome';
  category?: 'products' | 'health' | 'transport' | 'salary' | 'transfer';
  amount: number;
  currency: 'USD' | 'EUR' | 'GEL';
  date: Date;
  status: 'completed' | 'pending' | 'failed';
  cardName: string;
  cardNumberLast4Digets: string;
}
