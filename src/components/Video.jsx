import React from 'react';

const videos = [
  {
    id: 'GAleNZzmPNc',
    title: 'Sharp Stereo Cassette Player: Full Restoration',
  },
  {
    id: 'dKRhJ-LpSAU',
    title: 'Restoration Part 2',
  },
  {
    id: 'jZywk7N8gIU',
    title: 'Restoration Part 3',
  },
];

function Video() {
  return (
    <section
      id="videos"
      className="bg-gradient-to-br from-black to-gray-900 via-black text-white py-20 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          My{' '}
          <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
            Videos
          </span>
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Check out my latest tech repair and restoration videos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {videos.map((video) => (
          <div
            key={video.id}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-400/50 transition-shadow duration-300"
          >
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="p-4 text-lg font-semibold bg-gray-900">{video.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Video;
