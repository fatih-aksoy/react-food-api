import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="bgcontainer flex justify-center items-center">
      <div className="rounded-full h-[25rem] w-[25rem] flex justify-center">
        <form className="flex flex-col gap-4" onSubmit={() => navigate("home")}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLAnEspx3icBtxKhhPu_S3OEb5jyJQtDGh8-SqbH49NBp4I_eYvPH7Eu7pr4hb6Tswzo&usqp=CAU"
            alt="img"
            width="200px"
            draggable="false"
            className="mx-auto"
          />
          <input
            type="text"
            placeholder="Your name"
            className="bg-black text-white
            p-2
            rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Your password"
            className="bg-black text-white
            p-2
            rounded-lg"
            required
          />
          <button className="rounded-lg bg-black text-white w-[5rem] mx-auto p-1">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// ! form icinini dolu olarak login yapmaliyiz. OnClick yaparsak login islemi dolmadan giris yapariz. O yuzden form etiketi icine onSbumit islemi yapacagiz.
