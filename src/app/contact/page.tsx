

import BackgroundAnimation from "@/components/background";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Reach out! :)',
    description: 'Contact me'
}

export default function page() {
    return(
        <main className="flex flex-col items-center justify-center min-h-screen w-full bg-black/70 pt-[4rem]">
            <BackgroundAnimation/>
            <Contact/>
        </main>
    )
};
