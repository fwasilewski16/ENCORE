import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "1. Royal Albert Hall, London",
    location: "Location: Kensington, London",
    description: "The Royal Albert Hall is a masterpiece of Victorian architecture and a symbol of London's cultural scene. With its iconic dome and stunning acoustics, this venue has hosted everyone from The Beatles to Adele. Experience the magic of live music surrounded by elegance and history.",
  },
  { id: 2, title: "2. The O2 Arena, London", location: "Location: Greenwich Peninsula, London", description: "The O2 Arena, located in the iconic Millennium Dome, is one of the largest and most dynamic arenas in the world. Hosting mega-concerts and events, it's the go-to venue for international superstars. The sheer scale of The O2 creates an electric atmosphere for fans and artists alike." },
  { id: 3, title: "3. Manchester Arena, Manchester", location: "Location: Victoria Station, Manchester", description: "As one of the largest indoor arenas in Europe, Manchester Arena has welcomed a myriad of artists across genres. Its central location in Manchester makes it a hub for music enthusiasts. The arena's modern design and state-of-the-art facilities enhance the concert-going experience." },
  { id: 4, title: "4. Glasgow Barrowland Ballroom, Glasgow", location: "Location: Gallowgate, Glasgow", description: "Known for its legendary dance floor, the Glasgow Barrowland Ballroom is an iconic venue steeped in history. Hosting both emerging and established acts, the venue exudes a unique charm. The ballroom's intimate setting allows for an up-close and personal connection between artists and fans." },
  { id: 5, title: "5. Brixton Academy, London", location: "Location: Brixton, London", description: "Brixton Academy is synonymous with intimate yet electrifying performances. Nestled in the vibrant Brixton neighborhood, this venue has witnessed historic gigs from Nirvana to The Smiths. Its sloping floor and excellent sightlines ensure an immersive experience for every attendee." },
  { id: 6, title: "6. SSE Hydro, Glasgow", location: "Location: Finnieston, Glasgow", description: "A modern architectural marvel, the SSE Hydro is a striking addition to Glasgow's skyline. This state-of-the-art arena hosts international concerts, sporting events, and more. Its distinctive design, resembling a giant spaceship, adds a futuristic touch to the city's entertainment landscape." },
  { id: 7, title: "7. Wembley Stadium, London", location: "Location: Wembley, London", description: "While primarily known for its sporting events, Wembley Stadium is also a colossal concert venue. Hosting iconic performances from Queen's legendary Live Aid show to recent global pop sensations, the stadium's vastness amplifies the grandeur of any musical event." },
  { id: 8, title: "8. The Sage Gateshead, Gateshead", location: "Location: Gateshead Quays, Gateshead", description: "The Sage Gateshead is a stunning architectural gem overlooking the River Tyne. Known for its exceptional acoustics, this concert hall embraces a diverse range of genres, from classical to contemporary. The venue's commitment to musical diversity makes it a cultural hub for all." },
  { id: 9, title: "9. Roundhouse, London", location: "Location: Chalk Farm, London", description: "Originally a railway engine shed, the Roundhouse has transformed into a cutting-edge performing arts venue. Hosting concerts, theater productions, and more, it retains its distinctive structure. The venue's commitment to fostering creativity makes it a vital space in London's cultural landscape." },
  { id: 10, title: "10. Edinburgh Castle Esplanade, Edinburgh", location: "Location: Castlehill, Edinburgh", description: "For a truly unique concert experience, Edinburgh Castle Esplanade offers stunning views and a historic backdrop. The annual Edinburgh Military Tattoo is a highlight, but the esplanade has also welcomed international musical acts, turning the castle into a spectacular stage." },
];

function BlogItem(props) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-semibold">{props.title}</h3>
      <p className="font-semibold">{props.location}</p>
      <p className="text-justify">{props.description}</p>
    </div>
  );
}

export default function TopTenVenues(props) {
  const [revealData, setRevealData] = useState(false);

  return (
    <div className="m-auto mt-16 w-full min-w-[332px] max-w-[688px] items-center px-4 md:mx-auto md:mt-20 md:px-0 xl:max-w-[60%]">
      <img
        src={props.image}
        width="1920"
        height="1080"
        onLoad={() => {
          setRevealData(true);
        }}
        className={`mt-10 rounded-lg transition duration-700 ${!revealData && "opacity-0"}`}
      />
      <div className="mb-20 flex flex-col gap-6">
        <h2 className="mt-10 text-4xl font-semibold ">Top 10 Must-See Concert Venues in the UK</h2>
        <p className="text-justify">The United Kingdom boasts a rich musical heritage and is home to some of the world's most iconic concert venues. From historic theaters to cutting-edge arenas, these spaces have witnessed legendary performances by global artists. Join us as we explore the top 10 must-see concert venues in the UK, each with its unique features and a history of unforgettable musical moments.</p>
        {blogs.map((blog) => (
          <BlogItem key={blog.id} title={blog.title} location={blog.location} description={blog.description} />
        ))}
        <p>The UK's concert venues are not just spaces for music; they are cultural landmarks that contribute to the nation's artistic tapestry. Whether you seek the grandeur of Wembley Stadium or the intimacy of the Roundhouse, each venue offers a distinct experience. Explore these iconic spaces and witness the magic of live music in the heart of the United Kingdom.</p>
      </div>
    </div>
  );
}
