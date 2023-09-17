export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 md:p-24">
      <div className="bg-[#ffff] w-full h-80 flex flex-col items-center justify-center rounded-md shadow-lg">
        <div className="text-center text-[#2D3E40] text-4xl font-bold py-4">
          Descubra as melhores universidades de seu País!
        </div>
        <a href="../home/">
          <button className="bg-[#4da371] text-[#2D3E40] mt-6 text-lg border border-gray-300 rounded-md h-10 p-2 transition ease-in-out hover:bg-[#5aa077bb] hover:text-white duration-300">
            <b>Clique aqui para descobri-las!</b>
          </button>
        </a>
      </div>
    </main>
  );
}
