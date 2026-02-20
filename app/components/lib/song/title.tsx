/* import Marquee from "react-fast-marquee"; */
import Marquee from "../marquee/marquee";
const Title = ({ title }: any) => {
    return (
        <span className="block text-sm font-semibold">
            <Marquee text={title ?? ""} />
        </span>
    );
};

export default Title;
