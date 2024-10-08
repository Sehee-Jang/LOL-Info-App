"use client";

import React, { useEffect, useState } from "react";
import { getChampionRotation, getChampionData } from "@/utils/riotApi";
import { ChampionRotation } from "@/types/ChampionRotation";
import { Champion } from "@/types/Champion";

const RotationPage = () => {
  // const [Champion, setChampionData] = useState<ChampionRotation | null>( null ); // 상태 초기화
  const [rotationData, setRotationData] = useState<ChampionRotation | null>(
    null
  );
  const [championDetails, setChampionDetails] = useState<Champion[]>([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 초기화
  const [error, setError] = useState<string | null>(null); // 에러 상태 초기화

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getChampionRotation(); // 데이터 가져오기
  //       setChampionData(data); // 상태 업데이트
  //     } catch (err) {
  //       setError(err instanceof Error ? err.message : "Unknown error occurred"); // 에러 처리
  //     } finally {
  //       setLoading(false); // 로딩 종료
  //     }
  //   };

  //   fetchData(); // 데이터 패칭 호출
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rotation = await getChampionRotation();
        setRotationData(rotation);

        // 각 챔피언 ID로 챔피언 데이터 가져오기
        const champions = await Promise.all(
          rotation.freeChampionIds.map(async (championId) => {
            const champion = await getChampionData(championId);
            return champion;
          })
        );
        setChampionDetails(champions);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>; // 로딩 중일 때
  if (error) return <p>Error: {error}</p>; // 에러 발생 시

  return (
    // <div>
    //   <h1>챔피언 로테이션</h1>
    //   <h1>Free Champions</h1>
    //   {championData ? (
    //     <>
    //       <ul>
    //         {championData.freeChampionIds.map((id) => (
    //           <li key={id}>Champion ID: {id}</li> // 챔피언 ID 리스트
    //         ))}
    //       </ul>
    //       <h2>Free Champions for New Players</h2>
    //       <ul>
    //         {championData.freeChampionIdsForNewPlayers.map((id) => (
    //           <li key={id}>Champion ID: {id}</li> // 신규 플레이어를 위한 챔피언 ID 리스트
    //         ))}
    //       </ul>
    //       <p>Max New Player Level: {championData.maxNewPlayerLevel}</p>
    //     </>
    //   ) : (
    //     <p>No champion data available.</p> // 데이터가 없을 경우
    //   )}
    // </div>
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>현재 무료 챔피언 목록</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {championDetails.map((champion) => (
          <li key={champion.id} className='border rounded-lg p-4 text-center'>
            <h2 className='text-xl font-semibold'>{champion.name}</h2>
            <h3 className='text-md text-gray-500'>{champion.title}</h3>
            <img
              src={champion.image.full}
              alt={champion.name}
              className='w-full h-auto rounded-md'
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RotationPage;
