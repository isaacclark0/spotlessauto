const Body = () => {
    return (
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center mb-4">Welcome to Our Car Detailing Services</h2>
          <p className="text-lg text-center text-gray-600 mb-8">We offer professional car detailing services to make your vehicle shine.</p>
        </div>
  
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:order-2">
            <img
              src="/carbg1.jpg" // Replace with the path to your desired image
              alt="Car Detailing Hero"
              className="w-full rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:order-1 md:pr-8">
            <div className="flex justify-center mb-8 md:justify-start">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Schedule Now
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Body;
  