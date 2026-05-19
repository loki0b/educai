import Title from "./Title.js"
import Subject from "./Subject.js";
import ScheduledDate from "./ScheduledDate.js";
import TextBox from "./TextBox.js";
import Tag from "./Tag.js";
import TagContainer from "./TagContainer.js";

export default function ClassPlan() {
    return (
        <div className="flex-col">
            <Title />
            <Subject />
            <ScheduledDate />
            <TextBox />
            <TagContainer/>
        </div>
    );
}