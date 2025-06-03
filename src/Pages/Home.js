import Hero from '../components/hero'
import BackgroundAnimation from '../components/background';

export default function Home() {
    return(
        <div className="min-h-screen w-full relative z-0 pt-[5rem]">
        <BackgroundAnimation/>
        <Hero/>
        </div>
    )
};
