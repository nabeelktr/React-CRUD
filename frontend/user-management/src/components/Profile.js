import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      ></link>
      <div class="p-16">
        <div class="p-8 bg-white shadow mt-24">
          {" "}
          <div class="grid grid-cols-1 md:grid-cols-3">
            {" "}
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
              {" "}
            </div>{" "}
            <div class="relative inline-block">
              {" "}
              <img
                src="https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-11.jpg"
                className="cursor-pointer w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute 
              inset-x-0 top-0 -mt-24 flex items-center justify-center 
               duration-300 ease-in-out hover:scale-105 hover:opacity-70"
                alt=""
                title="Add photo"
              />{" "}
            </div>{" "}
            <div class="space-x-8 flex text-xs justify-between mt-32 md:mt-0 md:justify-end">
              <button class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                Logout
              <span className="text-blueGray-400 ml-2 cursor-pointer">
        <FontAwesomeIcon icon={faSignOutAlt} className="text-sm" />
      </span>
              </button>
            </div>
          </div>{" "}
          <div class="mt-20 text-center border-b py-8 pb-12">
            {" "}
            <h1 class="text-4xl font-medium text-gray-700">
              Jessica Jones, <span class="font-light text-gray-500">27</span>
            </h1>{" "}
            <p class="font-light text-gray-600 mt-3">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Bucharest, Romania
            </p>{" "}
            <p class="mt-8 text-gray-500">
              Solution Manager - Creative Tim Officer
            </p>{" "}
            <p class="mt-2 text-gray-500">
              <i className="fas fa-phone-alt mr-2 text-lg text-blueGray-400"></i>
              7356369150
            </p>{" "}
          </div>{" "}
          <div class="mt-12 flex flex-col justify-center">
            {" "}
            <p class="text-gray-600 text-center font-light lg:px-16">
              An artist of considerable range, Ryan — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure. An artist of considerable range.
            </p>{" "}
            <button class="text-indigo-500 py-2 px-4  font-medium mt-4">
              {" "}
              Show more
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
