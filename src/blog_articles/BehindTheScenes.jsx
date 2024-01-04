import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "1. The Early Stages: Concept and Planning",
    description: "The journey begins with a concept. Organizers brainstorm themes, potential artists, and suitable venues. It's a delicate balance between artistic vision and logistical feasibility. We spoke with Sarah Anderson, a veteran concert organizer, who emphasized the importance of aligning the artist's style with the venue's ambiance to create a harmonious experience",
  },
  {
    id: 2,
    title: "2. Securing Talent: Negotiations and Contracts",
    description: "Once the vision is clear, organizers dive into negotiations with artists and their management teams. This involves not only financial discussions but also aligning schedules and technical requirements. Jessica Turner, a talent coordinator with over a decade of experience, shared, 'Communication is key. Understanding the artist's needs and expectations is crucial for a smooth collaboration.'",
  },
  {
    id: 3,
    title: "3. Logistics and Technicalities: Setting the Stage",
    description: "From sound checks to stage design, every detail matters. Behind the scenes, a team of professionals meticulously plans the technical aspects of the concert. Mark Reynolds, a production manager, highlighted the intricacies involved in ensuring that everything, from lighting to audio equipment, is in perfect harmony.",
  },
  {
    id: 4,
    title: "4. Promotion and Marketing: Creating Buzz",
    description: "Organizers understand the importance of creating a buzz around the event. Social media campaigns, partnerships with influencers, and traditional advertising play a pivotal role in filling the venue. We spoke with Lisa Martinez, a marketing specialist, who shared insights into crafting compelling narratives to captivate the audience.",
  },
  {
    id: 5,
    title: "5. The Big Day Arrives: Coordination and Execution",
    description: "As the big day approaches, the behind-the-scenes activity reaches a fever pitch. Coordination is paramount. Backstage, artists prepare, technical crews fine-tune equipment, and organizers ensure that every element is in place. Emma Thompson, an event coordinator, described the atmosphere as a mix of excitement and controlled chaos.",
  },
  {
    id: 6,
    title: "6. Dealing with the Unexpected: Crisis Management",
    description: "Despite meticulous planning, unforeseen challenges can arise. Weather, technical glitches, or artist-related issues require quick thinking. John Harris, a seasoned concert organizer, shared stories of last-minute problem-solving and emphasized the importance of staying calm under pressure.",
  },
  {
    id: 7,
    title: "7. The Aftermath: Reflection and Feedback",
    description: "Once the final notes have faded, organizers reflect on the event's success and gather feedback. Post-concert meetings involve analyzing what worked well and identifying areas for improvement. It's a continuous learning process, and organizers are always seeking ways to enhance future events.",
  },
  {
    id: 8,
    title: "8. The Unsung Heroes: Event Staff and Volunteers",
    description: "Behind every successful concert are dedicated individuals working tirelessly behind the scenes. From security personnel to volunteers, their contributions are invaluable. We spoke with Rachel Brown, a long-time event staff member, who shared the camaraderie that develops among the team during the chaos of a live event.",
  },
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

export default function BehindTheScenes(props) {
  const [revealData, setRevealData] = useState(false);

  return (
    <div className="m-auto mt-16 w-full min-w-[332px] max-w-[688px] items-center px-4 md:mx-auto md:mt-20 md:px-0 xl:max-w-[60%]">
      <img
        src={props.image}
        width="1500"
        height="1000"
        onLoad={() => {
          setRevealData(true);
        }}
        className={`mt-10 rounded-lg transition duration-700 ${!revealData && "opacity-0"}`}
      />
      <div className="mb-20 flex flex-col gap-6">
        <h2 className="mt-10 text-4xl font-semibold ">Behind the Scenes: A Day in the Life of a Concert Organizer</h2>
        <p className="text-justify">Organizing a concert is no small feat. Behind the dazzling lights, booming music, and cheering crowds lies a meticulous process that involves months of planning, coordination, and dedication. Join us for an insider's perspective as we take you behind the scenes into the bustling world of concert organizing. We've interviewed seasoned organizers and captured glimpses of what it truly takes to bring a live musical experience to fruition.</p>
        {blogs.map((blog) => (
          <BlogItem key={blog.id} title={blog.title} location={blog.location} description={blog.description} />
        ))}
        <p>In conclusion, organizing a concert is a labor of love that requires passion, attention to detail, and a resilient spirit. The individuals behind the scenes work tirelessly to create memorable experiences for audiences worldwide. The next time you attend a concert, take a moment to appreciate the intricate dance happening behind the curtains, making the magic on stage possible.</p>
      </div>
    </div>
  );
}
