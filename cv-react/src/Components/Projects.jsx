import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Progress
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

export default function Projects() {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [progressValue, setProgressValue] = useState(0);
    const url = "https://api.github.com/users/ChasAlex/repos";

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(
                (data) => {
                    setTimeout(() => {
                        setProjects(data);
                        setLoading(false);
                    }, 3000);
                }
            )
    }, []);

    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setProgressValue(prevValue => prevValue + 1);
            }, 30);

            setTimeout(() => {
                clearInterval(interval);
            }, 3000);
        }
    }, [loading]);

    if (loading) {
        return (
            <div className="w-2/4">
                <div className="mb-2 flex items-center justify-between gap-4">
                    <Typography color="blue-gray" variant="h6">
                        Loading...
                    </Typography>
                    <Typography color="blue-gray" variant="h6">
                        {progressValue}%
                    </Typography>
                </div>
                <Progress value={progressValue} />
            </div>
        )
    }





    return (
        <div className="space-y-3 pt-48">
            <Typography variant="h2">Projects</Typography>
            {projects.map((project, index) => {
                return (
                    <Card className="mt-6 w-96">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {project.name}
                            </Typography>
                            <Typography>
                                {project.description}
                            </Typography>

                        </CardBody>
                        <CardFooter className="pt-0">
                            <a href={project.html_url}>
                                <Button variant="text" className="flex items-center gap-2">
                                    Repo{" "}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </Button></a>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    );
}


