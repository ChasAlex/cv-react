import {Avatar, Typography} from '@material-tailwind/react'
import picture from '../assets/Me2.jpg'


const About = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <Avatar src={picture} className="border-2 border-white hover:z-10 focus:z-10" size='xxl' />
                <div>
                    <Typography variant="h2">Alex Lundquist</Typography>
                    <Typography variant="large" color="white" className="font-normal">
                    Hello, I'm Alex Lundquist, currently on the path to a Fullstack developer career. <br /> Prior to diving into the world of computer software,<br /> I pursued an athletic career in Alpine skiing, <br /> competing at the Europe Cup & World cup level.
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default About;
