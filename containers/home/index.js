"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from "@components/model";
import Ads from "@components/Ads";


function Home() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    // Ensures that the component only renders client-side content after hydration
    setIsClient(true);
  }, [isClient]);

  return (


    <div className=" h-max pt-5">
      <div className="flex items-center justify-center font-semibold pb-10">
        <img
          alt="Logo"
          className="cursor-pointer w-[100px]"
          src="/assets/images/ROBLOX.png"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="p-4 ">
        <Ads
          data-ad-format="auto"
          data-ad-slot="9852606619"
          data-full-width-responsive="true"
        />
      </div>

      <div className="flex flex-col items-center justify-center  cursor-pointer p-4">
        <a href="/rebloxTools">
          <img src="/assets/images/rebloxTools.png" className="w-full" />
        </a>

        <a href="/characters">
          <img src="/assets/images/Characters.png" className="w-full" />
        </a>

        <a href="/rbxexclusive">
          <img src="/assets/images/freeBox.png" className="w-full" />
        </a>
        <a href="/maps">
          <img src="/assets/images/maps.png" className="w-full pt-5 pr-4" />
        </a>
      </div>
      <a href="/disclaimer">
        <div className="flex justify-center  pt-[100px] pb-5">
          <div className="border-b-2 text-[15px] border-primary2 font-bold text-primary2 text-center w-fit">
            Disclaimer
          </div>
        </div>
      </a>

      {isClient && (
        <Modal
          outerClassName="border-[1px] border-white"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className=" md:mt-[18px] mt-[20px]">

            <Ads display={true} data-ad-slot="7438833981" />
          </div>
        </Modal>
      )}

    </div>



  );
}

export default Home;
