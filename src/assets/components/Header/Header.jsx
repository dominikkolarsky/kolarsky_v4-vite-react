import device from '../../img/device_mockup.png';

function Header() {
  return (
    <header class="not-prose mx-auto grid min-h-[80vh] items-center text-center lg:grid-cols-12 lg:text-left">
      <div className="lg:col-span-6">
        <h1 class="mb-4 mt-16 text-3xl font-extrabold text-slate-800 dark:text-gray-300 md:text-4xl xl:text-5xl max-w-2xl mx-auto">
          {' '}
          Dělám co mě baví, <br></br> tvořím{' '}
          <span class="bg-gradient-to-br from-violet-600 to-indigo-800 bg-clip-text text-transparent">
            moderní
          </span>{' '}
          webové stránky na míru. Ukaž světu,{' '}
          <span class="bg-gradient-to-br from-violet-600 to-indigo-800 bg-clip-text text-transparent">
            co&nbsp;baví tebe
          </span>
          .
        </h1>
        <a
          href="#kontakt"
          className="dark:hover:bg-indigo-800/60 hover:bg-indigo-900/10 mx-auto mt-10 flex h-[50px] max-w-xs items-center justify-center gap-2 rounded-full border-2 border-indigo-900 transition-all duration-300 hover:scale-[.98] hover:border lg:mx-0">
          <span className="text-black dark:text-white">Poslat poptávku</span>
          <svg
            class="h-6 w-6 animate-pulse"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>

      <div className="relative my-16 flex lg:mt-0 lg:col-span-6 md:scale-110">
        <div className="shadow1"></div>
        <img src={device} alt="devices_mockup" className="" />
      </div>
    </header>
  );
}

export default Header;
