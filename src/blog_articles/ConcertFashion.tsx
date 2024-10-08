import { useState } from "react";

interface Blog {
  id: number;
  title: string;
  description: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "1. Music Festival Vibes",
    description: "If you're heading to a music festival, embrace the bohemian spirit with a flowy maxi dress, a pair of comfortable ankle boots, and a wide-brimmed hat. Don't forget to accessorize with layered bracelets and statement sunglasses. Opt for lightweight, breathable fabrics to keep you cool while dancing to your favorite tunes in the sun.",
  },
  {
    id: 2,
    title: "2. Rock Concert Edge",
    description: "For a classic rock concert, channel your inner rock star with a leather jacket paired with a graphic band tee. Combine it with distressed jeans and ankle boots for an edgy look. Add some bold accessories like studded belts or chunky necklaces to complete the rock-inspired ensemble. This timeless style is perfect for a night of headbanging and guitar solos.",
  },
  {
    id: 3,
    title: "3. Indie and Acoustic Casual Chic",
    description: "For indie or acoustic performances in more intimate venues, go for a laid-back yet stylish outfit. Try high-waisted jeans paired with a tucked-in oversized shirt or a cozy sweater. Sneakers or ankle boots will keep you comfortable if you find yourself swaying to the soothing melodies of acoustic tunes. Finish the look with minimal accessories for a touch of effortless cool.",
  },
  {
    id: 4,
    title: "4. Pop Extravaganza Glam",
    description: "If you're attending a pop concert with a flair for the dramatic, embrace the glam side of fashion. Sequined skirts, metallic leggings, or statement jumpsuits are excellent choices. Pair them with heels or stylish ankle boots for a touch of sophistication. Add some sparkle with bold earrings or a glittery clutch to ensure you shine as bright as the stage lights.",
  },
  {
    id: 5,
    title: "5. Electronic Dance Music (EDM) Rave Ready",
    description: "For an EDM concert or rave, opt for vibrant and neon colors to stand out in the crowd. High-waisted shorts or leggings paired with a crop top or a bodysuit will keep you cool while you dance the night away. Comfortable sneakers are a must, and don't forget to accessorize with glow-in-the-dark jewelry and face paint for that extra rave-ready touch.",
  },
  {
    id: 6,
    title: "6. Country Charm",
    description: "If you're attending a country concert, embrace the rustic charm with denim, plaid, and cowboy boots. A denim jacket over a sundress or a pair of well-fitted jeans with a classic button-down shirt can create a stylish country-inspired look. Finish it off with a wide-brimmed hat to shield yourself from the sun during outdoor performances.",
  },
  {
    id: 7,
    title: "7. All-Weather Essentials",
    description: "Regardless of the concert genre, always be prepared for changing weather conditions. Bring a stylish jacket or a light sweater that complements your outfit. A crossbody bag is practical for keeping your essentials close while dancing, and don't forget sunglasses for daytime events or outdoor venues.",
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

interface ConcertFashionProps {
  image: string;
}

export default function ConcertFashion(props: ConcertFashionProps) {
  const [revealData, setRevealData] = useState<boolean>(false);

  return (
    <div className="m-auto mt-16 w-full min-w-[332px] max-w-[688px] items-center px-4 md:mx-auto md:mt-20 md:px-0 xl:max-w-[60%]">
      <img
        src={props.image}
        alt="Three friends walking side by side thourgh a music festival field"
        width="1500"
        height="1000"
        onLoad={() => {
          setRevealData(true);
        }}
        className={`mt-10 rounded-lg transition duration-700 ${!revealData && "opacity-0"}`}
      />
      <div className="mb-20 flex flex-col gap-6">
        <h2 className="mt-10 text-4xl font-semibold ">Concert Fashion: Styling Tips for Your Next Gig</h2>
        <p className="text-justify">Attending a concert is not just about the music; it's an opportunity to express your style and immerse yourself in the energy of the event. Whether you're rocking out at a music festival or enjoying a laid-back acoustic performance, finding the right outfit can enhance your overall concert experience. Let's explore some stylish and comfortable fashion tips for your next gig.</p>
        {blogs.map((blog) => (
          <BlogItem key={blog.id} title={blog.title} description={blog.description} />
        ))}
        <p>Remember, the key to the perfect concert outfit is to strike a balance between style and comfort. Whether you're dancing in a field at a festival or seated in a cozy venue, let your outfit reflect your personality and make your concert experience even more memorable. Now, go ahead and rock your style at the next gig!</p>
      </div>
    </div>
  );
}
