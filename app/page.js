import { About } from './components/HomePage/About'
import { Earth } from './components/HomePage/Earth'
import { Landing } from './components/HomePage/Landing'
import { ServiceSection } from './components/HomePage/ServiceSection'
import { WorkWithUs } from './components/HomePage/WorkWithUs'


export default function Home() {
  return (
    <main className='w-full mx-auto'>
      <Landing />
      <About />
      <Earth />
      <ServiceSection />
      <WorkWithUs />
    </main>
  )
}
