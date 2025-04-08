import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

function Clothing() {
    const route = useRouter()
    function goToClothingDetails(name, type) {
        route.push({
            pathname: `/rebloxTools/clothing/${name}`,
            query: { item: name, category: type },
        })
    }
    return (
        <Layout>

            <div className="">
                <div className="p-4 ">
                    <Ads
                        data-ad-format="auto"
                        data-ad-slot="9852606619"
                        data-full-width-responsive="true"
                    />
                </div>
                <div className='grid grid-cols-2 p-4 gap-2 '>
                    {gameData.Clothing.map((item) => (
                        <div key={item} className="cursor-pointer gap-4 p-2"
                            onClick={() => goToClothingDetails(item.name, "Clothing")}
                        >
                            <img
                                src={item.url}
                                className={`w-[150px] h-[180px] `}
                                alt="Product"
                            />

                        </div>
                    ))}
                </div>



            </div>
        </Layout>
    )
}

export default Clothing 
