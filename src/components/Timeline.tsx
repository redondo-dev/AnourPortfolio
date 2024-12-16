import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2024",
    title: "Candidat à l'élection de maire junior",
    description: "5ème arrondissement de Marseille"
  },
  {
    year: "2023",
    title: "Terminale",
    description: "Préparation au baccalauréat et Sciences Po"
  },
  {
    year: "2022",
    title: "Engagement associatif",
    description: "Début des activités bénévoles locales"
  }
];

export const Timeline = () => {
  return (
    <section id="parcours" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-marseille-blue mb-12 text-center">
          Mon Parcours
        </h2>
        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex gap-4 mb-8"
            >
              <div className="w-24 text-right">
                <span className="font-montserrat font-bold text-marseille-blue">
                  {item.year}
                </span>
              </div>
              <div className="flex-1 relative pl-8 border-l-2 border-marseille-blue">
                <div className="absolute w-3 h-3 bg-marseille-blue rounded-full -left-[7px] top-2" />
                <h3 className="font-montserrat font-semibold text-xl mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};