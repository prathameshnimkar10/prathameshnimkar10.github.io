"use client";
// we will do educational functions and then export them together
import Image from "next/image";

export default function EduDetails({ activeItem, className = "" }) {
    if (!activeItem) return null;

    return (
        <div
            className={`transition-all duration-500 ease-in-out w-full p-8 rounded-lg shadow-lg bg-gray-800 text-white mt-10 opacity-100 hover:scale-105 hover:shadow-2xl ${className}`}
        >
            <div className="grid grid-cols-2 gap-8 items-center">
                {/* Left: Image */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-700">
                    <Image
                        src={activeItem.image}
                        alt={activeItem.title}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-500 hover:scale-110"
                    />
                </div>

                {/* Right: Text */}
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold">
                        {activeItem.title}
                        <span className="italic text-gray-400 ml-2">
                            {activeItem.location || ""}
                        </span>
                    </h2>
                    <p className="mt-2 text-gray-300">
                        <span className="block font-normal">
                            {activeItem.time || ""}
                        </span>
                        <span className="block font-normal">
                            {activeItem.gpa ? `GPA: ${activeItem.gpa}` : ""}
                        </span>
                    </p>
                    <ul className="mt-4 list-disc list-inside text-gray-300">
                        {activeItem.description.split("\n").map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}