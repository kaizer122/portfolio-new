import halk1 from 'assets/halk-1.jpg';
import halk2 from 'assets/halk-2.jpg';
import ladchatPlaceholder from 'assets/ladchat-placeholder.jpg';
import ladchat from 'assets/ladchat.jpg';

import imgSosafePlaceholder from 'assets/sosafe-1-placeholder.png';
import imgSosafe from 'assets/sosafe-1.png';
import imgSosafeSmall from 'assets/sosafe-small.png';
import imgSplit1Placeholder from 'assets/split-1-placeholder.jpg';
import imgSplit1Small from 'assets/split-1-small.jpg';
import imgSplit1 from 'assets/split-1.jpg';
import imgSplit2Placeholder from 'assets/split-2-placeholder.jpg';
import imgSplit2Small from 'assets/split-2-small.jpg';
import imgSplit2 from 'assets/split-2.jpg';

import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();

  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Developer"
        description="portfolio of Kais Ladjemi — a full stack Developer working on web & mobile
          apps."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Developing the future of cyber awareness training"
        description="Contributing in building an award-winning e-learning platform that changes behavior to secure an organization's human layer in security."
        buttonText="Visit website"
        buttonLink="https://sosafe-awareness.com/"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [imgSosafeSmall, imgSosafe],
              placeholder: imgSosafePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Ride-sharing & itinerary optimization"
        description={`Carpooling app for Tunisians.
        Tasks include: itinerary optimization, costs sharing calculation & admin dashboard`}
        buttonText="View App"
        buttonLink="https://play.google.com/store/apps/details?id=app.split.tn"
        model={{
          type: 'phone',
          alt: 'Split app screenshot',
          textures: [
            {
              srcSet: [imgSplit2Small, imgSplit2],
              placeholder: imgSplit2Placeholder,
            },
            {
              srcSet: [imgSplit1Small, imgSplit1],
              placeholder: imgSplit1Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Online food delivery platform"
        description="Building a platform where people living in France can order online halal food."
        buttonText="View project (Coming soon)"
        buttonLink="#"
        buttonDisabled={true}
        model={{
          type: 'phone',
          alt: 'Customer app',
          textures: [
            {
              srcSet: [halk1, halk1],
              placeholder: halk1,
            },
            {
              srcSet: [halk2, halk2],
              placeholder: halk2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Chat Platform"
        description="Personal project where i tried a modular architecture design and some new technologies."
        buttonText="Visit website"
        buttonLink="https://ladchat.kaisladjemi.com/"
        model={{
          type: 'laptop',
          alt: 'Ladchat screenshot',
          textures: [
            {
              srcSet: [ladchat, ladchat],
              placeholder: ladchatPlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
