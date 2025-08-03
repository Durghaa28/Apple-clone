function Product() {
  const products = [
    { src: "prod1.png", name: "Mac" },
    { src: "prod2.png", name: "iPhone" },
    { src: "prod3.png", name: "iPad" },
    { src: "prod4.png", name: "Apple Watch" },
    { src: "prod5.png", name: "AirPods" },
    { src: "prod6.png", name: "AirTag" },
    { src: "prod7.png", name: "Apple Tv 4K" },
    { src: "prod8.png", name: "HomePod" },
    { src: "prod9.png", name: "Accessories" },
    
  ];

  return (
    <section className="overflow-x-auto whitespace-nowrap px-5 md:px-20 pt-6 pb-14 scroll-smooth hide-scrollbar justify-center bg-gray-100 ">
      <div className="flex gap-6 snap-x snap-mandatory">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-36 flex flex-col items-center snap-start"
          >
            <img
              src={product.src}
              alt={product.name}
              className="h-20 object-contain"
            />
            <p className="mt-2 text-lg font-semibold hover:underline">{product.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Product;
