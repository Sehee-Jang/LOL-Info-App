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
    <div>
      <h1>{champion.name}</h1>
      <p>{champion.title}</p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${image.full}`}
        alt={`${champion.name}`}
        width={200}
        height={200}
      />
      <p>{champion.lore}</p>

      <h2>스탯:</h2>
      <ul>
        <li>공격력: {champion.info.attack}</li>
        <li>방어력: {champion.info.defense}</li>
        <li>마법력: {champion.info.magic}</li>
        <li>난이도: {champion.info.difficulty}</li>
      </ul>
    </div>
  );
};

export default ChampionDetailPage;
