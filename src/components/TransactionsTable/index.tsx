import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string
  category: string;
  createdAt: string
}

export function TransationsTable() {  

  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(()=> {
    api.get("transactions")
    .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          
          {transactions.map(transaction => {
            return (
              <tr>
                <td key={transaction.id}>{transaction.title}</td>
                <td className="deposit">{transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}