import Marquee from "../marquee/marquee";

const Title = ({ title }: any) => {
    return (
        <div>
            <span className="text-sm font-semibold">
                <Marquee text={title} />
            </span>
        </div>
    );
};

export default Title;
