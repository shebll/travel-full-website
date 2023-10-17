import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

function Header() {
  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="px-2 md:px-0 container mx-auto flex justify-between items-center py-2">
        <Link href="/" className="flex  items-center gap-6 ">
          <Image
            src={"/images/logo.svg"}
            alt="logo icon"
            width={60}
            height={60}
            priority
            quality={80}
          />
          <h1 className="text-3xl font-bold block lg:hidden">TRAVEL</h1>
        </Link>
        <div className="flex justify-center items-center gap-6 lg:gap-16">
          <nav className="hidden lg:block">
            <ul className="flex justify-between items-center flex-row gap-4 text-lg font-medium">
              <li className="overflow-hidden">
                <Link href={"/HowHilinkWork?"} className="link">
                  How Hilink Work?
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href={"/Services"} className="link">
                  Services
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href={"/About"} className="link">
                  About
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href={"/Pricing"} className="link">
                  Pricing
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href={"/ContactUs"} className="link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="hidden lg:flex justify-between items-center flex-row gap-2">
            <button className="btn prim flex justify-center gap-1 items-center">
              <Image
                src={"/images/user.svg"}
                alt="user icon"
                width={20}
                height={20}
              />
              Sign In
            </button>
            <button className="btn sec">Login</button>
          </div>
          <DropDownMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
