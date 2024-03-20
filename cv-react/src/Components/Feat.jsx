import { Carousel, Typography, Button } from "@material-tailwind/react";
import Ski1 from '../assets/Ski1.JPG'
import accomp1 from '../assets/accomp1.jpg'
import accomp2 from '../assets/accomp2.jpg'
import buss3 from '../assets/buss3.jpg'



export default function Feat() {
  return (
    <Carousel className="rounded-xl ">
      <div className="relative h-full w-full">
        <img
          src={Ski1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Member of the SEB Innovation Forum
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              The Innovation forum strives to foster creativity and collaboration among entrepreneurs to drive innovation and improve business processes.

            </Typography>

          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={accomp1}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Jurypanelist at Karolinska institutet
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Contributed as a member of the jury panel at Karolinska Institutet for the Novo Nordisk Foundation, evaluating and selecting innovative healthcare solutions.
            </Typography>

          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={accomp2}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Keynote Speaker at the Life Science Summit
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
             Delivered a captivating keynote speech on entrepreneurship at The Life Science Summit, inspiring and engaging an audience of 150 attendees.
        
            </Typography>

          </div>
        </div>
      </div>

      <div className="relative h-full w-full">
        <img
          src={buss3}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Entreprenurship
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Successfully launched and managed a profitable wholesale business for food delicacies, achieving a recurring revenue of over 300k SEK
            </Typography>

          </div>
        </div>
      </div>
    </Carousel>
  );
}
