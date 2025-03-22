import React from "react";
import { useTranslation } from "react-i18next";

export const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 md:px-[148px] py-12">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We are dedicated to delivering exceptional software solutions that empower businesses 
            to thrive in the digital age. Our team of expert developers works tirelessly to 
            transform your ideas into reality.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the leading software development company that sets industry standards for 
            innovation, quality, and customer satisfaction. We strive to create technology 
            solutions that make a positive impact on businesses and society.
          </p>
        </div>
        <div className="space-y-6">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
            <p className="text-gray-600">Our team consists of highly skilled professionals with 
            diverse expertise in various technologies and domains.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Quality First</h3>
            <p className="text-gray-600">We maintain the highest standards of quality in every 
            project we undertake, ensuring robust and scalable solutions.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">We stay at the forefront of technology, constantly 
            exploring new ways to solve complex problems.</p>
          </div>
        </div>
      </div>
    </div>
  );
};