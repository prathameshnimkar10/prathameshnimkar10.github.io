"use client"

import { useEffect } from "react";
import { gsap } from "gsap";

export default function BounceCards({
    className = "",
    images = [],
    educationDetails = [],
    containerWidth = 400,
    containerHeight = 400,
    animationDelay = 0.5,
    animationStagger = 0.06,
    easeType = "elastic.out(1, 0.8)",
    transformStyles = [
        "rotate(10deg) translate(-170px)",
        "rotate(5deg) translate(-85px)",
        "rotate(-3deg)",
        "rotate(-10deg) translate(85px)",
        "rotate(2deg) translate(170px)",
    ],
    enableHover = true,
}) {
    useEffect(() => {
        gsap.fromTo(
            ".card",
            { scale: 0 },
            {
                scale: 1,
                stagger: animationStagger,
                ease: easeType,
                delay: animationDelay,
            }
        );
    }, [animationDelay, animationStagger, easeType]);

    const getNoRotationTransform = (transformStr) => {
        const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
        if (hasRotate) {
            return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
        } else if (transformStr === "none") {
            return "rotate(0deg)";
        } else {
            return `${transformStr} rotate(0deg)`;
        }
    };

    const getPushedTransform = (baseTransform, offsetX) => {
        const translateRegex = /translate\(([-0-9.]+)px\)/;
        const match = baseTransform.match(translateRegex);
        if (match) {
            const currentX = parseFloat(match[1]);
            const newX = currentX + offsetX;
            return baseTransform.replace(translateRegex, `translate(${newX}px)`);
        } else {
            return baseTransform === "none"
                ? `translate(${offsetX}px)`
                : `${baseTransform} translate(${offsetX}px)`;
        }
    };

    const pushSiblings = (hoveredIdx) => {
        if (!enableHover) return;

        images.forEach((_, i) => {
            gsap.killTweensOf(`.card-${i}`);
            const baseTransform = transformStyles[i] || "none";

            if (i === hoveredIdx) {
                const noRotationTransform = getNoRotationTransform(baseTransform);
                gsap.to(`.card-${i}`, {
                    transform: noRotationTransform,
                    duration: 0.4,
                    ease: "back.out(1.4)",
                    overwrite: "auto"
                });
            } else {
                const offsetX = i < hoveredIdx ? -160 : 160;
                const pushedTransform = getPushedTransform(baseTransform, offsetX);
                const distance = Math.abs(hoveredIdx - i);
                const delay = distance * 0.05;

                gsap.to(`.card-${i}`, {
                    transform: pushedTransform,
                    duration: 0.4,
                    ease: "back.out(1.4)",
                    delay,
                    overwrite: "auto"
                });
            }
        });
    };

    const resetSiblings = () => {
        if (!enableHover) return;
        images.forEach((_, i) => {
            gsap.killTweensOf(`.card-${i}`);
            const baseTransform = transformStyles[i] || "none";
            gsap.to(`.card-${i}`, {
                transform: baseTransform,
                duration: 0.4,
                ease: "back.out(1.4)",
                overwrite: "auto"
            });
        });
    };
    return (
        <div
            className={`relative flex items-center justify-center ${className}`}
            style={{
                width: containerWidth,
                height: containerHeight,
            }}
        >
            {images.map((src, idx) => (
                <div key={idx} className="relative flex flex-col items-center group">
                    <div
                        className={`card card-${idx} absolute w-[200px] aspect-square border-8 border-white rounded-[30px] overflow-hidden`}
                        style={{
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                            transform: transformStyles[idx] || "none",
                        }}
                        onMouseEnter={() => pushSiblings(idx)}
                        onMouseLeave={resetSiblings}
                    >
                        <img className="w-full h-full object-cover" src={src} alt={`card-${idx}`} />
                    </div>

                    <div
                        className="absolute bottom-[-40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white text-sm bg-gray-800 p-2 rounded-lg w-[180px]"
                    >
                        {educationDetails[idx]}
                    </div>
                </div>
            ))}
        </div>
    );
}
