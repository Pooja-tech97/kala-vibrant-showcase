import { motion } from "framer-motion";
import OrnamentDivider from "./OrnamentDivider";

const classes = [
  { name: "Bharatanatyam Beginner", day: "Mon & Wed", time: "5:00 – 6:30 PM", price: "$120/mo" },
  { name: "Bharatanatyam Intermediate", day: "Tue & Thu", time: "5:00 – 6:30 PM", price: "$140/mo" },
  { name: "Kathak Beginner", day: "Sat", time: "10:00 – 12:00 PM", price: "$100/mo" },
  { name: "Odissi All Levels", day: "Fri", time: "6:00 – 7:30 PM", price: "$110/mo" },
  { name: "Kuchipudi Beginner", day: "Sun", time: "9:00 – 11:00 AM", price: "$100/mo" },
  { name: "Private Sessions", day: "By Appointment", time: "Flexible", price: "$60/hr" },
];

const ScheduleSection = () => (
  <section id="schedule" className="py-16 md:py-24 section-dark">
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <p className="font-ornate text-gold text-lg italic mb-2">Plan Your Journey</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground">
          Class Schedule & Pricing
        </h2>
      </motion.div>
      <OrnamentDivider />

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls, i) => (
          <motion.div
            key={cls.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-temple-brown/50 backdrop-blur border border-gold/20 rounded-sm p-6 hover:border-gold/50 transition-colors"
          >
            <h3 className="font-display text-xl font-bold text-primary-foreground mb-3">{cls.name}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gold/70 uppercase tracking-wide text-xs">Days</span>
                <span className="text-primary-foreground/80">{cls.day}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gold/70 uppercase tracking-wide text-xs">Time</span>
                <span className="text-primary-foreground/80">{cls.time}</span>
              </div>
              <div className="h-px bg-gold/15 my-3" />
              <div className="flex justify-between items-center">
                <span className="text-gold/70 uppercase tracking-wide text-xs">Fee</span>
                <span className="font-display text-2xl font-bold text-gold">{cls.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ScheduleSection;
