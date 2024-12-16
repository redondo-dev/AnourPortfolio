import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

const Vision = () => {
  const visionCards = [
    {
      title: "Jeunesse & Éducation",
      description: "Créer des opportunités pour les jeunes Marseillais à travers des programmes éducatifs innovants et des initiatives culturelles."
    },
    {
      title: "Innovation & Technologie",
      description: "Transformer Marseille en hub d'innovation technologique tout en préservant son authenticité culturelle."
    },
    {
      title: "Développement Durable",
      description: "Mettre en place des initiatives écologiques pour faire de Marseille une ville exemplaire en matière de développement durable."
    },
    {
      title: "Culture & Patrimoine",
      description: "Valoriser notre riche patrimoine culturel tout en encourageant les nouvelles expressions artistiques qui font la diversité de Marseille."
    },
    {
      title: "Économie & Emploi",
      description: "Développer l'économie locale en soutenant l'entrepreneuriat et en créant des opportunités d'emploi pour tous."
    }
  ];

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed relative flex flex-col"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05)`,
      }}
    >
      <div className="ml-4 md:ml-0">
        <Navigation />
      </div>
      <div className="container mx-auto px-4 pt-24 flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
            Ma Vision pour Marseille
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Un projet ambitieux pour notre ville, axé sur la jeunesse, l'innovation et le développement durable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg transition-all duration-300 hover:bg-marseille-blue hover:text-white group"
            >
              <h2 className="text-2xl font-montserrat font-semibold text-marseille-blue mb-4 group-hover:text-white">
                {card.title}
              </h2>
              <p className="text-gray-600 group-hover:text-white/90">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Vision;