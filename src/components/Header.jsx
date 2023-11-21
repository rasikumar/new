import Menuitems from "./Menuitems";
import { FaHome } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-8xl sm:max-auto items-center py-6">
        <div className="flex">
            <Menuitems title="home" address="/" Icon={ FaHome }  />
            <Menuitems title="About" address="/about" Icon={ AiFillCaretRight }  />
        </div>
        <div className="flex items-center space-x-5">
          <DarkModeSwitch/>
          <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-3 ">rasi</span>
            <span className="text-xl hidden sm:inline ">kumar</span>
            </h2>
          </Link>
        </div>
    </div>
  );
}
