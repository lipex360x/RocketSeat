import Transaction from '../models/Transaction';

interface Balance {
  income: number | 0;
  outcome: number | 0;
  total: number | 0;
}

interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.transactions.reduce((acumulador, transaction) => {
      return transaction.type === 'income'
        ? acumulador + transaction.value
        : acumulador;
    }, 0);

    const outcome = this.transactions.reduce((acumulador, transaction) => {
      return transaction.type === 'outcome'
        ? acumulador + transaction.value
        : acumulador;
    }, 0);

    const total = income - outcome;

    const balance = {
      income,
      outcome,
      total,
    };

    return balance;
  }

  public create({ title, type, value }: TransactionDTO): Transaction {
    const transaction = new Transaction({
      title,
      type,
      value,
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
