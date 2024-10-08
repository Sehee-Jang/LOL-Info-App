"use client";

import React, { useEffect, useState } from "react";
import { ChampionRotation } from "@/types/ChampionRotation";
import { Champion } from "@/types/Champion";
import { getChampions } from "@/utils/serverApi";
import ChampionCard from "@/components/ChampionCard";

export default function RotationPage() {
  const [rotationData, setRotationData] = useState<ChampionRotation | null>(
    null
  );
  const [championData, setChampionData] = useState<{
    [key: string]: Champion;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 초기화
  const [error, setError] = useState<string | null>(null); // 에러 상태 초기화

  useEffect(() => {
    async function fetchData() {
      const [rotationRes, championsData] = await Promise.all([
        fetch("/api/rotation").then((res) => res.json()),
        getChampions(),
      ]);
      setRotationData(rotationRes); // id number
      setChampionData(championsData); // number을 가지고 championsData에 id를 넣어 어떤 챔피언인지 만들어야함
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>; // 로딩 중일 때
  if (error) return <p>Error: {error}</p>; // 에러 발생 시
  if (!rotationData || !championData) return null;

  const rotationChampions = rotationData.freeChampionIds.map((id) => {
    const champion = Object.values(championData).find(
      (champion: Champion) => parseInt(champion.key) === id
    );
    return champion;
  });

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6 text-center'>
        현재 무료 챔피언 목록
      </h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {rotationChampions.map(
          (champion) => champion && <ChampionCard champion={champion} />
        )}
      </ul>
    </div>
  );
}
