import Image from 'next/image'
import Instruments from '../components/Homepage/Overview'
import ProgressBar from '../components/Homepage/Progressbar'
import Doughnut from '../components/Homepage/Dougnut'

export default function HomeOverview() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Instruments />
        <div className="flex mt-36">
          <div className="flex-1">
            <ProgressBar />
          </div>
          <div className="flex-1 mr-40">
            <Doughnut />
            </div>
            </div>
            </div>
 
         </main>
  )
}
