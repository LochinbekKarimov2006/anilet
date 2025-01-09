import { Avatar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function Menyu() {
  return (
    <div className="w-[100%] flex justify-center ">
      <div className=" fixed bottom-0 bg-[#adadae46] w-full flex justify-around items-center  p-2">
       
        <button>
        <NavLink to="/">
          <img
          className="w-[35px] bg-[#f2f0f0] p-2 rounded-[50px]"
          src="https://cdn-icons-png.flaticon.com/512/17821/17821825.png"
          alt=""
          />
          </NavLink>
        </button>
        <button>
        <NavLink to="/qidiruv">
          <img
          className="w-[40px] bg-[#f2f0f0] p-2 rounded-[50px]"
          src="      https://cdn-icons-png.flaticon.com/512/622/622669.png "
          alt=""
          />
          </NavLink>
        </button>
        <button>
        <NavLink to="/animelar">
          <img
          className="w-[45px] bg-[#f2f0f0] p-2 rounded-[50px]"
          src="      https://cdn-icons-png.flaticon.com/512/1179/1179120.png "
          alt=""
          />
          </NavLink>
        </button>
        <button>
        <NavLink to="/layk">
          <img
          className="w-[40px] bg-[#f2f0f0] p-2 rounded-[50px]"
          src="     https://cdn-icons-png.flaticon.com/512/15821/15821890.png "
          alt=""
          />
          </NavLink>
        </button>
        <button>
        <NavLink to="/user">
          <img
          className="w-[35px] bg-[#f2f0f0] p-2 rounded-[50px]"
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
