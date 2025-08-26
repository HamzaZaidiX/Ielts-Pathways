import React, { useState } from "react";

type University = {
  name: string;
  logo: string;
  country: string;
};

const universities: University[] = [
  {
    name: "University of Oxford",
    logo: "https://logo.clearbit.com/ox.ac.uk",
    country: "UK",
  },
  {
    name: "University of Cambridge",
    logo: "https://logo.clearbit.com/cam.ac.uk",
    country: "UK",
  },
  {
    name: "Harvard University",
    logo: "https://logo.clearbit.com/harvard.edu",
    country: "USA",
  },
  {
    name: "Stanford University",
    logo: "https://logo.clearbit.com/stanford.edu",
    country: "USA",
  },
  {
    name: "University of Toronto",
    logo: "https://logo.clearbit.com/utoronto.ca",
    country: "Canada",
  },
  {
    name: "McGill University",
    logo: "https://logo.clearbit.com/mcgill.ca",
    country: "Canada",
  },
  {
    name: "University of Melbourne",
    logo: "https://logo.clearbit.com/unimelb.edu.au",
    country: "Australia",
  },
  {
    name: "Monash University",
    logo: "https://logo.clearbit.com/monash.edu",
    country: "Australia",
  },
  {
    name: "University of Copenhagen",
    logo: "https://logo.clearbit.com/ku.dk",
    country: "Europe",
  },
  {
    name: "ETH Zurich",
    logo: "https://logo.clearbit.com/ethz.ch",
    country: "Europe",
  },
  {
    name: "University of Edinburgh",
    logo: "https://logo.clearbit.com/ed.ac.uk",
    country: "UK",
  },
  {
    name: "Columbia University",
    logo: "https://logo.clearbit.com/columbia.edu",
    country: "USA",
  },
  {
    name: "University of British Columbia",
    logo: "https://logo.clearbit.com/ubc.ca",
    country: "Canada",
  },
  {
    name: "Australian University",
    logo: "https://logo.clearbit.com/anu.edu.au",
    country: "Australia",
  },
  {
    name: "Lund University",
    logo: "https://logo.clearbit.com/lunduniversity.lu.se",
    country: "Europe",
  },
  {
    name: "King's College London",
    logo: "https://logo.clearbit.com/kcl.ac.uk",
    country: "UK",
  },
  {
    name: "University of Michigan",
    logo: "https://logo.clearbit.com/umich.edu",
    country: "USA",
  },
  {
    name: "University of Alberta",
    logo: "https://logo.clearbit.com/ualberta.ca",
    country: "Canada",
  },
  {
    name: "University of Sydney",
    logo: "https://logo.clearbit.com/sydney.edu.au",
    country: "Australia",
  },
  {
    name: "University of Amsterdam",
    logo: "https://logo.clearbit.com/uva.nl",
    country: "Europe",
  },
  {
    name: "London School of Economics",
    logo: "https://logo.clearbit.com/lse.ac.uk",
    country: "UK",
  },
  {
    name: "New York University",
    logo: "https://logo.clearbit.com/nyu.edu",
    country: "USA",
  },
  {
    name: "University of Waterloo",
    logo: "https://logo.clearbit.com/uwaterloo.ca",
    country: "Canada",
  },
  {
    name: "University of Queensland",
    logo: "https://logo.clearbit.com/uq.edu.au",
    country: "Australia",
  },
  {
    name: "Heidelberg University",
    logo: "https://logo.clearbit.com/uni-heidelberg.de",
    country: "Europe",
  },
  {
    name: "University of Manchester",
    logo: "https://logo.clearbit.com/manchester.ac.uk",
    country: "UK",
  },
  {
    name: "University of California, Berkeley",
    logo: "https://logo.clearbit.com/berkeley.edu",
    country: "USA",
  },
  {
    name: "University of Ottawa",
    logo: "https://logo.clearbit.com/uottawa.ca",
    country: "Canada",
  },
  {
    name: "Curtin University",
    logo: "https://logo.clearbit.com/curtin.edu.au",
    country: "Australia",
  },
  {
    name: "University of Helsinki",
    logo: "https://logo.clearbit.com/helsinki.fi",
    country: "Europe",
  },
  {
    name: "University of Bristol",
    logo: "https://logo.clearbit.com/bristol.ac.uk",
    country: "UK",
  },
  {
    name: "University of Illinois Urbana-Champaign",
    logo: "https://logo.clearbit.com/illinois.edu",
    country: "USA",
  },
  {
    name: "Queen's University",
    logo: "https://logo.clearbit.com/queensu.ca",
    country: "Canada",
  },
  {
    name: "Deakin University",
    logo: "https://logo.clearbit.com/deakin.edu.au",
    country: "Australia",
  },
  {
    name: "University of Vienna",
    logo: "https://logo.clearbit.com/univie.ac.at",
    country: "Europe",
  },
  {
    name: "University of Glasgow",
    logo: "https://logo.clearbit.com/glasgow.ac.uk",
    country: "UK",
  },
  {
    name: "University of Texas at Austin",
    logo: "https://logo.clearbit.com/utexas.edu",
    country: "USA",
  },
  {
    name: "RMIT University",
    logo: "https://logo.clearbit.com/rmit.edu.au",
    country: "Australia",
  },
];

// Flags + country mapping
const countries = [
  {
    name: "All",
    code: "all",
    flag: "https://cdn-icons-png.flaticon.com/128/9985/9985721.png",
  },
  { name: "UK", code: "gb", flag: "https://flagcdn.com/h20/gb.png" },
  { name: "Canada", code: "ca", flag: "https://flagcdn.com/h20/ca.png" },
  { name: "USA", code: "us", flag: "https://flagcdn.com/h20/us.png" },
  { name: "Australia", code: "au", flag: "https://flagcdn.com/h20/au.png" },
  { name: "Europe", code: "eu", flag: "https://flagcdn.com/h20/eu.png" },
];

const UniversityPartners: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("All");

  const filteredUnis =
    selectedCountry === "All"
      ? universities
      : universities.filter((u) => u.country === selectedCountry);

  return (
    <section
      id="university-partners"
      className="py-20 overflow-hidden bg-secondary/30 bg-[url(/src/assets/universities-section-bg.png)] bg-cover bg-center bg-no-repeat"
    >
      <div className="px-6">
        <h2 className="text-3xl font-bold text-center">
          Popular And Partner Universities
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Universities And Institutions We Serve
        </p>

        {/* Country Filter with Flags */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 select-none cursor-pointer">
          {countries.map((country) => (
            <button
              key={country.name}
              onClick={() => setSelectedCountry(country.name)}
              className={`flex flex-row items-center gap-2 text-sm font-semibold transition ${
                selectedCountry === country.name
                  ? "text-red-600 font-bold"
                  : "text-gray-600"
              }`}
            >
              <div className="w-12 h-12 flex flex-row items-center font-semibold justify-center rounded-full bg-white shadow-md text-2xl">
                <img
                  className="w-10 h-10 rounded-full object-fill"
                  src={country.flag}
                  alt={country.code}
                  onError={(e) =>
                    ((e.target as HTMLImageElement).src =
                      "https://placehold.co/100")
                  }
                />
              </div>
              {country.name}
            </button>
          ))}
        </div>

        {/* Grid View for Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 select-none cursor-pointer">
          {filteredUnis.map((uni, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition"
            >
              <img
                src={uni.logo}
                alt={uni.name}
                className="w-20 h-20 object-contain mb-3 rounded-lg"
                onError={(e) =>
                  ((e.target as HTMLImageElement).src =
                    "https://placehold.co/100")
                }
              />
              <p className="text-center text-sm font-semibold">{uni.name}</p>
            </div>
          ))}
          <a href="#university-partners" className="flex flex-nowrap mr-5 mt-5 text-center hover:underline hover:text-primary transition hover:decoration-wavy hover:underline-offset-4">See more Universities Partners With Us &rarr;</a>
           
        </div>
               
      </div>
    </section>
  );
};

export default UniversityPartners;
