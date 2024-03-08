import React from 'react';

const Projects = () => {
    // Assuming you have a CSV file named 'projects.csv' with project data
    const projectsData = [
        { id: 1, name: 'Project 1', description: 'Description 1' },
        { id: 2, name: 'Project 2', description: 'Description 2' },
        { id: 3, name: 'Project 3', description: 'Description 3' },
        // Add more project data here...
    ];

    return (
        <div>
            <h1>Projects</h1>
            {projectsData.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;