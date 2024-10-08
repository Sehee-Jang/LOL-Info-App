// https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json

export interface Champion {
  id: string; // 챔피언 ID
  key: string; // 챔피언 키
  name: string; // 챔피언 이름
  title: string; // 챔피언 제목
  tags: string[]; // 챔피언의 태그 (예: 전사, 마법사 등)
  image: {
    full: string; // 이미지 파일명
    sprite: string; // 스프라이트 이미지 파일명
    group: string; // 이미지 그룹 (예: 챔피언)
    x: number; // 이미지 x 좌표
    y: number; // 이미지 y 좌표
    w: number; // 이미지 너비
    h: number; // 이미지 높이
  };
}

// 상세 정보 타입 정의
export interface ChampionDetail extends Champion {
  lore: string; // 챔피언 배경 이야기
  tags: string[];
  info: {
   [key: string]: number
  };
  stats: {
   [key: string]: number
  };
  spells: Spell[];
  passive: Passive;
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  iamge: {
    full: string;
  };
}

export interface Passive {
  name: string;
  decription: string;
  image: {
    full: string;
  };
}