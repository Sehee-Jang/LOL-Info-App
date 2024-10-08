import Image from "next/image";
import { getChampions, getLatestVersion } from "@/utils/serverApi";
import { Champion } from "@/types/Champion";
import Link from "next/link";

const ChampionsPage = async () => {
  // 챔피언 목록 가져오기
  const champions: Record<string, Champion> = await getChampions();
  const latestVersion = await getLatestVersion();

  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>챔피언 목록</h2>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {Object.keys(champions).map((key) => {
          const champion = champions[key];
          return (
            <div
              key={champion.id}
              className='border rounded-lg p-4 text-center'
            >
              <Link href={`/champions/${champion.id}`}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${latestVersion}/img/champion/${champion.image.full}`}
                  alt={`${champion.name}`}
                  width={150}
                  height={150}
                  className='mx-auto'
                />
                <h2 className='text-xl font-semibold'>{champion.name}</h2>
                <p className='text-gray-500'>{champion.title}</p>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ChampionsPage;
