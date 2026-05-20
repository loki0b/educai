import Educai from "../../src/components/ui/Logo.js"
import MainSection from "../components/sections/MainSection.js";

export default function Home() {
    return (
        <div className="py-16 min-h-screen w-full px-24 flex flex-col justify-center items-center bg-neutral-200">
            <Educai/>
            <MainSection/>
        </div>
    );
}