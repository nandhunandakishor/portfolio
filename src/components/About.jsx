import React from 'react';

function About() {
  return (
    <div
      id="about"
      className="bg-gradient-to-br via-black from-gray-900 to-black text-white py-24 px-4 md:px-10 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">
          About{' '}
          <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
          I’m <span className="text-white font-semibold">Nandakishor</span>, a versatile{' '}
          <span className="text-green-400 font-medium">Full-Stack Developer</span> skilled in{' '}
          <span className="text-blue-400">React, Django, MySQL</span>, and more. I'm also a{' '}
          <span className="text-yellow-300 font-medium">Mobile Service Engineer</span> and a{' '}
          <span className="text-red-400 font-medium">Tech Content Creator</span> on YouTube. I love
          turning ideas into real, working solutions that help people.
        </p>

        <p className="text-gray-400 text-md leading-relaxed mb-14 max-w-2xl mx-auto">
          I blend development, electronics, and storytelling to make tech accessible and useful. Whether
          it's building web apps, fixing phones, or explaining tech to thousands of viewers — I do it with
          passion and precision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 border border-white/10">
            <h3 className="text-xl font-semibold text-green-400 mb-2">
              Full-Stack Developer
            </h3>
            <p className="text-gray-300 text-sm">
              I build fast, scalable web apps using modern technologies like React, Django, and MySQL.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-yellow-400/40 hover:scale-105 transition-all duration-300 border border-white/10">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              Mobile Engineer
            </h3>
            <p className="text-gray-300 text-sm">
              I diagnose and repair smartphones with expert-level precision and dedication.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-red-400/40 hover:scale-105 transition-all duration-300 border border-white/10">
            <h3 className="text-xl font-semibold text-red-400 mb-2">
              Content Creator
            </h3>
            <p className="text-gray-300 text-sm">
              I simplify tech topics and mobile repair tutorials for thousands on YouTube.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
