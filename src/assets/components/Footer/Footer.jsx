
function Footer() {
  return (
    <footer className="container not-prose text-center my-3 px-8 pb-4 text-slate-900/20 dark:text-slate-400/20">
      <div
        className="mx-auto my-5 w-24 h-1 bg-gradient-to-r from-slate-600/20 to-gray-400/20 rounded-full"></div>
      
      {/* <div class="py-1 text-xs">
        <a href="/"> Portfolio </a>
        | 
        <a href="/"> Resume </a>
        |
        <a href="/"> GitHub Code </a>
      </div> */}
      <div className="text-xs">
        Copyright © 2022 Dominik Kolarský
        <br />
      </div>
    </footer>
  )
}

export default Footer