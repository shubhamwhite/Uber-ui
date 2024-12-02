import homeImage from '/homeImage/logo/Uber_logo_2018.svg.png';
import coverImage from '/homeImage/homeimg/alexander-abero-YesspN0J0n4-unsplash.jpg'; 
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div 
        className="h-screen w-full pt-8 flex justify-between flex-col bg-gray-200" 
        style={{
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <img className='w-16 ml-9' src={homeImage} alt="Uber logo"/>
        <div className="bg-white py-4 px-4 pb-7">
            <h2 className="text-3xl font-bold">Get Started with Uber</h2>
            <Link to='/user-login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4">Continue</Link>
        </div>
      </div>
    </>
  );
};

export default Home; 