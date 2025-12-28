import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section className="px-6 sm:px-20 py-20 max-w-3xl mx-auto">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-semibold mb-10"
      >
        Contact Us
      </motion.h2>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col gap-6"
      >
        <input className="p-4 rounded-lg bg-black border border-gray-700" placeholder="Name" />
        <input className="p-4 rounded-lg bg-black border border-gray-700" placeholder="Email" />
        <textarea className="p-4 rounded-lg bg-black border border-gray-700" placeholder="Message" />

        <button className="self-start px-6 py-3 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] text-black font-medium hover:scale-105 transition">
          Send Message
        </button>
      </motion.form>
    </section>
  )
}

export default Contact
