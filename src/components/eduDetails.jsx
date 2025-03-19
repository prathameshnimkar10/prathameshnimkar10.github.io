"use client";
// we will do educational functions and then export them together
import Image from "next/image";

export default function EduDetails({ activeItem, className = "" }) {
    if (!activeItem) return null;

    return (
        <div className={`transition-opacity duration-300 ease-in-out w-full p-6 rounded-lg shadow-lg bg-gray-900 text-white mt-10 opacity-100 ${className}`}>
            <div className="grid grid-cols-2 gap-6 items-center">
                {/* Left: Image */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-800">
                    <Image
                        src={activeItem.image}
                        alt={activeItem.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-all duration-500"
                    />
                </div>

                {/* Right: Text */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">{activeItem.title}</h2>
                    <p className="mt-2 text-gray-300">{activeItem.description}</p>
                </div>
            </div>
        </div>
    );
}