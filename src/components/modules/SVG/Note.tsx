import { VFC } from "react";

type Props = {
  className?: string;
};

const NoteIcon: VFC<Props> = (props) => {
  return (
    <svg
      viewBox="0 0 167 188"
      version="1.1"
      id="svg8"
      width="167"
      height="188"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.className} fill-current text-white`}
    >
      <defs id="defs12" />
      <title id="title2">white/logo_symbol</title>
      <desc id="desc4">Created with Sketch.</desc>
      <g
        id="white/logo_symbol"
        stroke="none"
        strokeWidth="1"
        transform="translate(-116.5,-106)"
      >
        <path
          d="m 180.3885,169.6969 v -14.37858 c 0,-2.62027 0.13567,-3.49409 0.53908,-4.83834 1.07815,-3.6952 4.71843,-6.44953 9.03105,-6.44953 4.31262,0 7.95169,2.82137 9.02985,6.44953 0.40461,1.34425 0.54028,2.21807 0.54028,4.83834 v 22.17236 c 0,1.34425 0,2.68731 -0.27014,3.89749 -0.74078,3.35883 -3.77355,6.3837 -7.14368,7.12226 -1.21263,0.26813 -2.56092,0.26813 -3.90921,0.26813 h -22.23906 c -2.62815,0 -3.5046,-0.13407 -4.8529,-0.53746 -3.63907,-1.07493 -6.46893,-4.70309 -6.46893,-9.00277 0,-4.30089 2.82986,-7.92905 6.46893,-9.00397 1.3483,-0.40339 2.22475,-0.53746 4.8529,-0.53746 z m 79.25401,100.51836 H 140.35749 V 165.46424 c 0,-1.34425 0.47184,-2.4862 1.41552,-3.42706 l 30.93273,-30.84116 c 0.94369,-0.93965 2.08908,-1.41008 3.43737,-1.41008 h 83.4994 z M 273.18909,106.13407 C 272.58278,106.06703 271.77356,106 270.22356,106 h -97.24888 c -1.07695,0 -2.15511,0.067 -2.89709,0.13407 -4.44829,0.40339 -8.42474,2.4862 -11.59197,5.64393 l -36.19024,36.08171 c -3.16603,3.15893 -5.2563,7.12225 -5.65971,11.5572 -0.0684,0.73856 -0.13567,1.81348 -0.13567,2.88841 v 118.45806 c 0,1.54535 0.0672,2.35214 0.13567,2.95663 0.53788,5.03945 5.12064,9.60727 10.17524,10.14473 0.60751,0.0682 1.41553,0.13526 2.96553,0.13526 h 140.44712 c 1.55,0 2.35922,-0.067 2.96553,-0.13526 5.0546,-0.53746 9.63736,-5.10528 10.17644,-10.14473 0.066,-0.60449 0.13447,-1.41128 0.13447,-2.95663 V 119.23662 c 0,-1.54535 -0.0684,-2.35214 -0.13447,-2.95663 -0.53908,-5.03945 -5.12184,-9.60846 -10.17644,-10.14592 z"
          id="Shape"
        />
      </g>
    </svg>
  );
};

export default NoteIcon;
