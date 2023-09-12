import Image from 'next/image'
import HomePage from './home/Home'
export default function Home() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <HomePage />
    </>
  )
}
