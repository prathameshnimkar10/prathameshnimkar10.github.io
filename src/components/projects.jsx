"use client";

import FlowingMenu from './animations/flowingMenu';

const demoItems = [
    { link: 'https://github.com/prathameshnimkar10/rendezview', text: 'RendezView : Finding hangout places for your group in proximity', image: 'https://picsum.photos/600/400?random=1' },
    { link: 'https://github.com/prathameshnimkar10/yt-tomp3', text: 'YouTube-to-MP3 app using Python', image: 'https://picsum.photos/600/400?random=2' },
    { link: 'https://github.com/prathameshnimkar10/audio-text-audio', text: 'Multi-modal Text-Speech-Text conversational chatbot', image: 'https://picsum.photos/600/400?random=2' },
    { link: 'https://github.com/prathameshnimkar10/ai-text-summariser', text: 'AI-Text Summariser', image: 'https://picsum.photos/600/400?random=3' },
    { link: 'https://github.com/prathameshnimkar10/cancer_detect_wisconsin', text: 'Breast Cancer Detection using AI/ML (Wisconsin dataset)', image: 'https://picsum.photos/600/400?random=3' },
    { link: 'https://github.com/prathameshnimkar10/parkinson-s-disease-minorproject', text: "Parkinson's Disease Prediction using AI/ML ", image: 'https://picsum.photos/600/400?random=3' },
    { link: 'https://github.com/prathameshnimkar10/epl23-24', text: 'Premier League player prediction (+ dummy player initialisation) ', image: 'https://picsum.photos/600/400?random=3' },
    { link: 'https://github.com/prathameshnimkar10/cropprediction_projectacd', text: 'Crop Prediction using AI/ML', image: 'https://picsum.photos/600/400?random=4' },
    { link: 'https://github.com/prathameshnimkar10/jwmariottproject', text: 'JW Mariott Website using HTML+CSS+PHP', image: 'https://picsum.photos/600/400?random=3' },
];

const Projects = () => (
    <div className="w-screen h-screen">
        <h1 className="text-center items-center justify-center font-bold text-3xl mb-6">PROJECTS</h1>
        <FlowingMenu items={demoItems} />
    </div>
);

export default Projects;