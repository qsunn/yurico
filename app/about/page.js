import { Landing } from "../components/AboutPage/Landing";
import { OurServices } from "../components/AboutPage/OurServices";
import { Yurico } from "../components/AboutPage/Yurico";

export default function About() {
  return (
    <main className='w-full mx-auto'>
      <Landing />
      <Yurico />
      <OurServices />
    </main>
  )
}
