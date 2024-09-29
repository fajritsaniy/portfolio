function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 6L12 13L4 6H20ZM4 18V8.5L12 15.5L20 8.5V18H4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.61.4.07.55-.17.55-.38 0-.19-.01-.72-.01-1.41-2.24.49-2.71-1.08-2.71-1.08-.37-.93-.9-1.17-.9-1.17-.73-.5.06-.49.06-.49.81.06 1.24.83 1.24.83.73 1.24 1.92.88 2.39.67.07-.53.28-.88.51-1.08-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.83A7.15 7.15 0 0 1 8 4.62a7.15 7.15 0 0 1 2.01.27c1.53-1.05 2.2-.83 2.2-.83.44 1.1.16 1.93.08 2.12.51.56.82 1.27.82 2.14 0 3.06-1.87 3.75-3.65 3.95.29.25.54.74.54 1.49 0 1.08-.01 1.95-.01 2.22 0 .21.15.46.55.38C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:fajri2723@gmail.com"
          >
            <EmailIcon />
            <p className="ml-2 h-7">contact</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/fajritsaniy"
          >
            <GithubIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/fajritsani/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © 2024 Fajri Tsani
      </p>
    </footer>
  );
}
