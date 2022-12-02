import Finder from '@/components/Finder'
import Intro from '@/components/Intro'
import Parts from '@/components/Parts'
import Populars from '@/components/Populars'
import Board from '@/components/Board'
import NewsFeed from '@/components/NewsFeed'
import Questions from '@/components/Questions'
import OrderCall from '@/components/OrderCall'
import Offices from '@/components/Offices'
import PayWays from '@/components/PayWays'

import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Intro />
      <Finder />
      <div className="container">
        <Parts />
        <Populars />
        <div className="home__layout">
          <div className="home__layout-main">
            <Board />
            <Questions />
          </div>
          <NewsFeed />
        </div>
        <OrderCall />
        <Offices />
        <PayWays />
      </div>
    </div>
  )
}
