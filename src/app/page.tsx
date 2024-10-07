// SSG : 서버에서 미리 html 파일을 만든 다음에 브라우저에서 보여주는 형태의 렌더링 방식
export default function Home() {
  return (
    <div className='container mx-auto p-4 text-center'>
      <h1 className='text-4xl font-bold mb-4'>리그 오브 레전드 정보 앱</h1>
      <p className='mb-6'>
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
    </div>
  );
}
