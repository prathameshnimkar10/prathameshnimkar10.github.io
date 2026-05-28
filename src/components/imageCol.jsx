// \src\components\imageCol.jsx
import Image from "next/image";
import Me from "../../public/photo4.jpg";

export default function ImageCol() {
    return (
        <div className="w-full md:w-2/5 mb-6 md:mb-0 flex-shrink-0">
            <div className="w-52 h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 border-2 border-black dark:border-white mx-auto">
                <Image
                    src={Me}
                    alt="Profile"
                    width={385}
                    height={385}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}


// "use client";

// // import Image from "next/image";
// import TiltedCard from "./animations/tiltedCard";
// import Me from "../../public/photo4.jpg"

// export default function ImageCol() {
//     return (
//         <div className="flex justify-start w-full">
//             <div className="ml-6 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 border-2 border-black dark:border-white">
//                 <TiltedCard
//                     imageSrc={Me}
//                     alt="Profile"
//                     containerWidth="265"
//                     containerHeight="265"
//                     imageHeight="265"
//                     imageWidth="265"
//                     rotateAmplitude={1}
//                     scaleOnHover={1.05}
//                     showTooltip={false}
//                     displayOverlayContent={false}
//                     className="w-full h-full object-cover"
//                 />
//             </div>
//         </div>
//     );
// }  