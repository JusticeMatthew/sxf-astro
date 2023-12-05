import { motion } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { switchToggled, sageColor } from '@/stores/themeStore';

export default function ThemeToggle() {
  const $switchToggled = useStore(switchToggled);
  const $sageColor = useStore(sageColor);

  const mainToggle = () => {
    switchToggled.set(!$switchToggled);
    sageColor.set(Math.random());
  };

  const leftToggle = () => {
    if ($switchToggled === true) {
      switchToggled.set(false);
      sageColor.set(Math.random());
    }
  };

  const rightToggle = () => {
    if ($switchToggled === false) {
      switchToggled.set(true);
      sageColor.set(Math.random());
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 text-light">
      <p
        onClick={leftToggle}
        className="cursor-default dark:cursor-pointer dark:opacity-40 text-center font-univers text-3xl leading-[1.8rem] uppercase"
      >
        Light
        <br />
        Side
      </p>
      <motion.div
        layout
        onClick={mainToggle}
        className={`flex items-center justify-start dark:justify-end h-8 p-1 rounded-full cursor-pointer w-14 ${
          $sageColor > 0.85 ? 'bg-sage' : 'bg-jedi'
        } dark:bg-sith transition-colors duration-500 ease-in-out`}
      >
        <motion.div layout className="z-10 w-6 h-6 rounded-full bg-space" />
      </motion.div>
      <p
        onClick={rightToggle}
        className="opacity-40 text-center dark:opacity-100 dark:cursor-default cursor-pointer font-univers text-3xl leading-[1.8rem] uppercase"
      >
        Dark
        <br />
        Side
      </p>
    </div>
  );
}
