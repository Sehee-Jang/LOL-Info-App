export type ChampionRotation = {
  freeChampionIds: number[]; // 현재 무료로 플레이 가능한 챔피언 ID 목록
  freeChampionIdsForNewPlayers: number[]; // 신규 플레이어를 위한 무료 챔피언 ID 목록
  maxNewPlayerLevel: number; // 신규 유저 최대 레벨
};
