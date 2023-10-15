import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

function Header() {
  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 w-full">
      <div className="px-2 md:px-0 container mx-auto flex justify-between items-center py-2">
        <Link href="/">
          <Image
            src={"/images/logo.svg"}
            alt="logo icon"
            width={60}
            height={60}
            priority
            quality={32}
          />
        </Link>
        <div className="flex justify-center items-center gap-6 lg:gap-36">
          <nav className="hidden lg:block">
            <ul className="flex justify-between items-center flex-row gap-4 text-lg font-medium">
              <li className="overflow-hidden">
                <Link href={"/HowHilinkWork?"} className="link">
                  How Hilink Work?
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href={"/HowHilinkWork?"} className="link">
                  Services
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href={"/HowHilinkWork?"} className="link">
                  How Hilink Work?
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href={"/HowHilinkWork?"} className="link">
                  Pricing
                </Link>
              </li>
              <li className="overflow-hidden">
                <Link href={"/HowHilinkWork?"} className="link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-between items-center flex-row gap-2">
            <button className="btn prim">Sign In</button>
            <button className="btn sec">Login</button>
          </div>
          <DropDownMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
