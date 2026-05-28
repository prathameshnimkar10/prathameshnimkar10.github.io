// \src\components\about.jsx
import ImageCol from "./imageCol";
import AboutMe from "./aboutMe";

export default function About() {
    return(
        <section className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 px-4 md:px-24 mt-3 md:mt-6 w-full animate-riseUp">
            <ImageCol />
            <AboutMe />
        </section>
    );
}