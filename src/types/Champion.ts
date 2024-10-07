// https://ddragon.leagueoflegends.com/cdn/14.19.1/data/ko_KR/champion.json

export interface Champion {
  id: string; // 챔피언 ID
  key: string; // 챔피언 키 (숫자 형태로, 문자열로 되어있을 수 있음)
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

// 전체 챔피언 목록에 대한 타입 정의
export interface ChampionsData {
  type: string; // 챔피언 데이터 타입
  format: string; // 데이터 형식
  version: string; // 데이터 버전
  data: {
    [key: string]: Champion; // 챔피언 ID를 키로 사용하는 객체
  };
}

export interface ChampionDetail {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: {
      id: string;
      key: string;
      name: string;
      title: string;
      image: object;
      skins: Array<object>;
      lore: string;
      blurb: string;
      allytips: Array<string>;
      enemytips: Array<string>;
      tags: Array<string>;
      partype: string;
      info: {
        attack: number; // 공격력
        defense: number; // 방어력
        magic: number; // 마법력
        difficulty: number; // 난이도
      }; // stats 타입 정의
      spells: Array<object>;
      passive: object;
      recommended: Array<object>;
    };
  };
  abilities: Ability[];
}

// 상세 정보 타입 정의
export interface ChampionDetail extends Champion {
  lore: string; // 챔피언 배경 이야기
  // info: Ability[];
  stats: {
    attack: number; // 공격력
    defense: number; // 방어력
    magic: number; // 마법력
    difficulty: number; // 난이도
  };
  abilities: Ability[]; // 챔피언의 능력 목록
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

interface Ability {
  name: string; // 스킬 이름
  description: string; // 스킬 설명
  cooldown: number; // 스킬 쿨타임
}
