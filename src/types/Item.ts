// https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/item.json

export interface Item {
  id: string; // 아이템 ID
  name: string; // 아이템 이름
  plaintext: string; // 아이템 설명
  gold: {
    base: number; // 기본 가격
    total: number; // 총 가격
    sell: number; // 판매 가격
  };
  stats: {
    [key: string]: number; // 아이템의 스탯 (예: 공격력, 방어력 등)
  };
  image: {
    full: string; // 이미지 파일명
  };
  tags: string[];
}
