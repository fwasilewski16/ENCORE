import { useState } from "react";

interface Blog {
  id: number;
  title: string;
  description: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Woodstock: A Cultural Milestone (1969)",
    description: "The story begins in 1969, with the legendary Woodstock Music & Art Fair in upstate New York. Billed as 'An Aquarian Exposition', Woodstock became a symbol of the counterculture movement. Against a backdrop of social upheaval, over 400,000 people gathered for a weekend of music, peace, and love. The festival featured iconic performances by artists like Jimi Hendrix, Janis Joplin, and The Who, cementing its place in history as a cultural milestone.",
  },
  {
    id: 2,
    title: "The 1970s and 1980s: Expansion and Diversity",
    description: "In the following decades, the festival scene expanded globally, with events like the Isle of Wight Festival in the UK and Roskilde Festival in Denmark. The 1970s and 1980s saw a diversification of genres and audiences, from rock and folk to punk and new wave. Festivals became not just about the music but also platforms for artistic expression and social connection.",
  },
  {
    id: 3,
    title: "The 1990s: Rise of Alternative and Electronic Music",
    description: "The 1990s brought a new wave of festivals, embracing alternative and electronic music. Lollapalooza, initially conceived by Perry Farrell of Jane's Addiction, embarked on a touring format, showcasing a diverse lineup. Meanwhile, the UK saw the emergence of festivals like Reading and Leeds, solidifying their status as annual staples for rock and alternative enthusiasts.",
  },
  {
    id: 4,
    title: "Glastonbury: A Pinnacle of Diversity (Since 1970)",
    description: "Nestled in the English countryside, Glastonbury Festival has become synonymous with diversity and innovation. Starting in 1970, Glastonbury has hosted an eclectic mix of artists, from rock legends to emerging talents. Michael Eavis, the festival's founder, envisioned Glastonbury as a space for artistic exploration, and today it stands as one of the world's most iconic festivals, drawing attendees from all walks of life.",
  },
  {
    id: 5,
    title: "The 2000s: Commercialization and Globalization",
    description: "As music festivals gained popularity, the 2000s witnessed a shift toward commercialization and globalization. Coachella Valley Music and Arts Festival in the U.S. became a cultural phenomenon, blending music, art, and fashion. Meanwhile, Tomorrowland in Belgium emerged as a mecca for electronic dance music (EDM) enthusiasts, showcasing the global reach of the festival culture.",
  },
  {
    id: 6,
    title: "Recent Years: Sustainability and Inclusivity",
    description: "In recent years, festivals have responded to growing environmental concerns and a demand for inclusivity. Events like Sweden's Way Out West and the UK's Green Man Festival prioritize sustainability, integrating eco-friendly practices and promoting social responsibility. Festivals are increasingly seen as platforms to address social issues and champion diversity.",
  },
  {
    id: 7,
    title: "The Future: Beyond Boundaries",
    description: "As we look to the future, music festivals continue to evolve, transcending geographical and cultural boundaries. Virtual festivals and livestreamed performances have become prevalent, offering a new dimension to the festival experience. The essence of community and shared musical passion, however, remains at the heart of these evolving celebrations of sound.",
  },
];

interface BlogItemProps {
  title: string;
  description: string;
}

function BlogItem({ title, description }: BlogItemProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p className="text-justify">{description}</p>
    </div>
  );
}

interface EvolutionOfMusicFestivalsProps {
  image: string;
}

export default function EvolutionOfMusicFestivals(props: EvolutionOfMusicFestivalsProps) {
  const [revealData, setRevealData] = useState<boolean>(false);

  return (
    <div className="m-auto mt-16 w-full min-w-[332px] max-w-[688px] items-center px-4 md:mx-auto md:mt-20 md:px-0 xl:max-w-[60%]">
      <img
        src={props.image}
        alt="Glastonbury sign with a crowd of people in front of it"
        width="1500"
        height="1000"
        onLoad={() => {
          setRevealData(true);
        }}
        className={`mt-10 rounded-lg transition duration-700 ${!revealData && "opacity-0"}`}
      />
      <div className="mb-20 flex flex-col gap-6">
        <h2 className="mt-10 text-4xl font-semibold ">The Evolution of Music Festivals: From Woodstock to Glastonbury</h2>
        <p className="text-justify">Music festivals, with their kaleidoscope of sound, culture, and communal celebration, have undergone a remarkable evolution since their inception. From the iconic Woodstock in the 1960s to the globally renowned Glastonbury in the UK, let's journey through the history of music festivals, exploring their evolution and the unique elements that define some of the most prominent gatherings.</p>
        {blogs.map((blog) => (
          <BlogItem key={blog.id} title={blog.title} description={blog.description} />
        ))}
        <p>In tracing the evolution of music festivals from Woodstock to Glastonbury and beyond, it becomes clear that these gatherings are not just about music—they are about cultural expression, social connection, and the unbridled joy of shared experiences. As festivals continue to shape and reflect the spirit of their times, one thing is certain: the music will always play on, echoing through the fields and stages that have become the vibrant landscapes of our collective memories.</p>
      </div>
    </div>
  );
}
