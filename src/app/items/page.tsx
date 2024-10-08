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
      <h1 className='text-2xl font-bold mb-4'>아이템 목록</h1>
      <div className='grid grid-cols-6 gap-4'>
        {items.map((item: Item) => {
          return (
            <div className='border rounded-lg p-4 text-center'>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/item/${item.image.full}`}
                alt={`${item.name}`}
                width={150}
                height={150}
                className='mx-auto'
              />
              <h2 className='text-xl font-semibold'>{item.name}</h2>
              <p>{item.plaintext}</p>
              <p>{item.gold.total} 골드</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
