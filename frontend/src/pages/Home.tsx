import Educai from "../../src/components/ui/Logo.js"
import ClassesSection from "../components/sections/ClassesSection.js";
import HeadingSection from "../components/sections/HeadingSection.js";

export default function Home() {
    return (
        <div className="py-16 w-full px-24 flex flex-col justify-center items-center bg-neutral-200">
            <Educai/>
            <HeadingSection/>
            <ClassesSection/>
        </div>
    );
}