import React from 'react';
import { useState,useEffect,useRef } from "react";
import {
	BsFillArrowRightCircleFill,
	BsFillArrowLeftCircleFill,
  } from "react-icons/bs";
interface Props {
	slides: string[]
}

const Slider: React.FC<Props> = (props) => {
	const {slides}= props;
	const autoplayDelay =3000;
	let [current, setCurrent] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	useEffect(() => {
		
		startAutoplay();
		return () => stopAutoplay();
	  }, [slides.length, autoplayDelay]);
	let previousSlide = () => {
		stopAutoplay();
	  if (current === 0) setCurrent(slides.length - 1);
	  else setCurrent(current - 1);
	  startAutoplay();
	};
	const startAutoplay = () => {
		intervalRef.current = setInterval(() => {
		  setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
		}, autoplayDelay);
	  };
	  const stopAutoplay = () => {
		if (intervalRef.current) {
		  clearInterval(intervalRef.current);
		  intervalRef.current = null;
		}
	  };

	let nextSlide = () => {
		stopAutoplay();
	  if (current === slides.length - 1) setCurrent(0);
	  else setCurrent(current + 1);
	  startAutoplay();
	};
  
	return (
	  <div className=" relative h-96 w-full overflow-hidden">
		<div
		  className={`flex transition ease-out duration-40 h-full  w-full`}
		  style={{
			transform: `translateX(-${current * 100}%)`,
		  }}
		>
		  {slides.map((s,index) => {
			return <img src={s} key={index} className='flex-shrink-0 w-full h-full ' alt='...'/>;
		  })}
		</div>
  
		<div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
		  <button onClick={previousSlide}>
			<BsFillArrowLeftCircleFill />
		  </button>
		  <button onClick={nextSlide}>
			<BsFillArrowRightCircleFill />
		  </button>
		</div>
  
		<div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
		  {slides.map((s, i) => {
			return (
			  <div
				onClick={() => {
				  setCurrent(i);
				}}
				key={"circle" + i}
				className={`rounded-full w-5 h-5 cursor-pointer  ${
				  i === current ? "bg-white" : "bg-gray-500"
				}`}
			  ></div>
			);
		  })}
		</div>
	  </div>
  );
};

export default Slider;
