"use client"
import React from 'react'

export default function Benefits() {
  return (
    <div>
      <section className='py-16 bg-gray-50 dark:bg-gray-900'>
        <div className='container  mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>Benefits of Rudrakha</h2>
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">  
            {[
              {
                title: 'Spiritual Growth',
                description: "Enhances meditation and spiritual practices by creating a shield of protection."
              },
              {
                title: 'Mental Peace',
                description: "Enhances meditation and spiritual practices by creating a shield of protection."
              },
              {
                title: 'Divine Protection',
                description: "Provides spiritual protection and positive energy in daily life."
              },        
              {
                title: "Health Benefits",
                description: "Supports cardiovascular health and helps regulate blood pressure."
              },
              {
                title: "Chakra Balancing",
                description: "Different Mukhi Rudraksha beads help balance specific chakras in the body."
              },
              
              {
                title: "Improved Focus",
                description: "Enhances concentration and mental clarity for better decision-making."
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 border-2 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
