import heroDesktop from 'assets/hero-desktop.png';
import heroTablet from 'assets/hero-tablet.png';
import { Image } from 'components/Image';
import { Transition } from 'components/Transition';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { media } from 'utils/style';
import styles from './ParticlesEffect.module.css';

export const ParticlesEffect = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(() => {}, []);

  return (
    <div className={styles.container}>
      <div className={styles.filler} />
      <Transition in timeout={3000}>
        {visible => (
          <>
            <Particles
              id="particles"
              data-visible={visible}
              className={styles.particles}
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                fullScreen: { enable: false },
                background: {
                  color: {
                    value: '',
                  },
                },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: false,
                      mode: 'push',
                    },
                    onHover: {
                      enable: true,
                      mode: 'repulse',
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 120,
                    },
                    repulse: {
                      distance: 120,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: '#00FFFF',
                  },
                  links: {
                    color: '#5A4FCF',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                      default: 'bounce',
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 150,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: 'circle',
                  },
                  size: {
                    value: { min: 1, max: 5 },
                  },
                },
                detectRetina: true,
              }}
            />
            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                reveal
                delay={100}
                srcSet={[heroTablet, heroDesktop]}
                sizes={`(max-width: ${media.mobile}px) 60vw,(max-width: ${media.tablet}px) 50vw, 480px`}
                alt="Me with crossed arms"
              />
            </div>
          </>
        )}
      </Transition>
    </div>
  );
};
