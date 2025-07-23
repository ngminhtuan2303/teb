export const IconDash = (
  props: React.SVGProps<SVGSVGElement> & {
    feature: { isDark: boolean };
  },
) => (
  <svg
    width="14"
    height="2"
    viewBox="0 0 14 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1H13"
      stroke={`${props.feature.isDark ? "#ffffff" : "#131318"}`}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
