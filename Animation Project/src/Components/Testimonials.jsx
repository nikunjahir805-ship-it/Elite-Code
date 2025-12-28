import { motion } from 'framer-motion'

const reviews = [
  {
    name: "Santosh Hadiya",
    content: "Clean UI and smooth experience. Helped me stay consistent while learning React.",
    avatar: "/avatars/santosh.jpg"
  },
  {
    name: "Amit Patel",
    content: "AI features are super helpful. Makes coding daily a habit.",
    avatar: "/avatars/amit.jpg"
  },
  {
    name: "Riya Sharma",
    content: "Simple, focused, and effective. Highly recommend for developers.",
    avatar: "/avatars/riya.jpg"
  },
  {
    name: "Kiran Desai",
    content: "Great interface and reliable AI suggestions. My workflow improved a lot.",
    avatar: "/avatars/kiran.jpg"
  }
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 sm:px-20 py-24"
    >
      <div className="max-w-2xl mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Testimonials</h2>
        <p className="text-gray-400">
          Hear from our users who are building consistency and improving their workflow.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ y: -10, boxShadow: "0 0 40px rgba(233,155,99,0.25)" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-6 rounded-2xl bg-[#0f0f0f] border border-gray-800 flex flex-col items-center text-center cursor-pointer"
          >
            {/* Avatar */}
            <motion.img
              src={r.avatar}
              alt={r.name}
              className="w-16 h-16 rounded-full mb-4 object-cover"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />

            <p className="text-gray-400 mb-4">"{r.content}"</p>
            <span className="font-medium">{r.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Testimonials
