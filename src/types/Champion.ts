export type Champion = {
  id: string; // 챔피언 ID
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
};

// 상세 정보 타입 정의
export type ChampionDetail = Champion & {
  // 'extends' 대신 '&' 사용
  lore: string; // 챔피언 배경 이야기
  abilities: Ability[]; // 챔피언의 능력 목록
};

type Ability = {
  name: string; // 능력 이름
  description: string; // 능력 설명
};
