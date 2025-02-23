import type React from "react"

interface GradientBorderProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  animationSpeed?: number
}

export default function GradientBorder({
  children,
  colors = ["#ffffff", "#4079ff", "#ffffff", "#4079ff", "#40ffaa"],
  animationSpeed = 5,
}: GradientBorderProps) {
  return (
    <div className="relative group">
      {/* Gradient Border Container with Glow */}
      <div
        className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r blur-[2px] opacity-75"
        style={{
          backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
          backgroundSize: "300% 100%",
          animationDuration: `${animationSpeed}s`,
        }}
      />
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r animate-gradient"
        style={{
          backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
          backgroundSize: "300% 100%",
          animationDuration: `${animationSpeed}s`,
        }}
      />

      {/* Content */}
      <div className="relative rounded-2xl">{children}</div>
    </div>
  )
}