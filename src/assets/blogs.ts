import orginaser from "../assets/images/organiser.png";
import fashion from "../assets/images/fashion.png";
import history from "../assets/images/history.png";
import albert from "../assets/images/albert.jpg";

interface Blog {
  title: string;
  image: string;
  description: string;
}

export const blogs: Blog[] = [
  {
    title: "Top 10 Must-See Concert Venues in the UK",
    image: albert,
    description: "Explore and showcase the best concert venues across the UK, detailing their unique features and the artists who have performed there.",
  },
  {
    title: "Behind the Scenes: A Day in the Life of a Concert Organizer",
    image: orginaser,
    description: "Provide an insider’s perspective on what it takes to organize a successful concert, including interviews with organizers and behind-the-scenes glimpses.",
  },
  {
    title: "Concert Fashion: Styling Tips for Your Next Gig",
    image: fashion,
    description: "Provide fashion inspiration and advice for concert-goers, suggesting trendy and comfortable outfits suitable for different types of concerts and venues.",
  },
  {
    title: "The Evolution of Music Festivals: From Woodstock to Glastonbury",
    image: history,
    description: "Trace the history of music festivals, focusing on how they have evolved over the years and the unique aspects of prominent festivals in the UK.",
  },
];
