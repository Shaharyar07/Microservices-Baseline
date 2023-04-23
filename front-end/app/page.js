import Image from "next/image";

export default async function Home() {
  const res = await fetch("https:api.agify.io?name=John");
  const data = await res.json();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='/next.svg'
          alt='Next.js Logo'
          width={180}
          height={37}
          priority
        />
      </div>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <h2 className='text-2xl font-bold text-center'>
          Hello, I'm <span className='text-blue-500'>John</span>
        </h2>
        <p className='text-center'>
          You are <span className='text-blue-500'>{data.age}</span> years old
        </p>
      </div>
      <h1>
        Microservices with <span className='text-blue-500'>Next.js</span>
      </h1>
    </main>
  );
}
