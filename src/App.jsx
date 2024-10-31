import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import logo from '../src/assets/logo.png'
import Menu from './components/Menu'
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Heading from './components/Heading'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Header Part Start */}
   <div className="w-full py-[30px]">
    <Container className={'max-w-headerContainer'}>
      <Flex>
    <div className="w-logoW">
      <Image imgSrc={logo}/>
    </div>
    <div className="w-menuW">
      <Flex>
        <Menu menuName={'Home'}/>
        <Menu menuName={'Shop'}/>
        <Menu menuName={'About'}/>
        <Menu menuName={'Contacts'}/>
        <Menu menuName={'Journal'}/>
      </Flex>
    </div>
      </Flex>
    </Container>
   </div>
   {/* Header Part End */}

   {/* Category Part Start */}
    <div className="w-full bg-categoryBg py-10 border border-menuColor">
    <Container className={"max-w-headerContainer"}>
    <Flex className={'items-center'}>
      <div className="w-1/5">
      <Flex className={"gap-x-2"}>
      <HiOutlineBars3BottomLeft className='mt-1'/>
      <Heading as="h3" text={"Shop by Category"} className={"text-sm font-dm text-menuHover"}/>
      </Flex>
      </div>
      <div className="w-3/5 relative pl-20">
      <input type="text" className='p-3 bg-white rounded-lg w-full'placeholder='Search Products'/>
      <FaSearch className='absolute top-1/2 right-5 -translate-y-1/2'/>
      </div>
      <div className="w-1/5">
       <Flex className={'justify-end'}>
       <FaUser className='ml-2'/>
       <FaCaretDown className='mr-10'/>
       <FaShoppingCart />
       </Flex>
      </div>
    </Flex>
    </Container>
    </div>
   {/* Category Part End */}

   {/* Banner Part Start */}
      <div className="bg-banner bg-cover bg-center bg-no-repeat w-full py-[400px]"></div>
   {/* Banner Part End */}

   {/* Information Part Start */}
   <div className="w-full py-[30px]">
    <Container className={'max-w-headerContainer'}>
      <Flex className={"justify-between"}>
        <div className="w-[33.33%]">
          <Flex className={'gap-x-3'}>
          <PiNumberTwoBold />
          <Heading as="h3" text={'Two years warranty'} className={'font-dm text-sm'}/>
          </Flex>
        </div>
        <div className="w-[33.33%]">
          <Flex className={'gap-x-3'}>
          <FaTruck />
          <Heading as="h3" text={'Free shipping'} className={'font-dm text-sm'}/>
          </Flex>
        </div>
        <div className="w-[33.33%]">
          <Flex className={'gap-x-3'}>
          <FaUndoAlt />
          <Heading as="h3" text={'Return policy in 30 days'} className={'font-dm text-sm'}/>
          </Flex>
        </div>
      </Flex>
    </Container>
   </div>
   {/* Information Part End */}
    </>
  )
}

export default App
