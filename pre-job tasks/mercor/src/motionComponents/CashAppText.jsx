import { motion } from "framer-motion";
import "../styles/common.css";
const CashAppText = () => {
  return (
    <div className=" cashapptext-app relative mt-[20px] max-md:mt-0 max-md-top-0 max-md:absolute  flex flex-col items-center ">
      <motion.div 
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="fade-in-left w-full cashapptext">cash</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          animation: "fade-in-top 1s",
    
        }}
      >
        <img
          className="absolute cashapptext-phone max:sm:h-[50%] max-md:w-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
          src="./phone.svg"
        ></img>
      </motion.div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="fade-in-right cashapptext-app">app</div>
      </motion.div>
    </div>
  );
};

export default CashAppText;
