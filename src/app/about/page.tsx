

import Info from "@/components/info";
import type { Metadata } from "next";
import BackgroundAnimation from "@/components/background";



export const metadata: Metadata = {
    title: 'Get to know me! :)',
    description: 'About me page'
}

export default function page() {

    return(
        <main className="w-full min-h-screen flex flex-col items-center justify-center bg-black/70 pt-[2rem] pb-[1rem]">
            <BackgroundAnimation/>
            <Info/>
        </main>
    )
};
