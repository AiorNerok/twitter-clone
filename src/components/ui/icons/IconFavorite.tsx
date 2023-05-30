type Props = {
  size?: number;
  filled?: boolean;
};

export const IconNotify = ({ size = 24, filled = false }: Props) => {
  if (filled) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9 23.5C19.7 23.5 19.6 23.5 19.5 23.4L12 17.9L4.50005 23.3C4.30005 23.5 4.00005 23.5 3.70005 23.4C3.50005 23.3 3.30005 23 3.30005 22.7V5.6C3.30005 4.4 4.30005 3.4 5.50005 3.4H18.3C19.5 3.4 20.5 4.4 20.5 5.6V22.7C20.5 23 20.3001 23.2 20.1 23.4C20.1 23.5 20 23.5 19.9 23.5Z"
          fill="#D9D9D9"
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9 23.5C19.743 23.5 19.588 23.45 19.458 23.356L12 17.928L4.54198 23.358C4.31398 23.522 4.01198 23.548 3.75998 23.418C3.50998 23.291 3.34998 23.033 3.34998 22.751V5.6C3.34998 4.36 4.35998 3.35 5.59998 3.35H18.398C19.638 3.35 20.648 4.36 20.648 5.6V22.75C20.648 23.032 20.49 23.29 20.238 23.418C20.132 23.473 20.015 23.5 19.898 23.5H19.9ZM12 16.25C12.155 16.25 12.31 16.298 12.44 16.394L19.15 21.277V5.6C19.15 5.188 18.813 4.85 18.4 4.85H5.59998C5.18698 4.85 4.84998 5.188 4.84998 5.6V21.277L11.56 16.394C11.69 16.298 11.845 16.25 12 16.25Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};
