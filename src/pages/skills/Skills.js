import usesBackground from 'assets/typing-cat.gif';
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import { Footer } from 'components/Footer';
import { Link } from 'components/Link';
import { List, ListItem } from 'components/List';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Skills.module.css';

export const Skills = () => {
  return (
    <Fragment>
      <Meta
        title="Skills"
        description="A list of hardware and software I use to do my thing"
      />
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Skills"
          description="A somewhat comprehensive list of technologies, tools, apps, and more that I use on a daily basis to code things."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use{' '}
                    <Link href="https://code.visualstudio.com/">Visual Studio Code</Link>{' '}
                    as my text editor, with the Dark modern theme and Droid Sans Mono as
                    my typeface of choice.
                  </ListItem>
                  <ListItem>
                    Brave (based on chromium) is my main browser for both development and
                    general use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice. The component-centric mental model is
                    the first thing that truly made sense to me.
                  </ListItem>
                  <ListItem>
                    For 3D effects and image shaders I use{' '}
                    <Link href="https://threejs.org/">three.js</Link>. It has a bit of a
                    learning curve but you can do some really powerful things with it.
                  </ListItem>
                  <ListItem>
                    For CSS I’ve used solutions like styled-components, but these days I’m
                    mostly using <Link href="https://tailwindcss.com/">Tailwind</Link> as
                    it is very simple and robust.
                  </ListItem>
                  <ListItem>
                    For Javascript animations I use{' '}
                    <Link href="https://www.framer.com/motion/">Framer Motion</Link>, it’s
                    a great way to make a web page come to life.
                  </ListItem>
                  <ListItem>
                    For building and testing UI components in isolation I use{' '}
                    <Link href="https://storybook.js.org/">Storybook</Link>. Check out the{' '}
                    <Link href="https://storybook.kaisladjemi.com">
                      storybook for this website
                    </Link>
                    .
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Databases</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.postgresql.org/">PostgreSQL</Link> is my
                    favorite object-relational database. If i’m in doubt about which
                    database to use, i’ll get things going with it.
                  </ListItem>
                  <ListItem>
                    If i’m in need of a document based no SQL database i would use{' '}
                    <Link href="/contact">MongoDb</Link> or{' '}
                    <Link href="https://aws.amazon.com/dynamodb/"> Dynamodb</Link>{' '}
                    depending on the situation at hand.
                  </ListItem>
                  <ListItem>
                    My favorite ORM is definitely{' '}
                    <Link href="https://typeorm.io/">TypeORM</Link>. I do also use{' '}
                    <Link href="https://www.prisma.io/">Prisma</Link> when it’s
                    convenient.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Tools & Others</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    One of my favorite alternatives to the classic REST-based
                    architectures is <Link href="https://graphql.org/">GraphQL</Link>.
                  </ListItem>
                  <ListItem>
                    <Link href="https://tableplus.com/">TablePlus</Link> is my main
                    database management tool.
                  </ListItem>
                  <ListItem>
                    For operation systems, i use UNIX based systems specially{' '}
                    <Link href="https://www.apple.com/macos"> MacOS</Link> and{' '}
                    <Link href="https://ubuntu.com/"> Ubuntu</Link>.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
