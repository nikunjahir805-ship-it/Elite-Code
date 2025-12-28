import { motion } from 'framer-motion'

const plans = [
  { name: "Starter", price: "Free", features: ["Basic AI assistance", "1 Project", "Community support"] },
  { name: "Pro", price: "$19/mo", features: ["Advanced AI assistance", "5 Projects", "Priority support"] },
  { name: "Team", price: "$49/mo", features: ["Full AI features", "Unlimited Projects", "Dedicated support"] }
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
}

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

const Pricing = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 sm:px-20 py-24"
    >
      <div className="max-w-2xl mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Pricing Plans</h2>
        <p className="text-gray-400">
          Choose a plan that fits your workflow. Scale as you grow.
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid sm:grid-cols-1 md:grid-cols-3 gap-8"
      >
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            variants={card}
            whileHover={{ y: -10, boxShadow: "0 0 40px rgba(233,155,99,0.25)" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-8 rounded-3xl bg-[#0f0f0f] border border-gray-800 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>

              <ul className="mb-6 space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="text-gray-400 text-sm">• {f}</li>
                ))}
              </ul>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto py-3 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] text-black font-medium"
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Pricing
