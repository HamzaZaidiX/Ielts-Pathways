import React from "react";
import Slider, { Settings } from "react-slick";
import { Button } from "./ui/button";

type Country = {
  name: string;
  image: string;
  universities: string;
  tuition: string;
  workVisa: string;
};

const countries: Country[] = [
  {
    name: "UK",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg",
    universities: "130+ Universities",
    tuition: "$15K - $20K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "USA",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
    universities: "200+ Universities",
    tuition: "$20K - $30K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "Australia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Sydney_Opera_House_Sails.jpg",
    universities: "120+ Universities",
    tuition: "$15K - $25K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "New Zealand",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Auckland_skyline_-_May_2024_%282%29.jpg",
    universities: "50+ Universities",
    tuition: "$12K - $18K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "UAE",
    image: "https://upload.wikimedia.org/wikipedia/en/9/93/Burj_Khalifa.jpg",
    universities: "70+ Universities",
    tuition: "$10K - $20K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "Sweden",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/The_Royal_Palace_%2815891592359%29.jpg",
    universities: "40+ Universities",
    tuition: "$8K - $15K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "Finland",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Helsinki_July_2013-27a.jpg",
    universities: "35+ Universities",
    tuition: "$7K - $12K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "France",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    universities: "150+ Universities",
    tuition: "$12K - $20K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "Germany",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Brandenburger_Tor_abends.jpg",
    universities: "180+ Universities",
    tuition: "$5K - $10K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "Canada",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Toronto_-_ON_-_Toronto_Harbourfront7.jpg",
    universities: "100+ Universities",
    tuition: "$15K - $25K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "Ireland",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/St_Colman%27s_Cathedral%2C_Cobh.jpg",
    universities: "40+ Universities",
    tuition: "$10K - $18K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "Italy",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
    universities: "90+ Universities",
    tuition: "$8K - $15K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "Turkey",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/22/Hagia_Sophia_Mars_2013.jpg",
    universities: "100+ Universities",
    tuition: "$6K - $12K Annual Fees",
    workVisa: "02 - 04 Post study Work Visa",
  },
  {
    name: "Denmark",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/74/c2/dc/caption.jpg?w=1400&h=500&s=1",
    universities: "30+ Universities",
    tuition: "$8K - $14K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "Malaysia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Kl-skyline-at-night-2022.jpg",
    universities: "20+ Universities",
    tuition: "$6K - $10K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
  {
    name: "Cyprus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/Gymnasion_und_Therme_aus_S%C3%BCdwest.jpg",
    universities: "20+ Universities",
    tuition: "$6K - $10K Annual Fees",
    workVisa: "02 - 04 Post study work visa",
  },
    {
        name: "Singapore",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/8/81/Singapore_Merlion_BCT.jpg",
        universities: "20+ Universities",
        tuition: "$15K - $30K Annual Fees",
        workVisa: "02 - 04 Post study work visa",
    }
];

/* Custom arrow components */
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-3 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 items-center font-bold hover:bg-red-500 hover:text-white transition"
    >
      &rarr;
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-3 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 font-bold hover:bg-red-500 hover:text-white transition"
    >
      &larr;
    </button>
  );
};

const StudyAbroadCarousel: React.FC = () => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="study destinations" className="py-20 bg-secondary/30">
    <div className="py-12 px-6 relative">
      <h2 className="text-3xl font-bold text-center">Study Abroad</h2>
      <p className="text-center text-gray-600 mb-8">
        Explore our Consultancy Services for your Top Study Destinations Around the
        Globe
      </p>
        <a href="#study destinations" className="flex justify-end m-2 text-primary-hover hover:underline hover:decoration-wavy hover:underline-offset-4">See All Countries</a>
      <Slider {...settings}>
        {countries.map((country, index) => (
          <div key={index} className="px-3">
            <div className="relative w-full h-[500px] [perspective:1200px] group">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg [backface-visibility:hidden]">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-3 text-center text-lg font-semibold">
                    {country.name}
                  </div>
                </div>

                {/* Back with same image + overlay */}
                <div className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white text-center p-4">
                    <p className="text-xl font-bold">{country.universities}</p>
                    <p className="mt-2">{country.tuition}</p>
                    <p className="mt-2">{country.workVisa}</p>
                    <a href="#study destinations" className="mt-5 hover:scale-[1.2] hover:underline hover:text-primary transition hover:decoration-wavy hover:underline-offset-4">Explore Opportunities in {country.name} &rarr;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="text-center mt-10">
          <Button
            variant="outline"
            className="mt-10 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Book Consultancy With Us
          </Button>
      </div>
    </div>
    </section>
  );
};

export default StudyAbroadCarousel;
