function Savings() {
  const products = [
    {
      img: "save1.jpeg",
      p: "EDUCATION",
      title: "Buy a new Mac or iPad with education savings. Footnote",
      sub: "",
      dark: false
    },
    {
      img: "save2.jpeg",
      p: "MAC FOR STUDENTS",
      title: "Best in class. In college and beyond.",
      sub: "Whatever college throws your way, Mac has your back.",
      dark: true
    }
  ];

  return (
    <div className="bg-gray-100">
      <h1 className="text-neutral-500 text-2xl md:text-3xl font-semibold px-12 text-center md:text-start md:px-20 py-6">
        <span className="text-black">Savings and offers. </span>Exclusive deals, special stores and more.
      </h1>

      <section className="px-6 md:px-20 pb-10">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:justify-start md:items-start">
          {products.map((item, index) => (
            <div
              key={index}
              className="relative w-full max-w-sm md:max-w-md h-[28rem] md:h-[32rem] rounded-xl bg-cover bg-center shadow-lg transition-transform hover:scale-105"
              style={{
                backgroundImage: `url(${item.img})`
              }}
            >
              {/* Text Overlay */}
              <div
                className={`absolute top-0 left-0 w-full p-4 ${
                  item.dark ? "text-white" : "text-black"
                }`}
              >
                <p className="text-xs md:text-sm font-semibold">{item.p}</p>
                <h1 className="text-lg md:text-2xl font-bold leading-tight">{item.title}</h1>
                <p className="text-xs md:text-base font-medium">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Savings;
