import React from 'react';

const CircularProgressBar = ({ sec,progress }) => {
  // Calculate the path length based on the progress (0-100)
  const pathLength = 2 * Math.PI * 25; // 25 is the radius of the circle

  // Calculate the offset based on the progress
  const offset = ((100 - progress) / 100) * pathLength;

  return (
    <svg className="w-16 h-16">
      <circle
        className="fill-transparent stroke-current stroke-2 text-blue-500"
        r="25"
        cx="30"
        cy="30"
        strokeWidth="2"
        strokeDasharray={pathLength}
        strokeDashoffset={offset}
      />
      <text
        x="30"
        y="30"
        textAnchor="middle"
        dominantBaseline="central"
        className="text-blue-500"
        fontSize="12"
      >
        {sec}s
      </text>
    </svg>
  );
};

export default CircularProgressBar;
