import React from "react";
import { LOGO, USER_AVATAR } from "../utils/constant";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          <img src={user?.photoURL} alt="userIcon" className="w-12 h-12" />
          <button
            className="font-bold text-white cursor-pointer"
            onClick={handleSignOut}
          >
            {" "}
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
