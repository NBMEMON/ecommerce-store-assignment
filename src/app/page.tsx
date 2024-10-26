import Image from "next/image";
import HeaderFunc from "../app/components/header"; // Renamed to start with uppercase
import iphonePic from "../app/images/Iphone Image.png";
import ps5 from "../app/images/PlayStation.png";
import pods from "../app/images/hero__gnfk5g59t0qe_xlarge_2x 1.png";
import vision from "../app/images/image 36.png";
import macbook from "../app/images/Macbook 1.png";
import FooterFunc from "../app/components/footer";
import banner from "../app/images/Banner 2.png";
import camera from "../app/images/Cameras.png";
import phone from "../app/images/Phones.png";
import gaming from "../app/images/Gaming.png";
import computer from "../app/images/Computers.png";
import watches from "../app/images/Smart Watches.png";
import headphone from "../app/images/Headphones.png";
import AppleIphone from "./images/Iphone 14 pro.png";
import Watch from "./images/watch 2.png";
import SmartWatch from "./images/watch.png";
import ipad from "./images/ipad.png";
import galaxy from "./images/galaxy.png";
import airpods from "./images/airpods.png";
import camera1 from "./images/camera.png";
import HeadPhoneMax from "./images/headphone max.png"
import CategoryImage1 from "./images/category watch.png"
import CategoryImage2 from "./images/categroy ipad.png"
import CategoryImage3 from "./images/category galaxy.png"
import CategoryImage4 from "./images/category Macbook 1 (1).png"


export default function Home() {
  return (
    <div>
      <div>
        <HeaderFunc />
      </div>

      <div className="banner">
        <div id="left-text">
          <p id="top-heading">Pro.Beyond.</p>
          <h2 className="iphone14">
            iPhone 14 <p id="h2-bold">Pro</p>
          </h2>
          <p>Created to change everything for the better. For everyone</p>
          <button className="banner-btn-black">Shop Now</button>
        </div>
        <Image
          src={iphonePic}
          alt="iphone"
          id="iphone"
          className="slide-in-blurred-right"
        />
      </div>
      <div id="banner-container">
        <div id="left-banner">
          <div id="side-bannerOne">
            <Image src={ps5} alt="ps5" id="ps5" />
            <div id="side-content">
              <h2 id="side-text">Playstation 5</h2>
              <p>
                Your paragraph text here. Incredibly powerful CPUs, GPUs, and an
                SSD with integrated I/O will redefine your PlayStation
                experience.
              </p>
            </div>
          </div>
          <div id="side-bannerTwo">
            <Image src={pods} alt="ps5" id="pods" />
            <div id="side-content2">
              <h2 id="side-text2">
                Apple AirPods <strong>Max</strong>
              </h2>
              <p>Computational audio. Listen, it's powerful.</p>
            </div>
          </div>
          <div id="side-bannerThree">
            <Image src={vision} alt="vision" id="vision" />
            <div id="side-content3">
              <h2 id="side-text3">
                Apple Vision <strong>Pro</strong>
              </h2>
              <p>An immersive way to experience entertainment.</p>
            </div>
          </div>
        </div>
        <div id="right-banner">
          <div id="rightside-content3">
            <h2 id="rightside-text3">
              Macbook <strong>Air</strong>
            </h2>
            <p>
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button className="banner-btn-white">Shop Now</button>
          </div>
          <div className="image-crop-container">
            <Image src={macbook} alt="macbook" id="macbook" />
          </div>
        </div>
      </div>
      <div className="categories-list">
        <h2 id="category-heading">Browse By Category</h2>
        <div className="icon-boxes">
          <div className="single-box">
            <Image src={phone} alt="phone" className="box-icon" />
            <p className="icon-name">Phone</p>
          </div>
          <div className="single-box">
            <Image src={watches} alt="watches" className="box-icon" />
            <p className="icon-name">Smart Watches</p>
          </div>
          <div className="single-box">
            <Image src={camera} alt="camera" className="box-icon" />
            <p className="icon-name">Cameras</p>
          </div>
          <div className="single-box">
            <Image src={headphone} alt="headphone" className="box-icon" />
            <p className="icon-name">Headphones</p>
          </div>
          <div className="single-box">
            <Image src={computer} alt="computer" className="box-icon" />
            <p className="icon-name">Computers</p>
          </div>
          <div className="single-box">
            <Image src={gaming} alt="gaming" className="box-icon" />
            <p className="icon-name">Gaming</p>
          </div>
        </div>
      </div>
      <div className="container2">
        <ul className="list-style">
          <li id="first-li">New Arrival</li>
          <li>Best Seller</li>
          <li>Featured Product</li>
        </ul>
        <div className="product-container">
          <div className="product-box">
            <Image src={AppleIphone} alt="" className="product-pic" />{" "}
            <p className="product-title">
              Apple iPhone 14 Pro Max 128GB Deep Purple{" "}
            </p>
            <h4>$900</h4>
            <button className="shopNow"> Shop Now</button>
          </div>
          <div className="product-box">
            <Image src={camera1} alt="" className="product-pic" />{" "}
            <p className="product-title">Blackmagic Pocket Cinema Camera 6k</p>
            <h4>$2535</h4>
            <button className="shopNow"> Shop Now</button>
          </div>
          <div className="product-box">
            <Image src={SmartWatch} alt="" className="product-pic" />{" "}
            <p className="product-title">
              Apple Watch Series 9 GPS 41mm Starlight Aluminium{" "}
            </p>
            <h4>$399</h4>
            <button className="shopNow"> Shop Now</button>
          </div>
          <div className="product-box">
            <Image src={HeadPhoneMax} alt="" className="product-pic" />{" "}
            <p className="product-title">
              AirPods Max Silver Starlight Aluminium{" "}
            </p>
            <h4>$549</h4>
            <button className="shopNow"> Shop Now</button>
          </div>
          <div className="product-box">
            <Image src={Watch} alt="" className="product-pic" />{" "}
            <p className="product-title">
              Samsung Galaxy Watch6 Classic 47mm Black
            </p>
            <h4>$369</h4>
            <button className="shopNow"> Shop Now</button>
          </div>
          <div className="product-box">
            <Image src={galaxy} alt="" className="product-pic" />{" "}
            <p className="product-title">
              Galaxy Z Fold5 Unlocked | 256GB | Phantom Black
            </p>
            <h4>$1799</h4>
            <button className="shopNow"> Shop Now</button>
          </div>
          <div className="product-box">
            <Image src={airpods} alt="" className="product-pic" />{" "}
            <p className="product-title"><br></br>Galaxy Buds FE Graphite</p>
            <h4>$99.99</h4>
            <button className="shopNow"> Shop Now</button>
          </div>
          <div className="product-box">
            <Image src={ipad} alt="" id="" />{" "}
            <p className="product-title">
              Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021
            </p>
            <h4>$398</h4>
            <button className="shopNow"> Shop Now</button>
          </div>
        </div>
      </div>
      <div className="container3">
  <div className="category-box">
    <Image src={CategoryImage1} alt="" className="category-images" />
    <h3 className="category-heading">Popular Products</h3>
    <p className="category-description">
      iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
    </p>
    <button className="category-btn">Shop Now</button>
  </div>
  <div className="category-box">
    <Image src={CategoryImage2} alt="" className="category-images" />
    <h3 className="category-heading">Ipad Pro</h3>
    <p className="category-description">
      iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
    </p>
    <button className="category-btn">Shop Now</button>
  </div>
  <div className="category-box" style={{ backgroundColor: "#EAEAEA" }}>
    <Image src={CategoryImage3} alt="" className="category-images" />
    <h3 className="category-heading">Samsung Galaxy</h3>
    <p className="category-description">
      iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
    </p>
    <button className="category-btn">Shop Now</button>
  </div>
  <div className="category-box" style={{ backgroundColor: "#2C2C2C"  }}>
    <Image src={CategoryImage4} alt="" className="category-images" />
    <h3 className="category-heading" style={{ color: "white" }}>Macbook Pro</h3>
    <p className="category-description ">
      iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.
    </p>
    <button className="category-btn" style={{ color: "white" , border: "1px solid white" , marginBottom:"20px"}}>Shop Now</button>
  </div>
</div>

      <Image src={banner} alt="banner" id="banner" />
      <FooterFunc />
    </div>
  );
}
