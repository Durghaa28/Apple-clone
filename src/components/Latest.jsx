

function Latest() {
  const products = [
    { img: "latest1.jpg", title: "iPhone 16 Pro", price: "From ₹119900.00 ‡", dark: true },
    { img: "latest2.jpg", title: "MacBook Air", price: "From ₹89900.00‡", dark: false },
    { img: "latest3.jpg", title: "iPad Air", price: "From ₹59900.00‡", dark: false },
    { img: "latest4.jpg", title: "Apple Watch Series 10", price: "From ₹46900.00‡", dark: false },
    { img: "latest5.jpg", title: "iPhone 16e", price: "From ₹59900.00‡", dark: false },
    { img: "latest6.jpg", title: "iPad", price: "From ₹34900.00‡", dark: false },
    { img: "latest7.jpg", title: "iPhone 16", price: "From ₹79900.00‡", dark: true },
    { img: "latest8.jpg", title: "Apple Watch Ultra 2", price: "From ₹89900.00‡", dark: true },
  ];

  return (
    <div>
            <h1 className="text-neutral-500 text-xl text-center md:text-start md:text-3xl font-semibold px-5 md:px-20 py-6 bg-gray-100"><span className="text-black">The latest. </span>Take a look at what’s new right now.</h1>

    <section className="px-5 md:px-20 py-6 overflow-x-auto no-scrollbar bg-gray-100">
      <div className="flex gap-6 w-max">
        {products.map((item, index) => (
          <div
            key={index}
            className="relative h-96 w-72 bg-cover bg-center  rounded-xl shadow-lg shrink-0 transition-transform hover:scale-105"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div
              className={`absolute top-0 w-full  p-4 ${
                item.dark ? "text-white bg-black/0" : "text-black bg-white/0" 
              }`}
            >
              <h1 className="text-2xl font-semibold">{item.title}</h1>
              <p className="text-sm font-medium">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Latest;
