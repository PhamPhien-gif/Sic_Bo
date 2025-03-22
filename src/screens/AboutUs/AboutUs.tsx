import React from "react";

export const AboutUs = (): JSX.Element => {
  return (
    <div className="bg-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="space-y-6">
          <p className="text-lg text-gray-700">
            We are a team of passionate developers and designers dedicated to creating exceptional digital experiences. Our mission is to help businesses transform their ideas into reality through innovative technology solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To deliver world-class software solutions that empower businesses to achieve their goals and drive growth in the digital age.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading force in technological innovation, setting new standards in software development and digital transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};