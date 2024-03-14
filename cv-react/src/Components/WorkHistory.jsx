import { Typography } from '@material-tailwind/react';
import workdata from '../assets/workdata.json'

const WorkHistory = () => {
    return (
        <div className="space-y-3 pb-20">
            <Typography variant="h2">Work History</Typography>
            {workdata.workHistory.map((proj) => (
                <div key={proj.id}>
                    <div className="relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md ">
                        <div className="p-6 ">
                            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {proj.position}
                            </h5>
                            <h6 className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                {proj.company}
                            </h6>
                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                {proj.startDate} - {proj.endDate} <br />
                            </p>
                            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                {proj.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WorkHistory;