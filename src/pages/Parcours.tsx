import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";

const Parcours = () => {
  const handleDownloadCV = () => {
    console.log("Téléchargement du CV");
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed bg-center">
      <div className="min-h-screen bg-black bg-opacity-50 backdrop-blur-sm flex flex-col">
        <Navigation />
        <div className="container mx-auto px-4 pt-24 flex-grow">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-8 text-center"
          >
            Mon Parcours
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-lg transition-all duration-300 hover:bg-opacity-100 hover:bg-marseille-blue hover:text-white group"
            >
              <h2 className="text-2xl font-montserrat font-semibold text-marseille-blue mb-4 group-hover:text-white transition-colors">
                Formation Académique
              </h2>
              <ul className="space-y-4 text-gray-700 group-hover:text-white/90 transition-colors">
                <li>
                  <strong>2023-2024:</strong> Terminale - Préparation Sciences Po
                </li>
                <li>
                  <strong>2022-2023:</strong> Première - Mention Très Bien
                </li>
                <li>
                  <strong>2021-2022:</strong> Seconde - Mention Très Bien
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-lg transition-all duration-300 hover:bg-opacity-100 hover:bg-marseille-blue hover:text-white group"
            >
              <h2 className="text-2xl font-montserrat font-semibold text-marseille-blue mb-4 group-hover:text-white transition-colors">
                Engagements
              </h2>
              <ul className="space-y-4 text-gray-700 group-hover:text-white/90 transition-colors">
                <li>
                  <strong>2024:</strong> Candidat à l'élection de maire junior du 5ème arrondissement
                </li>
                <li>
                  <strong>2023:</strong> Participation active aux conseils de jeunes
                </li>
                <li>
                  <strong>2022:</strong> Début d'engagement associatif local
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-lg mb-12 text-center transition-all duration-300 hover:bg-opacity-100 hover:bg-marseille-blue hover:text-white group"
          >
            <h2 className="text-2xl font-montserrat font-semibold text-marseille-blue mb-4 group-hover:text-white transition-colors">
              Curriculum Vitae
            </h2>
            <p className="text-gray-700 mb-6 group-hover:text-white/90 transition-colors">
              Pour plus de détails sur mon parcours, vous pouvez télécharger mon CV complet.
            </p>
            <Button 
              onClick={handleDownloadCV}
              className="bg-marseille-blue hover:bg-white hover:text-marseille-blue transition-all duration-300"
            >
              Télécharger mon CV
            </Button>
          </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Parcours;
