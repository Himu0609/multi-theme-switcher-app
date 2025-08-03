import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);


  // fetching the api 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Multi-Theme Store</h1>
        <p className="text-lg mb-4">
          This app demonstrates how to switch between multiple themes in a React app using TailwindCSS,
          TypeScript, and Context API.
        </p>

         {/* button just scrolls the page to lower to see all the products  */}
        <button
            onClick={() => {
                const el = document.getElementById("products");
                el?.scrollIntoView({ behavior: "smooth" });
            }}                                                  
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition"
            >
            Get Started
            </button>

      </div>


      <div className="mb-10 max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc list-inside text-left space-y-1">
          <li>Three distinct themes</li>
          <li>Persistent theme selection</li>
          <li>Responsive design</li>
          <li>Context API for state management</li>
        </ul>
      </div>

      {/* Below is the designe where i am showing product in card view , 
      i could have also created a seprate component for the cards 
      or multiple library provides card view also but i chose to do this insated */}
      
      {loading ? (
        <div className="text-center text-xl">Loading products...</div>
      ) : (
        <div  id="products" className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded shadow-md overflow-hidden p-4 hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg mb-2 truncate">{product.title}</h3>
              <p className="text-green-600 font-bold text-right">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
