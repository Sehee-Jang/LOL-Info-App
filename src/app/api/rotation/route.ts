import { getChampionRotation } from "@/utils/riotApi";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await getChampionRotation();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
