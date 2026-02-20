import Marquee from "../marquee/marquee";

const Artist = ({ artist }: any) => {
    // If artist is an array, combine names for display.
    const artists = artist?.map((e: any) => e.name).join(", ");

    return (
        <span className="block text-xs text-neutral-400">
            <Marquee text={artists ?? ""} />
        </span>
    );
};

export default Artist;
