import SectionHeading from '../components/SectionHeading';
import ApplicationCard from '../components/ApplicationCard';
import { applications } from '../data/applications';

export default function ApplicationsSection() {
  return (
    <section id="applications" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Equipment & Solutions for LPG Infrastructure Projects"
          subtitle="Supporting a wide range of LPG infrastructure and gas-handling applications with suitable equipment and components."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger-children">
          {applications.map((app, idx) => (
            <ApplicationCard key={idx} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
