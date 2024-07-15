import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

import blackfriday1 from '../components/img/blackfriday1.png'
import Image from 'next/image'
import Nav from "./Nav";


const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <>


    
<div className="bg-[#FD9900] text-white  px-8 text-center flex items-center justify-between space-x-2">
<Image src={blackfriday1} alt="Logo" width={108} height={60} />
  <p className="text-lg font-bold text-[#FFFFFF]">
    Up to <span className="font-bold text-xl text-[#0F1928] px-1">59%</span>OFF
  </p>



  <div>
  <a href="#" className="ml-2  p-2 bg-[#0F1928]">Shop now →</a>

  <button  className="ml-2 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 hover:text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
  </div>
</div>


<div className="">
    <Nav/>
      <Container>
        <div className="">
          {/* <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link> */}
          {/* <MainNav data={categories} /> */}
          {/* <NavbarActions /> */}
        </div>
      </Container>
    </div>
    
    </>

  );
};
 
export default Navbar;
