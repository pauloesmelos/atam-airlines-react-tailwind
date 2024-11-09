import React from 'react';
import { plans } from '../../data/data';
import CardPlans from './cards/CardPlans';

const Plans = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    setData(plans);
  }, []);
  return (
    <section className="w-full py-24 bg-neutral-50">
      <div className="w-full max-w-[1100px] mx-auto px-6">
        <div className="w-full">
            <div className="w-full text-center flex items-center flex-col gap-5">
                <span className="font-bold bg-blue-400 text-white py-2 px-4 rounded-md text-sm">
                    Our Plans
                </span>
                <h1 className="text-neutral-700 font-bold text-4xl">
                    Flights For Everyone
                </h1>
                <p className="text-neutral-500 text-sm md:text-lg">
                    Lorem ipsum, dolor sit amet consectetur. Lorem ipsum, dolor sit amet consectetur.
                </p>
            </div>
            {/* card */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
                {data.map((plan) => (
                    <CardPlans key={plan.id * Math.random()} {...plan} />
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Plans;