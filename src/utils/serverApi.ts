"use server";
import { ChampionDetail, ChampionsData } from "@/types/Champion";
import { Item } from "@/types/Item";

const VERSION_URL = "https://ddragon.leagueoflegends.com/api/versions.json";
const BASE_URL = "https://ddragon.leagueoflegends.com/cdn";

// Riot API에서 최신 버전 가져오기
export async function getLatestVersion() {
  try {
    const response = await fetch(VERSION_URL);
    const versions: string[] = await response.json();
    const lastestVersion = versions[0]; // 항상 첫 번째 버전을 가져옴
    return lastestVersion;
  } catch (error) {
    console.error("getLatestVersion() Error: ", error);
    throw new Error("최신 버전 정보를 불러오는 중 오류가 발생했습니다.");
  }
}

// 챔피언 목록 가져오기 `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json`
export async function getChampions() {
  const latestVersion = await getLatestVersion();
  const apiUrl = `${BASE_URL}/${latestVersion}/data/ko_KR/champion.json`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // 응답 확인
    console.log("Champion Data:", data); // API 응답 전체 데이터 로그
    console.log("Champions List:", data.data); // 챔피언 목록만 로그

    // 챔피언 ID 검증
    const championKeys = Object.keys(data.data);
    console.log("Available Champion IDs:", championKeys);

    // const champions: Champion[] = Object.values(data.data);
    // console.log("Champion Data: ", champions);
    // return champions;
    return data.data;
  } catch (error) {
    console.error("getChampions() Error: ", error);
    throw new Error("챔피언 목록을 불러오는 중 오류가 발생했습니다.");
  }
}

// 특정 챔피언 상세 정보 가져오기
export async function getChampionDetail(championName: string) {
  // 최신 버전 정보 가져오기
  const version = await getLatestVersion();
  const championsUrl = `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion/${championName}.json`;

  try {
    const response = await fetch(championsUrl);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch champions: ${errorText}`);
    }

    const championsData: ChampionsData = await response.json();

    // 챔피언 ID를 키로 사용하여 데이터를 가져 옴
    const championKey = Object.keys(championsData.data).find(
      (key) => championsData.data[key].id === championName
    );

    if (!championKey) {
      throw new Error(`Champion with name ${championName} not found.`);
    }

    // 해당 챔피언에 대한 URL 생성
    const championUrl = `${BASE_URL}/${version}/data/ko_KR/champion/${championKey}.json`;

    // // 챔피언 상세 정보를 반환
    // return championsData.data[championKey];

    // 챔피언 상세 정보를 가져옴
    const championResponse = await fetch(championUrl);
    if (!championResponse.ok) {
      const errorText = await championResponse.text();
      throw new Error(`Failed to fetch champion detail: ${errorText}`);
    }

    const championDetail: ChampionDetail = await championResponse.json();
    return championDetail;
  } catch (error) {
    console.error("Error fetching champion detail: ", error);
    throw new Error("챔피언 상세 정보를 불러오는 중 오류가 발생했습니다.");
  }
}

// 아이템 목록 가져오기
export async function getItems() {
  const version = await getLatestVersion();

  // 챔피언 ID를 받아 API URL 생성
  const itemsUrl = `${BASE_URL}/${version}/data/ko_KR/item.json`;

  try {
    const response = await fetch(itemsUrl);

    if (!response.ok) {
      throw new Error("아이템 목록 패치를 실패했습니다.");
    }

    const data = await response.json(); // 'data' 속성에서 아이템 정보 추출
    console.log("API Response Data: ", data); // 전체 응답
    const items: Item[] = Object.values(data.data);
    return items; // 'data' 필드에서 아이템 정보를 반환
    // return data.data;
  } catch (error) {
    console.error("getItem() Error: ", error);
    throw new Error("아이템 목록을 불러오는 중 오류가 발생했습니다.");
  }
}

export async function getChampionData() {
  const version = await getLatestVersion();
  try {
    const response = await fetch(
      `${BASE_URL}/${version}/data/ko_KR/champion.json`,
      {
        next: { revalidate: 60 }, // 60초마다 새로 데이터 페칭
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch champion data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
