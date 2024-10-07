import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

export async function GET() {
  const RIOT_API_KEY = process.env.RIOT_API_KEY;
  const BASE_URL = `https://kr.api.riotgames.com`;

  if (!RIOT_API_KEY) {
    return NextResponse.json(
      { error: "API key is required." },
      { status: 500 }
    );
  }

  try {
    // Riot Games API 호출
    const apiUrl = `${BASE_URL}/lol/platform/v3/champion-rotations`;

    // API 호출
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Riot-Token": RIOT_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // 데이터 변환 및 응답
    const data: ChampionRotation = await response.json();

    // JSON 형태로 응답
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in GET request: ", error);
    return NextResponse.json(
      { error: "Failed to fetch champion rotation." },
      { status: 500 }
    );
  }
}
