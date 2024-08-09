import Marquee from "../marquee/marquee";

const Artist = ({ artist }: any) => {
    // Se artist è un array e contiene elementi, concatena i nomi con una virgola
    const artists = artist?.map((e: any) => e.name).join(', ');

    return (
        <div>
            <span className="text-xs text-neutral-400">
                <Marquee text={artists} />
            </span>
        </div>
    );
};

export default Artist;
