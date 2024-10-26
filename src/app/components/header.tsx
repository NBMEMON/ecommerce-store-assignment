import Image from "next/image"
import logo from "../images/Logo.png"
import search from "../images/Search.png"
import icon from "../images/Icons.png"

export default function header (){
    return (
        <div id="header">
        <Image
        src={logo}
        alt="logo"
        id="logo"/>
          <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        id="search-input"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <Image
          src={search}
          alt="Search"
          width={20} // Width of the search icon
          height={20} // Height of the search icon
        />
      </button>
    </div><div className="nav-bar">
      <ul>
        <li id="home">
          Home
        </li>
        <li>
         About 
        </li>
        <li>
          Contact Us
        </li>
        <li>
          Blog
        </li>
      </ul>
    </div>
    <Image
        src={icon}
        alt="icon"
        id="icon"/>
        </div>
    )
}