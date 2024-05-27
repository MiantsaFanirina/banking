import { TotlaBalanceBoxProps } from '@/types'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'
import LastTransactionCard from './LastTransactionCard'

const TotalBalanceBox = (
    {accounts = [], totalBanks, totalCurrentBalance, transactions, appwriteItemId} : TotlaBalanceBoxProps
) => {
  return (
    <section className='total-balance rounded-md'>
        <div className="flex items-center gap-4">
            <div className="total-balance-chart">
                {/* Doughnut Chart */}
                <DoughnutChart accounts={accounts}/>
            </div>

            <div className="flex flex-col gap-4 ml-6">
                <h2 className="header-2">
                    Bank Accounts: {totalBanks} 
                </h2>
                <div className="flex flex-col gap-4">
                    <p className="total-balance-label">
                        Total Current Balance
                    </p>
                    
                    <div className="total-balance-amount gap-2">
                        <AnimatedCounter amount={totalCurrentBalance}/>
                    </div>

                </div>
            </div>
        </div>

        <div className="h-full w-full md:w-[200px] bg-base-300 rounded-md shadow-md">
            <LastTransactionCard
                accounts={accounts}
                transactions={transactions}
                appwriteItemId={appwriteItemId}
            />
        </div>

    </section>
  )
}

export default TotalBalanceBox