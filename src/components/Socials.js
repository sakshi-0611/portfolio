import React from "react";
import { socials } from "../data/socials"; // Import the socials data

export default function FindMeAt() {
  return (
    <section id="socials">
      <div className="container px-5 py-10 mx-auto text-center">
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Socials
        </h1>
        <div className="flex flex-wrap m-4">
          {socials.map((social) => (
            <div className="p-2 md:w-1/3 w-full" key={social.name}>
              <div className={`h-full bg-gray-800 bg-opacity-40 p-8 rounded text-${social.color}`}>
                <img
                  alt={`${social.name} logo`}
                  src={social.logo}
                  className="block w-32 mx-auto mb-4"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <p className="leading-relaxed mb-4">
                  { social.desc }
                </p>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`bg-${social.color}-500 text-white px-4 py-2 rounded hover:bg-${social.color}-600`}
                  >
                    {social.name}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
