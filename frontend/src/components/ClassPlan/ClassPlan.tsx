import Title from "./Title.js"
import Subject from "./Subject.js";
import ScheduledDate from "./ScheduledDate.js";
import TextBox from "./TextBox.js";
import Tag from "./Tag.js";
import TagContainer from "./TagContainer.js";

export default function ClassPlan() {
    return (
        <div className="flex flex-col gap-1 justify-center w-68 h-53 bg-white shadow-lg shadow-neutral-400 p-8">
            <Title />
            <div className="flex gap-2 items-center">
                <Subject />
                <ScheduledDate />
            </div>
            <TextBox />
            <TagContainer/>
        </div>
    );
}