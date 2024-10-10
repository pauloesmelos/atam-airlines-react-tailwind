import React from 'react';
import { features } from '../../data/data';
import CardFeature from './CardFeature';

const Features = () => {
  const [allFeatures, setFeatures] = React.useState([]);
  React.useEffect(() => {
    setFeatures(features);
  }, []);

  return (
    <section className="w-full py-16">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div className="w-full">
            <div className="w-full flex flex-col items-center gap-3">
                <span className="text-white p-2 rounded-md bg-blue-400 font-bold text-sm">
                    Our Features
                </span>
                <h1 className="text-neutral-700 font-bold text-4xl">
                    Our Priceless Features
                </h1>
                <p className="text-sm text-neutral-500 max-w-[510px] text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptas praesentium, id blanditiis voluptates fugiat.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-8">
                {allFeatures.map((feature) => (
                    <CardFeature 
                        key={feature.id * Math.random()} 
                        {...feature}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Features;