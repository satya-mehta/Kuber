import Svg, {
  Rect,
  Circle,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
import { C } from "../..//constants/theme";

type Props = {
  size?: number;
};

export default function BuildingIllustration({ size = 180 }: Props) {
  return (
    // 1. Changed <svg> to <Svg> and removed web-only style display: block
    <Svg viewBox="0 0 200 150" width={size} height={size * 0.75}>
      {/* Sky gradient background */}
      {/* 2. Changed <defs> and <linearGradient> to <Defs> and <LinearGradient> */}
      <Defs>
        <LinearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor={C.primaryLight} />
          <Stop offset="100%" stopColor="#DBEAFE" />
        </LinearGradient>
        <LinearGradient id="buildGrad" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0%" stopColor={C.primary} />
          <Stop offset="100%" stopColor={C.primaryDark} />
        </LinearGradient>
      </Defs>

      {/* 3. Changed <rect> to <Rect> */}
      <Rect x="0" y="0" width="200" height="150" fill="url(#skyGrad)" rx="12" />

      {/* Cloud 1 */}
      {/* 4. Changed <ellipse> to <Ellipse> */}
      <Ellipse cx="155" cy="22" rx="18" ry="10" fill="white" opacity="0.85" />
      <Ellipse cx="168" cy="18" rx="13" ry="8" fill="white" opacity="0.85" />
      <Ellipse cx="143" cy="20" rx="10" ry="7" fill="white" opacity="0.85" />

      {/* Cloud 2 */}
      <Ellipse cx="35" cy="30" rx="14" ry="8" fill="white" opacity="0.7" />
      <Ellipse cx="46" cy="26" rx="10" ry="6" fill="white" opacity="0.7" />

      {/* Sun */}
      {/* 5. Changed <circle> to <Circle> */}
      <Circle cx="20" cy="20" r="12" fill="#FCD34D" />
      <Circle cx="20" cy="20" r="8" fill="#FBBF24" />

      {/* Left small building */}
      <Rect x="10" y="75" width="38" height="75" fill="#818CF8" rx="4" />
      {/* Windows left */}
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => (
          <Rect
            key={`lw-${row}-${col}`}
            x={14 + col * 18}
            y={82 + row * 22}
            width={12}
            height={14}
            fill="#C7D2FE"
            rx="2"
          />
        )),
      )}

      {/* Right small building */}
      <Rect x="152" y="60" width="38" height="90" fill="#818CF8" rx="4" />
      {/* Windows right */}
      {[0, 1, 2, 3].map((row) =>
        [0, 1].map((col) => (
          <Rect
            key={`rw-${row}-${col}`}
            x={156 + col * 18}
            y={67 + row * 20}
            width={12}
            height={12}
            fill="#C7D2FE"
            rx="2"
          />
        )),
      )}

      {/* Main center building */}
      <Rect
        x="58"
        y="30"
        width="84"
        height="120"
        fill="url(#buildGrad)"
        rx="6"
      />

      {/* Rooftop accent */}
      <Rect x="70" y="26" width="60" height="8" fill={C.primaryDark} rx="3" />

      {/* Main building windows */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2].map((col) => (
          <Rect
            key={`mw-${row}-${col}`}
            x={66 + col * 26}
            y={38 + row * 22}
            width={18}
            height={15}
            fill={row < 3 ? "#A5B4FC" : "#C7D2FE"}
            rx="3"
            opacity="0.9"
          />
        )),
      )}

      {/* Door */}
      <Rect x="91" y="128" width="18" height="22" fill="#3730A3" rx="4" />
      <Circle cx="106" cy="140" r="2" fill="#A5B4FC" />

      {/* Steps */}
      <Rect x="85" y="148" width="30" height="4" fill="#3730A3" rx="2" />

      {/* Ground */}
      <Rect x="0" y="140" width="200" height="10" fill="#C7D2FE" />
      <Rect x="0" y="146" width="200" height="4" fill="#A5B4FC" />

      {/* Trees */}
      <Rect x="46" y="120" width="4" height="20" fill="#6B7280" />
      <Ellipse cx="48" cy="114" rx="10" ry="12" fill="#4ADE80" />
      <Ellipse cx="48" cy="110" rx="7" ry="9" fill="#22C55E" />

      <Rect x="150" y="118" width="4" height="22" fill="#6B7280" />
      <Ellipse cx="152" cy="112" rx="10" ry="12" fill="#4ADE80" />
      <Ellipse cx="152" cy="108" rx="7" ry="9" fill="#22C55E" />
    </Svg>
  );
}
