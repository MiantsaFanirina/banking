import { LastTransactionCardProps } from '@/types'
import React from 'react'

const LastTransactionCard = (
  {
    accounts,
    transactions = [],
    appwriteItemId,
  } : LastTransactionCardProps
) => {

  const mostRecentTransaction = transactions.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))[0];
  console.log(mostRecentTransaction);
  console.log(accounts);

  return (
    <div>LastTransactionCard</div>
  )
}

export default LastTransactionCard