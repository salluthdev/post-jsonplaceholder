import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Post JSONPlaceholder - Mini API Project</title>
        <meta
          name="description"
          content="Post JSONplaceholder. Mini API project build by @salluthdev"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="w-40 h-40 bg-stone-800">
          <h1 className="text-[aqua]">Halo!</h1>
        </div>
      </main>
    </>
  );
}
