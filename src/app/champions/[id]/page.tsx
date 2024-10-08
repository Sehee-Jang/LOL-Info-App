import { getChampionDetail, getLatestVersion } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

interface ChampionDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ChampionDetailPageProps) {
  const champion = await getChampionDetail(params.id);
  return {
    title: `${champion.name} -  이 페이지의 주인공`,
    description: champion.title,
  };
}
export default async function ChampionDetailPage({
  params,
}: ChampionDetailPageProps) {
  const champion = await getChampionDetail(params.id);

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-4xl font-bold text-primary mb-2 text-center'>
        {champion.name}
      </h1>
      <p className='text-xl text-white-700 text-center mb-4'>
        {champion.title}
      </p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.id}_0.jpg`}
        alt={`${champion.name}`}
        width={500}
        height={500}
        className='mx-auto rounded-lg shadow-lg mb-6'
      />
      <p className='text-white-800 mb-4'>{champion.lore}</p>
      <h2 className='text-2xl font-bold mt-6 text-primary'>스탯:</h2>
      <ul className='list-disc list-inside text-white-700'>
        <li>공격력: {champion.info.attack}</li>
        <li>방어력: {champion.info.defense}</li>
        <li>마법력: {champion.info.magic}</li>
        <li>난이도: {champion.info.difficulty}</li>
      </ul>
    </div>
  );
}
