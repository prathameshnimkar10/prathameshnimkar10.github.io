"use client";

import FlowingMenu from './animations/flowingMenu';

const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];

const Projects = () => (
    <div className="w-screen h-screen">
        <FlowingMenu items={demoItems} />
    </div>
);

export default Projects;