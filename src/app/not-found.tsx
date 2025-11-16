
'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import error from '../assets/images/error-404.png'


export default function notFound() {
    const router = useRouter()
    return(
        <main className="min-h-screen w-full relative text-white">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #2b0707 100%)",
                }}
            />
            <section className="relative p-3 z-[20] w-full flex flex-col items-center justify-center min-h-screen">
            <Image
            src={error}
            alt="404 Background Image"
            width={500}
            height={500}
            />
                <div className="flex gap-[20px]">
                <h1 className="text-5xl playwrite-ca-logo">404</h1>
                <p className="text-[30px]">|</p>
                <div className="text-center">
                <h1 className="text-4xl font-bold text-white mb-4 playwrite-ca-logo">Page Not Found</h1>
                <p className="text-lg text-gray-300 mb-6">The page you are looking for does not exist.</p>
                </div>
                </div>
                    <button
                        onClick={() => router.back()}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Go Back
                    </button>
            </section>
        </main>
    )
};
