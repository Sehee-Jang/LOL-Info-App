import Image from "next/image";
import { getChampions, getLatestVersion } from "@/utils/serverApi";
import { Champion } from "@/types/Champion";

const ChampionsPage = async () => {
  // 챔피언 목록 가져오기
  const champions: Record<string, Champion> = await getChampions();
  const latestVersion = await getLatestVersion();

  return (
    <div>
      <h2>챔피언 목록</h2>
      <ul>
        <div className='champion-grid'>
          {Object.keys(champions).map((key) => {
            const champion = champions[key];
            return (
              <div key={champion.id} className='champion-card'>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`}
                  alt={`${champion.name}`}
                  width={150}
                  height={150}
                />
                <h2>{champion.name}</h2>
                <p>{champion.title}</p>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default ChampionsPage;
