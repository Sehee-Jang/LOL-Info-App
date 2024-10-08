import React from "react";
import { getItems, getLatestVersion } from "@/utils/serverApi";
import { Item } from "@/types/Item";
import Image from "next/image";

export default async function ItemsPage() {
  const itemsData = await getItems();
  const items = Object.values(itemsData);
  const latestVersion = await getLatestVersion();

  console.log("items: ", items);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6 text-center'>
        아이템 목록
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {items.map((item: Item) => {
          return (
            <div className='bg-white border border-gray-300 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105'>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/item/${item.image.full}`}
                alt={`${item.name}`}
                width={100}
                height={100}
                className='mx-auto mb-2 rounded-lg'
              />
              <h2 className='text-xl font-semibold text-primary'>
                {item.name}
              </h2>
              <p className='text-gray-700'>{item.plaintext}</p>
              <p className='text-gray-500'>{item.gold.total} 골드</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
