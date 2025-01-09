import { Avatar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function Menyu() {
  return (
    <div className="w-[100%] flex justify-center ">
      <div className=" fixed bottom-0 bg-[#adadae] w-full flex justify-evenly items-center  p-3">
       
        <button>
        <NavLink to="/">
          <img
          className="w-[20px] "
          src="https://cdn-icons-png.flaticon.com/512/17821/17821825.png"
          alt=""
          />
          </NavLink>
        </button>
        <button>
        <NavLink to="/qidiruv">
          <img
          className="w-[20px] "
          src="      https://cdn-icons-png.flaticon.com/512/622/622669.png "
          alt=""
          />
          </NavLink>
        </button>
        <button>
        <NavLink to="/animelar">
          <img
          className="w-[20px] "
          src="      https://cdn-icons-png.flaticon.com/512/1179/1179120.png "
          alt=""
          />
          </NavLink>
        </button>
        <button>
        <NavLink to="/layk">
          <img
          className="w-[20px] "
          src="     https://cdn-icons-png.flaticon.com/512/15821/15821890.png "
          alt=""
          />
          </NavLink>
        </button>
        <button>
        <NavLink to="/user">
          <img
          className="w-[20px] "
          src="    https://cdn-icons-png.flaticon.com/512/747/747376.png "
          alt=""
          />
          </NavLink>
        </button>
       
      </div>
    </div>
  );
}

export default Menyu;
