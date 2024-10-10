import { NavLink } from "react-router-dom";
import { blogs } from "../assets/blogs";
import { useRef, useEffect, useState } from "react";

export default function BlogMainPage(): JSX.Element {
  const blog1Ref = useRef<HTMLAnchorElement | null>(null);
  const blog2Ref = useRef<HTMLAnchorElement | null>(null);

  const [blog1Visible, setBlog1Visible] = useState<boolean>(false);
  const [blog2Visible, setBlog2Visible] = useState<boolean>(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0].isIntersecting;
      entry && setBlog1Visible(true);
    });

    const observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0].isIntersecting;
      entry && setBlog2Visible(true);
    });

    blog1Ref.current && observer1.observe(blog1Ref.current);
    blog2Ref.current && observer2.observe(blog2Ref.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  return (
    <div className="m-auto my-16 flex w-full min-w-[332px] max-w-[688px] flex-col items-center px-4 md:mx-auto md:my-36 md:px-0 xl:max-w-[60%]">
      <h2 className="w-full pb-8 text-xl md:pb-16 lg:text-4xl">Visit our blog</h2>
      <NavLink ref={blog1Ref} to="blog/behind_the_scenes" className={`group mb-8 flex flex-col gap-2 border-b-2 pb-8 transition duration-1000 ease-out xl:flex-row ${!blog1Visible && "translate-y-16 opacity-0"}`}>
        <div>
          <img src={blogs[1].image} width="1920" height="1080" loading="lazy" className="rounded-lg lg:min-w-[30rem]" />
        </div>
        <div className="flex flex-col gap-2 lg:justify-end xl:gap-8 xl:pl-3">
          <h3 className="text-xl font-semibold">{blogs[1].title}</h3>
          <p className="">{blogs[1].description}</p>
          <p className="font-semibold md:group-hover:underline">Read more</p>
        </div>
      </NavLink>
      <NavLink ref={blog2Ref} to="blog/concert_fashion" className={`group flex flex-col gap-2 pb-8 transition duration-1000 ease-out md:mb-8 xl:flex-row ${!blog2Visible && "translate-y-16 opacity-0"}`}>
        <div>
          <img src={blogs[2].image} width="1920" height="1080" loading="lazy" className="rounded-lg lg:min-w-[30rem]" />
        </div>
        <div className="flex flex-col gap-2 lg:justify-end xl:gap-8 xl:pl-3">
          <h3 className="text-xl font-semibold">{blogs[2].title}</h3>
          <p className="">{blogs[2].description}</p>
          <p className="font-semibold md:group-hover:underline">Read more</p>
        </div>
      </NavLink>
      <button className="h-11 w-36 rounded-lg bg-black text-white">
        <NavLink to="blog">Visit our blog</NavLink>
      </button>
    </div>
  );
}
