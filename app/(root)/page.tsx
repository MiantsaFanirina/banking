import React from 'react'

// components
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async () => {
  const LoggedIn = await getLoggedInUser()

  return (
    <section className="home">
      <div className='home-content'>
        <header className="home-header">

          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />

        </header>
      </div>

      <RightSidebar
        user={LoggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50}, { currentBalance: 1340.23}]}
      />
    </section>
  )
}

export default Home