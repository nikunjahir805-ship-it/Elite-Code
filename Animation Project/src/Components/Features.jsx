import { motion } from 'framer-motion'
import { Sparkles, Code2, Zap, Shield } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Smart AI Writing',
    desc: 'Generate clean, developer-friendly emails in seconds.'
  },
  {
    icon: Code2,
    title: 'Developer Focused',
    desc: 'Built for people who value clarity, structure, and speed.'
  },
  {
    icon: Zap,
    title: 'Fast Workflow',
    desc: 'Less friction. More consistency. Better results daily.'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Your data stays private and protected at all times.'
  }
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

const Features = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 sm:px-20 py-24"
    >
      {/* Title */}
      <div className="max-w-2xl mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
          Powerful Features
        </h2>
        <p className="text-gray-400">
          Everything you need to stay consistent and write better emails as a developer.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {features.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={i}
              variants={card}
              whileHover={{
                y: -40,
                boxShadow: '0 0 40px rgba(233,155,99,0.25)'
              }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="p-6 rounded-2xl bg-[#0f0f0f] border border-gray-800 cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                className="w-12 h-12 mb-6 flex items-center justify-center rounded-xl
                bg-gradient-to-r from-[#656565] to-[#e99b63] text-black"
              >
                <Icon size={22} />
              </motion.div>

              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.section>
  )
}

export default Features
