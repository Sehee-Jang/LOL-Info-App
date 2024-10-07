import React from "react";
import { getItems, getLatestVersion } from "@/utils/serverApi";
import { Item } from "@/types/Item";
import Image from "next/image";

const ItemsPage = async () => {
  const items: Item[] = await getItems(); // 아이템 목록 가져오기
  const latestVersion = await getLatestVersion();

  return (
    <div>
      <h1>아이템 목록</h1>
      <ul>
        <div className='item-grid'>
          {items.map((item) => (
            <li key={item.id}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/item/${item.image.full}`}
                alt={`${item.name}`}
                width={150}
                height={150}
              />
              <h2>{item.name}</h2>
              <p>{item.plaintext}</p>
              <p>{item.gold.total} 골드</p>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default ItemsPage;
