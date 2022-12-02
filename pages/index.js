import Image from 'next/image'
import Benifits from '../components/benifits'
import Company from '../components/company'
import Contact from '../components/contact'
import Moreinfo from '../components/moreinfo'
import Offers from '../components/offers'
import Pricing from '../components/pricing'
import Services from '../components/services'
import Team from '../components/team'
import Workprocess from '../components/workprocess'
import HeroImg from '../public/hero-Img.svg'

export default function Home() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image class="lg:w-2/6 md:w-3/6 w-80 mb-10 object-cover object-center rounded" alt="hero" src={HeroImg} />
          <div class="text-center lg:w-2/3 w-full">
          <p class="mb-8 leading-relaxed p-3 border-2 border-l-purple-300 w-full my-0.5 mx-auto rounded-md">Explore & Collaborate With The New Gen-Technology</p>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Building Into Blockchain Ecosystem</h1>
            <p class="mb-8 leading-relaxed">We develop Web3 applications on Ethereum, Polygon and other blockchains along-with Crypto exchanges, <br /> DeFi, NFTs, DAO & metaverse. Let Us build your next project.</p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Explore</button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Instant connect</button>
            </div>
          </div>
        </div>
      </section>
      <Services/>
      <Pricing/>
      <Offers/>
      <Benifits/>
      <Moreinfo/>
      <Workprocess/>
      <Team/>
      <Company/>
      <Contact/>
    </>
  )
}
