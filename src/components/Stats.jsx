import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const statsData = [
  { label: "Students", value: 10000, suffix: "+", formattingFn: (val) => val >= 1000 ? `${val / 1000}k` : val },
  { label: "Courses", value: 250, suffix: "+" },
  { label: "Success Rate", value: 98, suffix: "%" },
  { label: "Expert Instructors", value: 120, suffix: "+" },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.3,    // Start when 30% of the element is visible
  });

  return (
    <section className="py-16" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 lg:px-16">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <dt className="text-3xl md:text-4xl font-extrabold tracking-tight">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    // This handles the "10k" formatting if needed
                    formattingFn={stat.formattingFn} 
                  />
                ) : (
                  "0"
                )}
              </dt>
              <dd className="text-gray-600 font-medium uppercase tracking-wide text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Stats;