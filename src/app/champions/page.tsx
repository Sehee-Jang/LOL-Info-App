import { getChampions } from "@/utils/serverApi";
import ChampionCard from "@/components/ChampionCard";

export const revalidate = 86400; // ISR 렌더링을 맞춰주기 위해 24시간 후 다시 데이터 패치

const ChampionsPage = async () => {
  // 챔피언 목록 가져오기
  const championData = await getChampions();
  const champions = Object.values(championData);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6 text-center'>챔피언 목록</h1>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {champions.map((champion) => {
          return <ChampionCard champion={champion} />;
        })}
      </ul>
    </div>
  );
};

export default ChampionsPage;
