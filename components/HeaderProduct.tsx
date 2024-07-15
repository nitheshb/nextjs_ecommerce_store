export default function Header() {
  return (
    <header className="py-6 ">
      {/* <nav className="text-sm mb-4">
        <a href="/" className="text-blue-600 hover:underline">Home</a> {' > '} 
        <a href="/shop" className="text-blue-600 hover:underline">Shop</a> {' > '} 
        <span className="text-gray-700">Perfumes</span>
      </nav> */}
      <div className="flex justify-end items-center">
        {/* <h1 className="text-2xl font-bold text-gray-800">24 results for perfume</h1> */}
        <select className="border rounded p-2">
          <option>Most Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
    </header>
  );
}
