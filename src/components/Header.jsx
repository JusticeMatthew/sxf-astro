import { useStore } from '@nanostores/react';
import { switchToggled, sageColor } from '@/stores/themeStore';
import navLinks from '@/constants/navLinks';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const $switchToggled = useStore(switchToggled);
  const $sageColor = useStore(sageColor);

  return (
    <header
      className={`w-full z-50 fixed h-24 flex bg-space items-center ${
        $switchToggled ? 'dark' : ''
      }`}
    >
      <div id="container" className="flex items-center justify-between">
        <a href="/" className="flex gap-2 cursor-pointer items-center">
          <img
            src={`${
              $switchToggled
                ? '/images/white-logo-red-saber.svg'
                : $sageColor > 0.85
                ? '/images/white-logo-green-saber.svg'
                : '/images/white-logo-blue-saber.svg'
            }`}
            className="w-36 h-22"
          />
        </a>
        <div className="flex gap-12 items-center">
          <nav className="flex gap-5 text-light uppercase text-lg">
            {navLinks.map((link) => (
              <a
                href={link[0]}
                key={link}
                className={`font-gothic nav-button px-6 py-3 rounded border-[1px] border-transparent ${
                  $sageColor > 0.85
                    ? 'hover:border-sage hover:shadow-[inset_0_0_20px_rgba(0,255,0,0.5),0_0_20px_rgba(0,255,0,0.2)]'
                    : 'hover:border-jedi hover:shadow-[inset_0_0_20px_rgba(0,0,255,0.5),0_0_20px_rgba(0,0,255,0.2)]'
                }  dark:hover:border-sith outline-1 outline-offset-0 hover:outline-offset-[15px] shadow-[inset_0_0_20px_rgba(255,255,255,0)] hover:dark:shadow-[inset_0_0_20px_rgba(255,0,0,0.5),0_0_20px_rgba(255,0,0,0.2)]`}
              >
                {link[1]}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
