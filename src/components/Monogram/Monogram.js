import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="46"
      height="46"
      viewBox="0 0 46 46"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 8.3125 4.492188 L 37.710938 4.492188 L 37.710938 41.386719 L 8.3125 41.386719 Z M 8.3125 4.492188 " />
        </clipPath>
      </defs>
      <g id="surface1">
        <g clipPath={`url(#${clipId})`} clipRule="nonzero">
          <path d="M 23.96875 22.996094 L 37.710938 41.386719 L 29.003906 41.386719 L 15.757812 23.105469 L 28.511719 4.492188 L 36.777344 4.492188 Z M 15.210938 4.492188 L 15.210938 41.386719 L 8.3125 41.386719 L 8.3125 4.492188 Z M 15.210938 4.492188 " />
        </g>
      </g>
      {highlight && (
        <g id="surface1">
          <g clipPath={`url(#${clipId})`} clipRule="nonzero">
            <path
              className={styles.highlight}
              d="M 23.96875 22.996094 L 37.710938 41.386719 L 29.003906 41.386719 L 15.757812 23.105469 L 28.511719 4.492188 L 36.777344 4.492188 Z M 15.210938 4.492188 L 15.210938 41.386719 L 8.3125 41.386719 L 8.3125 4.492188 Z M 15.210938 4.492188 "
            />
          </g>
        </g>
      )}
    </svg>
  );
});
