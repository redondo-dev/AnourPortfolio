import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { Navigation } from "@/components/Navigation";

const Contact = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-marseille-blue to-marseille-navy pt-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-montserrat font-bold text-white mb-4">
            Contactez-moi
          </h1>
          <p className="text-white/80 font-inter">
            Envoyez-moi un message pour échanger sur l'avenir de Marseille
          </p>
        </motion.div>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;