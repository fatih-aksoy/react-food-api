import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // ! butona onclick verdik. navigate ile details sayfasina gondericek ve data.recipe yi de oraya tasicakk.
    // ! buradaki bilgileride yani state ti (state: data.recipe) useLocation ile Details sayfasina gonderecegim.
    navigate("/details", { state: data.recipe });
  };
  console.log(data.recipe);
  return (
    <div className=" flex flex-col justify-center items-center mt-5 w-[30rem] text-center">
      <p className="text-xl mb-5">{data.recipe.label}</p>
      <img
        src={data.recipe.image}
        alt=""
        width="150px"
        className="rounded-lg"
      />

      <button
        className="rounded-lg bg-black text-white p-1 w-[5rem] mt-2"
        onClick={handleClick}
        // onClick={() => navigate("/details", { state: data.recipe })} //! Second way...
      >
        Details
      </button>
    </div>
  );
};

export default RecipeCard;
