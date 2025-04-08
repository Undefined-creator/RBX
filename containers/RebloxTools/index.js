import Ads from '@components/Ads'
import Layout from '@components/Layout'
import React, { Fragment } from 'react'

function RebloxTools() {
  return (
    <Layout title="Reblox Tools">

      <div className=" p-8 pb-[200px]">
        <div className="p-4 ">
          <Ads
            data-ad-format="auto"
            data-ad-slot="9852606619"
            data-full-width-responsive="true"
          />
        </div>

        <div className="grid grid-cols-2 gap-6 items-center justify-center   cursor-pointer pt-5">
          <a href="/rebloxTools/clothing">
            <img src="/assets/images/robloxtools/Clothing.webp" className="w-full h-[210px]" />
          </a>

          <a href="/rebloxTools/heads">
            <img src="/assets/images/robloxtools/Heads.webp" className="w-full h-[210px]" />
          </a>

          <a href="/rebloxTools/accessories">
            <img src="/assets/images/robloxtools/accressories.webp" className="w-full h-[210px]" />
          </a>
          <a href="/rebloxTools/animation">
            <img src="/assets/images/robloxtools/Animation.webp" className="w-full h-[210px]" />
          </a>
        </div>


      </div>
    </Layout>
  )
}

export default RebloxTools
