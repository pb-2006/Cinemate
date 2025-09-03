import { Link } from "react-router-dom"

export const Footer = () => {
  return (
      <footer className="bg-white shadow-sm  dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cinemate</Link>. All Rights Reserved.
          </span>
          </div>
      </footer>
  )
}

