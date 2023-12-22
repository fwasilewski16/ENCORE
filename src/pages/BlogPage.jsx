import { NavLink } from "react-router-dom";
import { blogs } from "../assets/blogs";
import { useEffect, useState, useRef } from "react";

function BlogSingle(props) {
  return (
    <NavLink to={props.to} className="group flex border-b-2 pb-8 xl:flex-col-reverse xl:justify-end xl:border-b-0 xl:pb-0">
      <div className="flex min-w-[70%] flex-col pr-2 xl:pr-0 ">
        <h3 className="text-lg font-semibold xl:min-h-[84px]">{props.title}</h3>
        <p className=" xl:min-h-[144px]">{props.description}</p>
        <p className="font-semibold group-hover:underline">Read more</p>
      </div>
      <div className="min-w-[30%]">
        <img src={props.image} width="1500" height="1000" className="h-full object-cover" />
      </div>
    </NavLink>
  );
}

export default function BlogPage() {
  const myRef = useRef();

  const [revealData, setRevealData] = useState(false);
  const [blogVisible, setBlogVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0].isIntersecting;
      entry && setBlogVisible(true);
    });
    window.scrollTo(0, 0);
    observer.observe(myRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div className="h-screen min-w-[332px] overflow-hidden">
        <div>
          <img
            src={blogs[0].image}
            onLoad={() => {
              setRevealData(true);
            }}
            className={`h-screen w-full object-cover transition duration-700 ${!revealData && "opacity-0"}`}
          />
        </div>
        <NavLink to="top_10_venues" className="absolute bottom-0 left-0 right-0 top-0 z-30 flex min-w-[100px] items-center justify-center">
          <div className={`mx-4 flex min-w-[100px] flex-col gap-3 rounded-3xl bg-black bg-opacity-50 p-6 font-serif transition ${!revealData && "translate-y-8 opacity-0"} text-white backdrop-blur-sm duration-500`}>
            <h2 className="text-center text-2xl lg:text-4xl">{blogs[0].title}</h2>
            <p className="hidden text-center lg:block">{blogs[0].description}</p>
          </div>
        </NavLink>
      </div>
      <div ref={myRef} className={`mt-20 flex flex-col gap-8 px-10 pb-4 transition duration-1000 xl:mx-auto xl:mb-8 xl:flex-row xl:gap-6 xl:pb-8 2xl:max-w-[80%] ${!blogVisible && "translate-y-16 opacity-0"}`}>
        <BlogSingle image={blogs[1].image} title={blogs[1].title} description={blogs[1].description} to={"behind_the_scenes"} />
        <BlogSingle image={blogs[2].image} title={blogs[2].title} description={blogs[2].description} to={"concert_fashion"} />
        <BlogSingle image={blogs[3].image} title={blogs[3].title} description={blogs[3].description} to={"evolution_of_music_festivals"} />
      </div>
    </div>
  );
}
