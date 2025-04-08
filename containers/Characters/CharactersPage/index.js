import Ads from '@components/Ads';
import Layout from '@components/Layout';
import gameData from 'data/gameData';
import { useRouter } from 'next/router';
import React from 'react';

function CharactersPage() {
  const router = useRouter();

  // 👇 Adjust this if gameData is an object, not an array
  const avatarData = gameData?.Characters?.find((item) => item.name === 'Characters');

  function goToProductsDetails(name, url, category) {
    router.push({
      pathname: `/rebloxTools/clothing/${category}/${name}`,
      query: { item: name, category: category, url: url },
    });
  }

  return (
    <Layout>
      <div className="p-4 ">
        <Ads
          data-ad-format="auto"
          data-ad-slot="9852606619"
          data-full-width-responsive="true"
        />
      </div>
      <div className='grid grid-cols-2 gap-4 p-4'>
        {avatarData?.subItems?.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer gap-4 bg-white p-2 rounded-2xl"
            onClick={() => goToProductsDetails(item.name, item.url, 'Avatar')}
          >
            <div className='p-2 border-2 border-solid border-primary4 rounded-2xl'>
              <div className='bg-primary3 bg-opacity-20 rounded-2xl'>
                <img
                  src={item.url}
                  className="h-[150px] w-full object-contain"
                  alt={item.name}
                />
                <div className='text-black text-center text-[10px] font-bold p-2 pb-4'>{item.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default CharactersPage;
