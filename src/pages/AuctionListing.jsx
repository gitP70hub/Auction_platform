import React from "react";

const products = [
  { id: 1, name: "Chair for Sale", price: "$20.00", bids: "2 bids", image: "https://via.placeholder.com/150" },
  { id: 2, name: "HP 14' Laptop", price: "$960.00", bids: "12 bids", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Laptop for Sale", price: "$300.00", bids: "14 bids", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Bike for Sale", price: "$80.00", bids: "5 bids", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Car for Sale", price: "$1,022.00", bids: "11 bids", image: "https://via.placeholder.com/150" }
];

const categories = [
  { id: 1, name: "Jobs", icon: "🧑‍💼" },
  { id: 2, name: "Housing", icon: "🏡" },
  { id: 3, name: "Languages", icon: "🗣️" },
  { id: 4, name: "Friendship", icon: "🤝" },
  { id: 5, name: "Market", icon: "🛒" }
];

const AuctionListing = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Site Name</h1>
        <button className="bg-green-500 px-4 py-2 rounded">Publish Now</button>
      </nav>

      {/* Search Bar */}
      <div className="text-center my-6">
        <h2 className="text-2xl font-semibold">Search and place ads easily</h2>
        <div className="mt-3 flex justify-center">
          <input type="text" placeholder="Search..." className="border p-2 w-1/2 rounded-l-md" />
          <button className="bg-green-500 text-white px-4 py-2 rounded-r-md">Search</button>
        </div>
      </div>

      {/* Latest Auctions Section */}
      <section className="max-w-6xl mx-auto p-4">
        <h3 className="text-xl font-semibold mb-4">Latest Auctions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md" />
              <h4 className="font-semibold mt-2">{product.name}</h4>
              <p className="text-green-600 font-bold">{product.price}</p>
              <p className="text-gray-500">{product.bids}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Bid Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto p-4 mt-8">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <div key={category.id} className="bg-white p-4 rounded-lg shadow-md text-center w-32">
              <div className="text-3xl">{category.icon}</div>
              <p className="mt-2">{category.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AuctionListing;
