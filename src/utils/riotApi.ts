import { ChampionRotation } from "@/types/ChampionRotation";

export async function getChampionRotation(): Promise<ChampionRotation> {
  const response = await fetch("/api/rotation");

  if (!response.ok) {
    throw new Error("Failed to fetch champion rotation");
  }

  const data: ChampionRotation = await response.json();
  return data;
}

export async function getChampionData(championId: number) {
  try {
    const response = await fetch(`/api/champions/${championId}`); // 챔피언 데이터 API 엔드포인트 호출
    if (!response.ok) {
      throw new Error('챔피언 데이터를 불러오는 중 오류가 발생했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('챔피언 데이터를 가져오는 데 실패했습니다.');
  }
}
