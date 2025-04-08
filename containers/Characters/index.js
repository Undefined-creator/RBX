import Ads from '@components/Ads'
import Layout from '@components/Layout'
import React from 'react'

function Characters() {
  return (
    <Layout>
      <div className="flex flex-col px-5  mx-auto  pb-[250px]">
      <div className="p-4 ">
          <Ads
            data-ad-format="auto"
            data-ad-slot="9852606619"
            data-full-width-responsive="true"
          />
        </div>
        <div className="grid grid-cols-1  items-center justify-center   cursor-pointer ">
          <a href="/characters/avatar">
            <img src="/assets/images/Characters/Avatar.webp" className="w-full " />
          </a>

          <a href="/characters/characters">
            <img src="/assets/images/Characters/Characters.webp" className="w-full " />
          </a>

        </div>


      </div>
    </Layout>
  )
}

export default Characters
