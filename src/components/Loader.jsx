import { motion } from "framer-motion"

export default function Loader({ onNext }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <div className="text-6xl animate-bounce mb-4">🤝</div>
        <p className="text-lg text-purple-600 font-semibold max-w-md mx-auto mb-6 px-4">
          I know idiot❤️👻, tu abhi bhi naraz hai... but ummeed karta hoon yeh sab padh kar mujhe mera idiot ❤️👻 wapas mil jaaye — saari galtiyan bhool kar...
        </p>
        <button
          onClick={onNext}
          className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300"
        >
          Next →
        </button>
      </motion.div>
    </div>
  )
}
