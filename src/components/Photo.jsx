import image from "../assets/image-port.jpg";
import { motion } from "framer-motion";

export default function Photo() {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}>
        <motion.div
          className="absolute w-[220px] h-[220px] md:w-[238px] md:h-[238px] lg:w-[280px] lg:h-[300px] flex justify-center items-center"
          style={{
            top: "50%",
            left: "43.6%",
            transform: "translate(-50%, -50%)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}>
          <img
            src={image}
            alt="me"
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="w-[270px] h-[270px] md:w-[310px] md:h-[310px] lg:w-[378px] lg:h-[378px]"
          fill="transparent"
          viewBox="0 0 586 506"
          xmlns="http://www.w3.org/2000/svg">
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
