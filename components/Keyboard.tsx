import type { ReactNode } from "react";

type Variant = "light" | "dark" | "esc";
type IconName =
  | "brightness-down"
  | "brightness-up"
  | "layout-dashboard"
  | "search"
  | "microphone"
  | "moon"
  | "player-track-prev"
  | "player-skip-forward"
  | "player-track-next"
  | "volume-3"
  | "volume-2"
  | "volume"
  | "frame"
  | "bulb"
  | "arrow-narrow-left"
  | "chevron-up"
  | "chevron-left"
  | "chevron-down"
  | "chevron-right"
  | "command";

type KeySpec = {
  width?: number;
  variant?: Variant;
  content: ReactNode;
};

function Icon({ name, size = 10 }: { name: IconName; size?: number }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    style: { width: size, height: size },
  };

  switch (name) {
    case "brightness-down":
      return (
        <svg {...common}>
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M12 5l0 .01" />
          <path d="M17 7l0 .01" />
          <path d="M19 12l0 .01" />
          <path d="M17 17l0 .01" />
          <path d="M12 19l0 .01" />
          <path d="M7 17l0 .01" />
          <path d="M5 12l0 .01" />
          <path d="M7 7l0 .01" />
        </svg>
      );
    case "brightness-up":
      return (
        <svg {...common}>
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M12 5l0 -2" />
          <path d="M17 7l1.4 -1.4" />
          <path d="M19 12l2 0" />
          <path d="M17 17l1.4 1.4" />
          <path d="M12 19l0 2" />
          <path d="M7 17l-1.4 1.4" />
          <path d="M6 12l-2 0" />
          <path d="M7 7l-1.4 -1.4" />
        </svg>
      );
    case "layout-dashboard":
      return (
        <svg {...common}>
          <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
          <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
          <path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
          <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      );
    case "microphone":
      return (
        <svg {...common}>
          <path d="M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3l0 -5" />
          <path d="M5 10a7 7 0 0 0 14 0" />
          <path d="M8 21l8 0" />
          <path d="M12 17l0 4" />
        </svg>
      );
    case "moon":
      return (
        <svg {...common}>
          <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" />
        </svg>
      );
    case "player-track-prev":
      return (
        <svg {...common}>
          <path d="M21 5v14l-8 -7l8 -7" />
          <path d="M10 5v14l-8 -7l8 -7" />
        </svg>
      );
    case "player-skip-forward":
      return (
        <svg {...common}>
          <path d="M4 5v14l12 -7l-12 -7" />
          <path d="M20 5l0 14" />
        </svg>
      );
    case "player-track-next":
      return (
        <svg {...common}>
          <path d="M3 5v14l8 -7l-8 -7" />
          <path d="M14 5v14l8 -7l-8 -7" />
        </svg>
      );
    case "volume-3":
      return (
        <svg {...common}>
          <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
          <path d="M16 10l4 4m0 -4l-4 4" />
        </svg>
      );
    case "volume-2":
      return (
        <svg {...common}>
          <path d="M15 8a5 5 0 0 1 0 8" />
          <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
        </svg>
      );
    case "volume":
      return (
        <svg {...common}>
          <path d="M15 8a5 5 0 0 1 0 8" />
          <path d="M17.7 5a9 9 0 0 1 0 14" />
          <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
        </svg>
      );
    case "frame":
      return (
        <svg {...common}>
          <path d="M4 7l16 0" />
          <path d="M4 17l16 0" />
          <path d="M7 4l0 16" />
          <path d="M17 4l0 16" />
        </svg>
      );
    case "bulb":
      return (
        <svg {...common} style={{ width: 12, height: 12 }}>
          <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
          <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
          <path d="M9.7 17l4.6 0" />
        </svg>
      );
    case "arrow-narrow-left":
      return (
        <svg {...common} style={{ width: 12, height: 12 }}>
          <path d="M5 12l14 0" />
          <path d="M5 12l4 4" />
          <path d="M5 12l4 -4" />
        </svg>
      );
    case "chevron-up":
      return (
        <svg {...common} style={{ width: 12, height: 12 }}>
          <path d="M6 15l6 -6l6 6" />
        </svg>
      );
    case "chevron-left":
      return (
        <svg {...common} style={{ width: 12, height: 12 }}>
          <path d="M15 6l-6 6l6 6" />
        </svg>
      );
    case "chevron-down":
      return (
        <svg {...common} style={{ width: 12, height: 12 }}>
          <path d="M6 9l6 6l6 -6" />
        </svg>
      );
    case "chevron-right":
      return (
        <svg {...common} style={{ width: 12, height: 12 }}>
          <path d="M9 6l6 6l-6 6" />
        </svg>
      );
    case "command":
      return (
        <svg {...common} style={{ width: 12, height: 12 }}>
          <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" />
        </svg>
      );
    default:
      return null;
  }
}

function KeyboardKey({ width = 50, variant = "light", content }: KeySpec) {
  const outerVariantClass =
    variant === "esc"
      ? "bg-[#F57644]/80"
      : variant === "dark"
        ? "bg-neutral-500/80"
        : "bg-neutral-100/80";

  const innerVariantClass =
    variant === "esc"
      ? "bg-[#F57644] text-black/50"
      : variant === "dark"
        ? "bg-neutral-500 text-white/70"
        : "bg-neutral-100 text-black/70";

  return (
    <div style={{ height: 50, width }} className="flex items-end cursor-pointer">
      <div
        className={`relative overflow-hidden h-[50px] rounded-[4px] rounded-t-[12px] border border-neutral-800/60 flex items-start justify-center transition-all duration-100 ${outerVariantClass}`}
        style={{ width }}
      >
        <div
          className={`relative z-10 h-[37px] rounded-[6px] border border-t-0 border-neutral-800/60 transition-all duration-100 text-[9px] font-medium flex flex-col items-center justify-between p-1 gap-0.5 select-none ${innerVariantClass}`}
          style={{ width: width - 13 }}
        >
          {content}
        </div>
        <div className="absolute z-0 bottom-0 right-0 h-px w-8 rotate-70 translate-x-3.5 bg-neutral-800/50 transition-all duration-100" />
        <div className="absolute z-0 bottom-0 left-0 h-px w-8 -rotate-70 -translate-x-3.5 bg-neutral-800/50 transition-all duration-100" />
      </div>
    </div>
  );
}

const iconFnKey = (icon: IconName, label: string, variant: Variant): KeySpec => ({
  variant,
  content: (
    <>
      <Icon name={icon} />
      <span>{label}</span>
    </>
  ),
});

const singleTextKey = (text: string, variant: Variant = "light", width = 50): KeySpec => ({
  width,
  variant,
  content: text,
});

const stackTextKey = (
  top: string,
  bottom: string,
  variant: Variant = "light",
  width = 50,
): KeySpec => ({
  width,
  variant,
  content: (
    <>
      <span>{top}</span>
      <span>{bottom}</span>
    </>
  ),
});

const iconOnlyKey = (
  icon: IconName,
  variant: Variant = "dark",
  width = 50,
  size = 10,
): KeySpec => ({
  width,
  variant,
  content: <Icon name={icon} size={size} />,
});

const rows: KeySpec[][] = [
  [
    singleTextKey("esc", "esc"),
    iconFnKey("brightness-down", "F1", "light"),
    iconFnKey("brightness-up", "F2", "light"),
    iconFnKey("layout-dashboard", "F3", "light"),
    iconFnKey("search", "F4", "light"),
    iconFnKey("microphone", "F5", "dark"),
    iconFnKey("moon", "F6", "dark"),
    iconFnKey("player-track-prev", "F7", "dark"),
    iconFnKey("player-skip-forward", "F8", "dark"),
    iconFnKey("player-track-next", "F9", "dark"),
    iconFnKey("volume-3", "F10", "light"),
    iconFnKey("volume-2", "F11", "light"),
    iconFnKey("volume", "F12", "light"),
    iconOnlyKey("frame", "dark", 50, 10),
    singleTextKey("del", "dark"),
    iconOnlyKey("bulb", "dark", 50, 12),
  ],
  [
    stackTextKey("~", "`"),
    stackTextKey("!", "1"),
    stackTextKey("@", "2"),
    stackTextKey("#", "3"),
    stackTextKey("$", "4"),
    stackTextKey("%", "5"),
    stackTextKey("^", "6"),
    stackTextKey("&", "7"),
    stackTextKey("*", "8"),
    stackTextKey("(", "9"),
    stackTextKey(")", "0"),
    stackTextKey("_", "-"),
    stackTextKey("+", "="),
    iconOnlyKey("arrow-narrow-left", "dark", 100, 12),
    singleTextKey("pgup", "dark"),
  ],
  [
    singleTextKey("tab", "dark", 75),
    singleTextKey("Q"),
    singleTextKey("W"),
    singleTextKey("E"),
    singleTextKey("R"),
    singleTextKey("T"),
    singleTextKey("Y"),
    singleTextKey("U"),
    singleTextKey("I"),
    singleTextKey("O"),
    singleTextKey("P"),
    stackTextKey("{", "["),
    stackTextKey("}", "]"),
    stackTextKey("|", "\\", "dark", 75),
    singleTextKey("pgdn", "dark"),
  ],
  [
    singleTextKey("caps lock", "dark", 100),
    singleTextKey("A"),
    singleTextKey("S"),
    singleTextKey("D"),
    singleTextKey("F"),
    singleTextKey("G"),
    singleTextKey("H"),
    singleTextKey("J"),
    singleTextKey("K"),
    singleTextKey("L"),
    stackTextKey(":", ";"),
    stackTextKey('"', "'"),
    singleTextKey("return", "dark", 100),
    singleTextKey("home", "dark"),
  ],
  [
    singleTextKey("shift", "dark", 123),
    singleTextKey("Z"),
    singleTextKey("X"),
    singleTextKey("C"),
    singleTextKey("V"),
    singleTextKey("B"),
    singleTextKey("N"),
    singleTextKey("M"),
    stackTextKey("<", ","),
    stackTextKey(">", "."),
    stackTextKey("?", "/"),
    singleTextKey("shift", "dark", 77),
    iconOnlyKey("chevron-up", "light", 50, 12),
    singleTextKey("end", "dark"),
  ],
  [
    singleTextKey("ctrl", "dark", 62),
    singleTextKey("option", "dark", 62),
    iconOnlyKey("command", "dark", 62, 12),
    singleTextKey("", "light", 314),
    iconOnlyKey("command", "dark", 50, 12),
    singleTextKey("fn", "dark"),
    singleTextKey("ctrl", "dark"),
    iconOnlyKey("chevron-left", "light", 50, 12),
    iconOnlyKey("chevron-down", "light", 50, 12),
    iconOnlyKey("chevron-right", "light", 50, 12),
  ],
];

export default function Keyboard() {
  return (
    <div className="bg-neutral-600 border-2 border-neutral-900 p-3 rounded-[16px]">
      <div className="bg-neutral-800 border border-neutral-900 rounded-[5px] rounded-t-[8px] h-[278px]">
        <div className="-space-y-1 -translate-y-1 rounded-[5px] overflow-hidden">
          {rows.map((row, rowIndex) => (
            <div className="flex" key={`row-${rowIndex}`}>
              {row.map((key, keyIndex) => (
                <KeyboardKey
                  key={`key-${rowIndex}-${keyIndex}`}
                  width={key.width}
                  variant={key.variant}
                  content={key.content}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
