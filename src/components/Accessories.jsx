import { FaPlusCircle } from "react-icons/fa";

function Accessories() {
  return (
    <div>
          <h1 className="px-5 md:px-20 text-neutral-500 text-xl text-center md:text-start md:text-3xl font-semibold py-6 bg-gray-100"><span className="text-black">Accessories. </span>Essentials that pair perfectly with your favourite devices.</h1>
          <section className="px-5 md:px-20 py-6 overflow-x-auto no-scrollbar bg-gray-100 pb-10" >

      <div className="flex gap-5 w-max">
        {[
          { img: "phn1.jpeg", title: "iPhone 16 Pro Silicon Case", price: "MRP From ₹4900.00 ‡", dark: false },
          { img: "phn2.jpeg", title: "iPhone 16 Clear Case with MagSafe", price: "MRP From ₹4900.00 ‡", dark: false },
          { img: "phn3.jpeg", title: "iPhone 16e Silicon Case", price: "MRP From ₹4900.00 ‡", dark: false },
          { img: "phn4.jpeg", title: "Apple Watch Strap", price: "MRP From ₹4500.00 ‡", dark: false },
          { img: "phn-5.jpeg", title: "AirPods Max", price: "MRP From ₹5900.00 ‡", dark: false },
          { img: "phn1.jpeg", title: "Beats USB-c to USB-c woven", price: "MRP From ₹1900.00 ‡", dark: false }
        ].map((item, i) => (
          <div
            key={i}
            className="h-96 w-72 bg-cover bg-center rounded-lg relative shrink-0"
            style={{ backgroundImage: `url(/${item.img})` }}
          >
            <div
              className={`absolute bottom-0 w-full backdrop-blur-sm p-4 ${
                item.dark ? "text-white bg-black/40" : "text-black bg-white/70"
              }`}
            >
              <h1 className="text-2xl font-semibold">{item.title}</h1>
              <p className="text-sm font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  );
}

export default Accessories;
