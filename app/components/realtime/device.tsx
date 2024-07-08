import Image from "next/image";

const Device = ({ device }: any) => {
    return (
        <div>
            <div className="flex items-center gap-3 ">
                <Image
                    src={"/svg/" + device?.type + "-white.svg"}
                    alt="current-device"
                    height={30}
                    width={30}
                />
                <p>{device?.name}</p>
            </div>
        </div>
    );
};

export default Device;
