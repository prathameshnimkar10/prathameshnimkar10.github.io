"use client";

import dynamic from "next/dynamic";

const ExperienceTimeline = dynamic(() => import("./experience"), { ssr: false });

export default function Experience() {
    return (
        <main>
            <ExperienceTimeline />
        </main>
    );
}