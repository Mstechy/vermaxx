'use client';
import React from 'react';

const avatars = [
  { image: '/avatars/sarahjohnson.jpg', name: 'Sarah Johnson', url: 'https://github.com/sarahjohnson' },
  { image: '/avatars/mikechen.jpg', name: 'Mike Chen', url: 'https://linkedin.com/in/mikechen' },
];

export default function AvatarGrid() {
  return (
    <div className="flex gap-6 justify-center flex-wrap">
      {avatars.map((avatar) => (
        <a
          key={avatar.name}
          href={avatar.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center transform transition-transform hover:scale-110"
        >
          <img
            src={avatar.image}
            alt={avatar.name}
            className="w-24 h-24 rounded-full object-cover border-2 border-vermaxx-green"
          />
          <p className="mt-2 text-sm font-medium">{avatar.name}</p>
        </a>
      ))}
    </div>
  );
}