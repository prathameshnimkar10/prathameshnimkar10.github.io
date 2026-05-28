// \src\components\aboutMe.jsx
export default function AboutMe() {
    return (
        <div className="w-full md:w-3/5">
            <div className="text-base md:text-base lg:text-xl font-normal space-y-4">
                <p style={{ textAlign: "justify" }}>
                    I am Prathamesh Nimkar, a Software Engineer working at Capgemini, with a Bachelor's in Information Technology from Manipal University Jaipur (GPA: 8.9/10).
                </p>
                <p style={{ textAlign: "justify" }}>
                    I work in DevOps and cloud infrastructure, working with Docker, Kubernetes, Jenkins, Terraform, and AWS/Azure to build and ship reliable, automated systems. I am also open to backend and platform engineering, and have working knowledge of Python (including FastAPI) and core Java.
                </p>
                {/* <p style={{ textAlign: "justify" }}>Through projects and internships, I have gained hands-on experience in software development and AI/ML, continuously enhancing my skills.</p> */}
                <p style={{ textAlign: "justify" }}>
                    I enjoy picking up new tools, working with driven people, and building things that actually hold up in production.
                </p>
                <p style={{ textAlign: "justify" }}>
                    I am fluent in English, Marathi, and Hindi, with Marathi as my native language. I also have a strong grounding in Sanskrit from my academic years.
                </p>
                <p style={{ textAlign: "justify" }}>
                    Outside of work, I play and watch football, basketball, and badminton, and love exploring new places on my bike.
                </p>
                {/* <p className="font-bold">Hobbies: </p> 
                <p>I love playing football, badminton, and table tennis. I also enjoy watching football matches (the team I support).</p> */}
            </div>
        </div>
    );
}