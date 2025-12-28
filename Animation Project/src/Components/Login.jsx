import { motion } from 'framer-motion'

const Login = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md p-8 rounded-2xl bg-[#0f0f0f] border border-gray-800"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Welcome Back
        </h2>

        <form className="flex flex-col gap-6">

          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="email"
            placeholder="Email"
            className="p-4 rounded-lg bg-black border border-gray-700 focus:outline-none"
          />

          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="password"
            placeholder="Password"
            className="p-4 rounded-lg bg-black border border-gray-700 focus:outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 py-3 rounded-full bg-gradient-to-r
            from-[#656565] to-[#e99b63] text-black font-medium"
          >
            Login
          </motion.button>

        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-gray-400 mt-6 text-center"
        >
          Don’t have an account? Sign up
        </motion.p>
      </motion.div>
    </motion.section>
  )
}

export default Login
