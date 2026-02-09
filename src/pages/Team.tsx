import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import {
  DoodleDots,
  DoodleCircle,
  DoodleSpark,
} from "@/components/DoodleAccents";
import { teamMembers } from "@/data/team";

const Team = () => (
  <Layout>
    <section className="section-padding relative">
      <DoodleDots className="absolute top-24 right-[8%] w-14 h-14 opacity-10 text-google-yellow" />
      <DoodleCircle className="absolute bottom-36 left-[5%] w-24 h-24 opacity-8 text-google-blue" />
      <DoodleSpark className="absolute top-1/2 right-[15%] w-10 h-10 opacity-8 text-google-red" />

      <div className="container-wide">
        <AnimatedSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-google-red mb-8">
            Our Team
          </p>
          <h1 className="heading-lg max-w-2xl">
            The people behind
            <br />
            GDG Campus
          </h1>
          <p className="body-lg text-muted-foreground mt-8 max-w-xl">
            A passionate group of student developers building community, one
            event at a time.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-16 mt-24">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.name} delay={0.06 * i}>
              <motion.div
                className="group text-center cursor-default"
                whileHover="hovered"
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-muted overflow-hidden mb-6 ring-2 ring-transparent group-hover:ring-google-blue/20 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-semibold text-foreground text-sm">
                  {member.name}
                </h3>
                <motion.p
                  className="text-xs text-muted-foreground mt-1.5"
                  variants={{
                    hovered: { opacity: 1, y: 0 },
                  }}
                  initial={{ opacity: 0.7, y: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {member.role}
                </motion.p>
                <a
                  href="#"
                  className="inline-block mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin size={15} className="text-google-blue" />
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Team;
