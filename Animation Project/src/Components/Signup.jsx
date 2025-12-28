import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md p-10  rounded-2xl bg-[#0f0f0f] border border-gray-800"
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Create Account
        </h2>

        <form className="flex flex-col gap-5">
          <motion.input
            whileFocus={{ scale: 1.03 }}
            placeholder="Full Name"
            className="p-4 rounded-lg bg-black border border-gray-700 outline-none"
          />
          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="email"
            placeholder="Email"
            className="p-4 rounded-lg bg-black border border-gray-700 outline-none"
          />
          <motion.input
            whileFocus={{ scale: 1.03 }}
            type="password"
            placeholder="Password"
            className="p-4 rounded-lg bg-black border border-gray-700 outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 py-3 rounded-full bg-gradient-to-r from-[#656565] to-[#e99b63] text-black font-medium"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-sm text-gray-400 mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-white underline">
            Login
          </Link>
        </p>
      </motion.div>
    </motion.section>
  )
}

export default Signup
