import Switcher from '../Switcher/Switcher';
import logo from '../../img/dk-logo-remove.png'

function Navbar() {
  return (
    <nav className="not-prose container flex max-w-5xl justify-between p-3 lg:px-5 xl:max-w-7xl">
      <a
        className="flex h-12 w-16 xl:scale-125 items-center justify-center md:ml-3 lg:text-4xl "
        href="/">
        <img id="logo" src={logo} alt="logo" />
      </a>
      <ul className="flex items-center">
        {/* <li className="h-full leading-[48px] text-gray-800 transition hover:text-gray-700 dark:text-gray-300 dark:hover:text-white">
          <a href="#sluzby" className="text-lg font-bold leading-none">
            služby
          </a>
        </li> */}
        <li className="group relative top-1 mx-2 h-full leading-[48px] text-gray-800 transition hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-800 hover:bg-clip-text hover:text-transparent dark:text-gray-300 dark:transition dark:hover:bg-gradient-to-r dark:hover:from-indigo-800 dark:hover:to-violet-600 dark:hover:bg-clip-text dark:hover:text-transparent md:mx-4">
          <a
            href="#kontakt"
            className="text-lg xl:text-xl font-bold">
            kontakt
          </a>
          <div className=" absolute right-0 top-10 z-10 hidden w-64 max-w-max rounded-lg border border-indigo-700 py-3 px-5 text-sm  opacity-0 transition-opacity duration-300 group-hover:block group-hover:opacity-100 dark:bg-transparent dark:text-gray-400">
            <div className="mb-2 flex">
              <svg
                className="mr-2 h-5 w-5 text-indigo-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <a
                href="tel:+420606909527"
                className="text-slate-900 hover:text-indigo-800 dark:text-gray-300 dark:hover:text-white">
                +420 606 909 527
              </a>
            </div>
            <div className="flex">
              <svg
                className="mr-2 h-5 w-5 text-indigo-700"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <a
                href="mailto:info@kolarsky.eu"
                className="text-slate-900 hover:text-indigo-800 dark:text-gray-300 dark:hover:text-white">
                hello@kolarsky.eu
              </a>
            </div>
          </div>
        </li>
        <li className="relative ml-2 dark:animate-wiggle rounded-full p-1 duration-300 animate-pulse bg-gray-300/70 hover:bg-gray-300 dark:bg-transparent dark:hover:bg-gray-300/20 md:mr-3">
          <Switcher className="hover:text-amber-600" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
