import ImageCol from "./imageCol";
import AboutMe from "./aboutMe";

export default function About() {
    return(
        <section className="flex flex-col md:flex-row items-center justify-between px-24 mt-12 w-full animate-riseUp">
            <ImageCol />
            <AboutMe />
        </section>
    );
}