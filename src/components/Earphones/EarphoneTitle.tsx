import { motion } from "framer-motion";

const EarphoneTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -500 }}
      animate={{ opacity: 3, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="py-8 md:py-[105px] lg:py-[90px] w-full bg-black mx-auto flex justify-center items-center">
        <h1 className="text-white text-[28px] md:text-[40px] font-bold uppercase tracking-[2px] lg:tracking-[1.5px]">
          EARPHONES
        </h1>
      </div>
    </motion.div>
  );
};

export default EarphoneTitle;
