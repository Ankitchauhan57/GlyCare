import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About Glycare
            </h1>
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              Glycare is dedicated to supporting people living with diabetes by
              providing trusted information, lifestyle guidance, and high-quality
              diabetic care products—all in one place.
            </p>
            <Link
              to="/store"
              className="inline-block bg-white text-teal-600 font-semibold px-6 py-3 rounded-2xl shadow hover:scale-105 transition"
            >
              Visit Our Store
            </Link>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/logocare1.png"
              alt="Diabetes care"
              className="w-full max-w-sm sm:max-w-md h-56 sm:h-64 object-contain"
            />
          </div>
        </div>
      </section>

      {/* Understanding Diabetes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          <img
            src="/images/sugarcheck.jpg"
            alt="Blood sugar monitoring"
            className="rounded-2xl shadow object-cover w-full h-64 sm:h-80"
          />

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
              Understanding Diabetes
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
              Diabetes is a chronic condition that affects how your body processes
              blood sugar (glucose). Managing diabetes requires regular monitoring,
              healthy nutrition, physical activity, and the right care products.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              At Glycare, we aim to simplify diabetes management by offering
              reliable tools and education to help you live a healthier,
              more confident life.
            </p>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-teal-600">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              To empower individuals with diabetes by providing accessible,
              affordable, and effective healthcare products along with clear
              guidance for better daily management.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-teal-600">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              To become a trusted digital healthcare companion for every diabetic
              individual, promoting awareness, prevention, and long-term wellness.
            </p>
          </div>

        </div>
      </section>

      {/* Call To Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Take Control of Your Diabetes Today
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
          Explore our curated range of diabetic care products designed to support
          your health journey—every step of the way.
        </p>
        <Link
          to="/store"
          className="bg-teal-600 text-white px-8 py-4 rounded-2xl font-semibold shadow hover:bg-teal-700 transition"
        >
          Go to Store
        </Link>
      </section>

    </div>
  );
}
