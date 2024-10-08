import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  champion: Champion;
}
export default function ChampionCard({ champion }: Props) {
  return (
    <div className='border rounded-lg p-4 text-center bg-white shadow transition-transform duration-300 hover:shadow-lg hover:-translate-y-1'>
      <Link href={`/champions/${champion.id}`} key={champion.id}>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.id}_0.jpg`}
          alt={`${champion.name}`}
          width={150}
          height={150}
          className='mx-auto rounded'
        />
        <h2 className='text-xl font-semibold mt-2 text-primary'>
          {champion.name}
        </h2>
        <p className='text-gray-500'>{champion.title}</p>
      </Link>
    </div>
  );
}
