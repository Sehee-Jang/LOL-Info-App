import React from "react";
import { getItems, getLatestVersion } from "@/utils/serverApi";
import { Item } from "@/types/Item";
import Image from "next/image";

const ItemsPage = async () => {
  const items: Item[] = await getItems(); // 아이템 목록 가져오기
  const latestVersion = await getLatestVersion();

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>아이템 목록</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items.map((item) => (
          <li key={item.id} className='border rounded-lg p-4 text-center'>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsPage;
