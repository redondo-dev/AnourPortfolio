import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-marseille-blue to-marseille-navy text-white p-4">
      <div className="container mx-auto text-center mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-montserrat font-bold mb-4"
        >
          Anouar Bendahmane
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl font-inter mb-6 max-w-2xl mx-auto"
        >
          Futur étudiant en Sciences Politiques, engagé pour l'avenir de Marseille
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto mb-6 rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-w-16 aspect-h-7">
            <video 
              className="w-full h-full object-cover"
              controls
              poster="/placeholder.svg"
            >
              <source src="/video-presentation.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#vision" 
            className="bg-white text-marseille-blue px-6 py-2 rounded-full font-montserrat font-semibold hover:bg-opacity-90 transition-all"
          >
            Découvrir ma vision
          </a>
        </motion.div>
      </div>
    </section>
  );
};