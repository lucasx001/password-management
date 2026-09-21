type GithubIconProps = {
  href: string;
  label: string;
  className?: string;
};

export function GithubIcon({
  href,
  label,
  className = 'github-icon-link',
}: GithubIconProps) {
  return (
    <a
      aria-label={label}
      className={className}
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      title={label}
    >
      <svg
        aria-hidden='true'
        className='github-icon'
        fill='currentColor'
        viewBox='0 0 24 24'
      >
        <path d='M12 2C6.48 2 2 6.58 2 12.22c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.9-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.23 9.23 0 0 1 5.01 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z' />
      </svg>
    </a>
  );
}
