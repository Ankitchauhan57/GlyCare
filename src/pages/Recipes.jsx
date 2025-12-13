import { useState } from "react";

const recipeData = {
  Breakfast: [
    {
      title: "Oats Dosa",
      videoURL: "https://www.youtube.com/embed/VIDEO_ID1",
      description: "Low-carb, high-fiber breakfast perfect for diabetic patients."
    },
    {
      title: "Vegetable Smoothie",
      videoURL: "https://www.youtube.com/embed/VIDEO_ID2",
      description: "A refreshing smoothie rich in vitamins and antioxidants."
    }
  ],
  Lunch: [
    {
      title: "Grilled Chicken Salad",
      videoURL: "https://www.youtube.com/embed/VIDEO_ID3",
      description: "Protein-packed, low-carb salad to keep you energized."
    },
    {
      title: "Quinoa Veg Bowl",
      videoURL: "https://www.youtube.com/embed/VIDEO_ID4",
      description: "A complete meal with protein, fiber, and vitamins."
    }
  ],
  Dinner: [
    {
      title: "Steamed Fish with Veggies",
      videoURL: "https://www.youtube.com/embed/VIDEO_ID5",
      description: "Light and healthy dinner, easy to digest."
    },
    {
      title: "Low Carb Paneer Stir-Fry",
      videoURL: "https://www.youtube.com/embed/VIDEO_ID6",
      description: "Delicious paneer recipe with minimal carbs."
    }
  ]
};

const Recipes = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 overflow-x-hidden">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">Diabetic-Friendly Kitchen</h1>
      <p className="text-sm sm:text-base md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
        Delicious recipes curated to manage blood sugar without sacrificing flavor.
        Watch step-by-step video guides.
      </p>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
        {Object.keys(recipeData).map((category) => (
          <button key={category} className={`px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full font-semibold transition 
              ${
                activeCategory === category
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            onClick={() => setActiveCategory(category)}
          >{category}</button>
        ))}
      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {recipeData[activeCategory].map((recipe, index) => (
          <div key={index} className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden">
            <div className="aspect-video">
              <iframe className="w-full h-full" src={recipe.videoURL} title={recipe.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold mb-2"> {recipe.title} </h3>
              <p className="text-gray-600 text-sm sm:text-base"> {recipe.description} </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Recipes;
