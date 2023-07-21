import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full fixed top-0 bg-purple-900 bg-opacity-90">
      <div className="h-[50px] flex justify-between items-center opac">
        <Link className="ml-5" href="http://localhost:3000/">
          <span className="text-2xl">
            Gamezzzzz
          </span>
        </Link>
        <nav className="mr-5 sm:hidden">
          <span>
            <Image
              width={0} 
              height={0}
              style={{minWidth: '30px'}}
              src="/burger-menu.svg"
              alt="Menu"
            />
          </span>
        </nav>
      </div>
    </header>
  );
};
export default Header;