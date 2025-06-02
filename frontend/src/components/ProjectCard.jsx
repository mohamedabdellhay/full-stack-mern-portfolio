import React from "react";

export default function ProjectCard({ callout }) {
  return (
    <>
      <div key={callout.name} className="group relative">
        <img
          alt={callout.imageAlt}
          src={callout.imageSrc}
          className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
        />
        <h3 className="mt-6 text-sm text-gray-500">
          <a href={callout.href}>
            <span className="absolute inset-0" />
            {callout.name}
          </a>
        </h3>
        <p className="text-base font-semibold text-gray-900">
          {callout.description}
        </p>
      </div>
    </>
  );
}
