import Image from "next/image"
import logo from "../images/Logo.png"
import Icons from "../images/Social Icons.png"


export default function footer(){
    return(
        <div className="footer">
            <div className="contentBox">
                <div><Image
        src={logo}
        alt="logo"
        id="logo"/><p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than
            </p></div>
            <div className="services-list">
   <h3>
    Services
   </h3>
   <ul>
    <li>
        Bonus Program
    </li>
    <li>
        Gifts Cards
    </li>
    <li>
        Credit and payment
    </li>
    <li>
        Service contracts
    </li>
    <li>
        Non cash Account
    </li>
    <li>
        Payment
    </li>
   </ul>
            </div>
            <div className="help-list">
   <h3>
    Assistance To The Buyer
   </h3>
   <ul>
    <li>
        Find an order
    </li>
    <li>
        Terms of delivery
    </li>
    <li>
        Exchange and return of goods
    </li>
    <li>
        Guarantee
    </li>
    <li>
        Frequently asked question
    </li>
    <li>
        Payment
    </li>
   </ul>
            </div>
            
            </div>
            <Image
        src={Icons}
        alt="Icon"
        id="Icon"/>
        <p>
            Copyright Reserverd . Developed By NB MEMON.
        </p>
        </div>
    )
}