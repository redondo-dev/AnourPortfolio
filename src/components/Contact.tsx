import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-marseille-blue text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-montserrat font-bold mb-8">
            Engageons le dialogue
          </h2>
          <p className="font-inter mb-8">
            Ensemble, construisons l'avenir de notre arrondissement.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-marseille-blue px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-opacity-90 transition-all"
          >
            Me contacter
          </Link>
        </motion.div>
      </div>
    </section>
  );
};