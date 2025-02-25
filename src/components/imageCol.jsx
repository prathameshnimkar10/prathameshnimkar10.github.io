import Image from "next/image";
import Me from "../../public/photo3.jpg"

export default function ImageCol() {
    return (
        <div className="flex justify-start w-full">
            <div className="ml-6 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 border-2 border-black dark:border-white">
                <Image
                    src='/image3.jpg'
                    alt="Profile"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}  