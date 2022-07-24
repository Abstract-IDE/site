import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fast',
    Svg: require('@site/static/img/time_left.svg').default,
    description: (
      <>
        Abstract is very well optimized and it only takes about 110ms to startup
      </>
    ),
  },
  {
    title: 'Features of the Modern IDE',
    Svg: require('@site/static/img/features.svg').default,
    description: (
      <>
        Abstract provides all the facilities which are there in the modern IDEs.
        Such as LSP, Formatting Treesitter, DAP, etc.
      </>
    ),
  },
  {
    title: 'Zero Configuration',
    Svg: require('@site/static/img/configuration.svg').default,
    description: (
      <>
        Abstract is haviely heavily pre-configured. It works out of the box.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
