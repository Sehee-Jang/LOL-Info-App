import { getChampionDetail, getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const ChampionDetailPage = async ({ params }: { params: { id: string } }) => {
  const championDetail = await getChampionDetail(params.id);
  const latestVersion = await getLatestVersion();

  const championKey = Object.keys(championDetail.data)[0]; // championDetail.data의 첫 번째 키를 가져옵니다.
  const champion = championDetail.data[championKey];
  console.log("champion.info : ", champion.info);
  console.log("champion.image : ", champion.image);

  // image 속성에 대한 타입을 명시적으로 좁히기
  const image = champion.image as { full: string };

  if (!champion || !champion.info) {
    return <div>챔피언 정보를 불러오는 중 오류가 발생했습니다.</div>;
  }
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-2'>{champion.name}</h1>
      <p className='text-xl text-gray-600'>{champion.title}</p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${image.full}`}
        alt={`${champion.name}`}
        width={200}
        height={200}
        className='rounded-md my-4'
      />
      <p>{champion.lore}</p>
      <h2 className='text-2xl font-bold mt-4'>스탯:</h2>
      <ul className='list-disc list-inside'>
        <li>공격력: {champion.info.attack}</li>
        <li>방어력: {champion.info.defense}</li>
        <li>마법력: {champion.info.magic}</li>
        <li>난이도: {champion.info.difficulty}</li>
      </ul>
    </div>
  );
};

export default ChampionDetailPage;
