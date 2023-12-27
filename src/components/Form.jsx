import { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../pages/RecipeCard";

const Form = () => {
  const [searchBar, setSearchBar] = useState(null);
  const [meal, setMeal] = useState(null);
  const [data, setData] = useState(null);

  const api_key = "8a73009571cb02899f2e2400ce448e72";
  const app_id = "91a8071c";

  const getApi = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${searchBar}&app_id=${app_id}&app_key=${api_key}&mealType=${meal}`
      )
      .then((res) => {
        console.log(res.data.hits);
        setData(res.data.hits); //! gelen veriyi data ya atadik.
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mt-5 flex-wrap">
        <div className="flex gap-3">
          <input
            type="text"
            className="bg-black text-white p-2 rounded-lg"
            placeholder="Search"
            onChange={(e) => {
              setSearchBar(e.target.value);
            }}
          />
          <select
            className="rounded-lg bg-black text-white p-1"
            onChange={(e) => {
              console.log(e.target.value);
              setMeal(e.target.value);
            }}
          >
            <option value="breakfast">Breakfast</option>
            <option value="brunch">Brunch</option>
            <option value="lunch">Lunch/Dinner</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </select>
        </div>
        <button
          className=" rounded-lg bg-black text-white p-2 w-[5rem] ml-5"
          onClick={() => getApi()}
        >
          Search
        </button>
        <div className="flex flex-wrap items-center justify-center">
          {data &&
            data.map((item, idx) => <RecipeCard data={item} key={idx} />)}
        </div>
      </div>
    </>
  );
};

export default Form;

// ! API yi axios ile cekecegiz.
// ! burada API den gelen verileri ekrana basicaz.
