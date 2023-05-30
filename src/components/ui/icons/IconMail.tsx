type Props = {
  size?: number;
  filled?: boolean;
};

export const IconMail = ({ size = 24, filled = false }: Props) => {
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
          d="M11.55 12.082C11.823 12.264 12.177 12.264 12.45 12.082L22 5.716V5.5C22 4.26 20.99 3.25 19.75 3.25H4.25C3.01 3.25 2 4.26 2 5.5V5.697L11.55 12.082Z"
          fill="#D9D9D9"
        />
        <path
          d="M13.26 13.295C12.877 13.55 12.44 13.677 12 13.677C11.56 13.677 11.123 13.55 10.74 13.294L2 7.452V19.122C2 20.362 3.01 21.372 4.25 21.372H19.75C20.99 21.372 22 20.362 22 19.122V7.47L13.26 13.293V13.295Z"
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
        d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77V18.265C2 19.783 3.233 21.018 4.75 21.018H19.25C20.767 21.018 22 19.783 22 18.265V5.77C22 4.252 20.767 3.018 19.25 3.018ZM4.75 4.518H19.25C19.94 4.518 20.5 5.078 20.5 5.768V6.482L12.45 11.849C12.177 12.029 11.824 12.031 11.55 11.847L3.5 6.482V5.768C3.5 5.078 4.06 4.518 4.75 4.518ZM19.25 19.516H4.75C4.06 19.516 3.5 18.956 3.5 18.266V8.24L10.74 13.07C11.123 13.326 11.562 13.454 12 13.454C12.44 13.454 12.877 13.326 13.26 13.071L20.5 8.241V18.263C20.5 18.953 19.94 19.513 19.25 19.513V19.516Z"
        fill="#D9D9D9"
      />
    </svg>
  );
};
