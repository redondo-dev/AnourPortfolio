import { motion } from "framer-motion";

const visionItems = [
  {
    title: "Jeunesse",
    description: "Créer des opportunités pour les jeunes Marseillais"
  },
  {
    title: "Environnement",
    description: "Développer des initiatives écologiques locales"
  },
  {
    title: "Culture",
    description: "Promouvoir la richesse culturelle de notre arrondissement"
  }
];

export const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-marseille-blue mb-12 text-center">
          Ma Vision pour Marseille
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:bg-marseille-blue hover:text-white group"
            >
              <h3 className="font-montserrat font-semibold text-xl mb-4 text-marseille-blue group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};