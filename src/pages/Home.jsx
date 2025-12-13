import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-16 sm:py-20 px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Welcome to GLYCARE</h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Healthy recipes, diabetic-friendly products, and tools to manage your health.</p>
        <NavLink to="/recipes" className="inline-block bg-white text-teal-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
          Explore Recipes
        </NavLink>
      </section>

      {/* Cards Section */}
      <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Recipes */}
        <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
          <img src="/images/recipes1.jpg" alt="Recipe" className="w-full h-44 sm:h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Healthy Breakfast</h3>
            <p className="text-gray-600 text-sm mb-2">Low sugar, high fiber recipes for a perfect start.</p>
            <NavLink to="/recipes" className="text-teal-600 font-semibold hover:underline"> View Recipes</NavLink>
          </div>
        </div>

        {/* Store */}
        <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
          <img src="/images/store1.jpg" alt="Store" className="w-full h-44 sm:h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">GlyCare Store</h3>
            <p className="text-gray-600 text-sm mb-2">Shop diabetic-friendly snacks and ingredients online.</p>
            <NavLink to="/store" className="text-teal-600 font-semibold hover:underline"> Visit Store</NavLink>
          </div>
        </div>

        {/* Consultation */}
        <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
          <img src="/images/doctor.jpg" alt="Consultation" className="w-full h-44 sm:h-48 object-cover"/>
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Doctor Consultation</h3>
            <p className="text-gray-600 text-sm mb-2">
              Book appointments with certified diabetic specialists.
            </p>
            <NavLink to="/consultation" className="text-teal-600 font-semibold hover:underline"> Book Now</NavLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-14 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Manage Your Health </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Diet Plan Generator</h3>
            <p className="text-gray-600 text-sm mb-4">
              Create personalized meal plans suitable for your blood sugar level. </p>
            <NavLink to="/diet-plan" className="text-teal-600 font-semibold hover:underline">Generate Plan</NavLink>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Blood Sugar Log</h3>
            <p className="text-gray-600 text-sm mb-4"> Track and monitor your blood sugar readings easily. </p>
            <NavLink to="/blood-sugar" className="text-teal-600 font-semibold hover:underline"> Log Now</NavLink>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Doctor Consultation</h3>
            <p className="text-gray-600 text-sm mb-4"> Connect with certified doctors for advice and guidance.</p>
            <NavLink to="/consultation" className="text-teal-600 font-semibold hover:underline"> Book Appointment</NavLink>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-600 text-white py-14 sm:py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"> Start Your Healthy Journey Today! </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto"> Explore recipes, track your health, and shop diabetic-friendly products.</p>
        <NavLink  to="/recipes"  className="inline-block bg-white text-teal-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition">
          Get Started
        </NavLink>
      </section>

    </div>
  );
};

export default Home;
