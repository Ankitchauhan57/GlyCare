import React from "react";
import { NavLink } from "react-router-dom";

function Store() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* Heading */}
      <div className="text-center px-4 pt-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3"> Glycare Store </h1>
        <p className="text-gray-600 text-base sm:text-xl"> Food that helps control your sugar levels </p>
      </div>

      {/* Products Section */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
          <img src="/images/kichdi.jpg" alt="Khichdi" className="w-full h-48 sm:h-52 object-cover"/>
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-2"> Glycare Masala Khichdi</h3>
            <p className="text-gray-600 text-sm mb-3">Low sugar, high fiber recipe for a perfect start.</p>
            <NavLink to="/" className="text-teal-600 font-medium hover:underline"> Shop Now →
            </NavLink>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
          <img src="/images/daliya.jpg" alt="Daliya" className="w-full h-48 sm:h-52 object-cover"/>
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-2"> Glycare Daliya </h3>
            <p className="text-gray-600 text-sm mb-3"> Diabetic-friendly grains for healthy meals.</p>
            <NavLink to="/" className="text-teal-600 font-medium hover:underline">  Shop Now →
            </NavLink>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
          <img src="/images/soup.jpg" alt="Vegetable Soup" className="w-full h-48 sm:h-52 object-cover"/>
          <div className="p-5">
            <h3 className="text-lg font-semibold mb-2"> Glycare Vegetable Soup</h3>
            <p className="text-gray-600 text-sm mb-3">
              A filling and nutritious soup for balanced diets.
            </p>
            <NavLink to="/" className="text-teal-600 font-medium hover:underline" > Shop Now →
            </NavLink>
          </div>
        </div>

      </section>

    </div>
  );
}

export default Store;
