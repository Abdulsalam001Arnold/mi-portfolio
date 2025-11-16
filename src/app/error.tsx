
'use client';


export default function error({error, reset}: {error: Error, reset: () => void}) {
   return(
    <main className="min-h-screen w-full relative text-white">
  {/* Crimson Depth */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b0707 100%)",
    }}
  />
  {/* Your Content/Components */}
  <div className="relative p-3 z-10 flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-4xl font-bold text-white mb-4 edu-nsw-act-cursive-heading">Something went wrong!</h1>
    <div className="w-full text-center flex flex-col items-center justify-center">
    <p className="text-xl w-[80%] text-gray-300 mb-6 macondo-regular">{error.message}</p>
    </div>
    <button
      onClick={() => reset()}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Try Again
    </button>
  </div>
</main>
   ) 
};
