import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { ABOUT } from "../constants/about";

// ── Types for translation data ──────────────────────────────────────────
interface JobEntry {
  key: string;
  role: string;
  company: string;
  date: string;
  location: string;
  url: string;
  description: string[];
}

interface AboutData {
  ui: {
    modalTitle: string;
    labels: {
      designations: string;
      description: string;
      skills: string;
    };
  };
  data: {
    badgeActive: string;
    designations: string[];
    description: string;
  };
}

// ── Component ───────────────────────────────────────────────────────────
export function HomePage() {
  const { t } = useTranslation(["about", "jobs", "ui"]);

  const about = t("data", {
    ns: "about",
    returnObjects: true,
  }) as AboutData["data"];
  const aboutLabels = t("ui.labels", {
    ns: "about",
    returnObjects: true,
  }) as AboutData["ui"]["labels"];
  const aboutBadge = t("data.badgeActive", { ns: "about" }) as string;
  const jobs = t("data", {
    ns: "jobs",
    returnObjects: true,
  }) as JobEntry[];

  return (
    <div className="mt-4 flex flex-col gap-8 mx-auto pb-12">
      {/* ── Section title ─────────────────────────────────────────── */}
      <motion.h1
        className="text-3xl lg:text-4xl font-headings font-bold text-foreground-base tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ⚙ Token Playground
      </motion.h1>
      <p className="text-foreground-base text-sm -mt-4">
        Temporary UI to validate every CSS design token. Toggle Exploration ↔
        Red Alert to compare.
      </p>

      {/* ── Row 1: Officer Card + Status lights ───────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Officer card — bg-surface, border-accent, accent-base */}
        <motion.div
          className="lg:col-span-2 bg-base backdrop-blur-sm border border-border-accent rounded-2xl p-6 flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Photo */}
          <div className="shrink-0">
            <img
              src="/Luis Delgado.webp"
              alt={ABOUT.name}
              className="w-28 h-28 rounded-full object-cover ring-2 ring-accent-base shadow-lg shadow-accent-glow"
            />
          </div>

          {/* Profile info */}
          <div className="flex flex-col gap-2 text-foreground-base">
            <h2 className="text-2xl font-headings font-bold tracking-wider">
              {ABOUT.name}
            </h2>

            {/* Designations */}
            <div>
              <span className="text-accent-base font-semibold text-sm uppercase tracking-widest">
                {aboutLabels.designations}
              </span>
              <ul className="mt-1 flex flex-wrap gap-2">
                {Array.isArray(about.designations) &&
                  about.designations.map((d: string, i: number) => (
                    <li
                      key={i}
                      className="text-xs px-2 py-0.5 bg-panel rounded-md border border-border-accent/50"
                    >
                      {d}
                    </li>
                  ))}
              </ul>
            </div>

            {/* Active badge — status-safe */}
            <span className="mt-1 inline-flex items-center gap-1.5 w-fit text-xs font-bold px-3 py-1 rounded-full bg-status-safe/20 text-status-safe border border-status-safe/40">
              <span className="w-2 h-2 rounded-full bg-status-safe animate-pulse" />
              {aboutBadge}
            </span>

            {/* Description — foreground-base */}
            <p className="text-sm leading-relaxed mt-2 text-foreground-base/80">
              {about.description}
            </p>

            {/* Skills pills — accent-glow */}
            <div className="mt-2">
              <span className="text-accent-base font-semibold text-sm uppercase tracking-widest">
                {aboutLabels.skills}
              </span>
              <div className="flex flex-wrap gap-2 mt-1">
                {ABOUT.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-base/15 text-accent-base border border-accent-base/30 shadow-sm shadow-accent-glow/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Status panel — status-safe, status-warn, bg-panel */}
        <motion.div
          className="bg-panel/90 backdrop-blur-md border border-border-accent rounded-2xl p-6 flex flex-col gap-4"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-headings font-bold text-accent-base uppercase tracking-wider">
            Ship Status
          </h3>

          {/* Status indicators */}
          {[
            { label: "Engines", status: "safe" as const, value: "100%" },
            { label: "Shields", status: "safe" as const, value: "98%" },
            { label: "Hull Integrity", status: "warn" as const, value: "74%" },
            { label: "Warp Core", status: "safe" as const, value: "Online" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-foreground-base/80 text-sm">
                {item.label}
              </span>
              <span
                className={`text-sm font-bold ${
                  item.status === "safe"
                    ? "text-status-safe"
                    : "text-status-warn"
                }`}
              >
                <span
                  className={`inline-block w-2 h-2 rounded-full mr-1.5 ${
                    item.status === "safe"
                      ? "bg-status-safe shadow-sm shadow-status-safe/50"
                      : "bg-status-warn shadow-sm shadow-status-warn/50"
                  }`}
                />
                {item.value}
              </span>
            </div>
          ))}

          {/* Location — bg-base */}
          <div className="mt-auto pt-4 border-t border-border-accent/30">
            <span className="text-xs text-foreground-base/50 uppercase tracking-widest">
              Current Position
            </span>
            <p className="text-sm text-foreground-base font-semibold mt-1 px-3 py-2 bg-base rounded-lg border border-border-accent">
              📍 {ABOUT.currentLocation}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Row 2: Color swatch strip ────────────────────────────── */}
      <motion.div
        className="flex flex-wrap gap-3 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <span className="text-xs text-foreground-base/50 uppercase tracking-widest mr-2">
          Token Swatches:
        </span>
        {[
          { token: "bg-base", cls: "bg-base" },
          { token: "bg-surface", cls: "bg-surface" },
          { token: "accent-base", cls: "bg-accent-base" },
          { token: "accent-glow", cls: "bg-accent-glow" },
          { token: "panel", cls: "bg-panel" },
          { token: "status-safe", cls: "bg-status-safe" },
          { token: "status-warn", cls: "bg-status-warn" },
          { token: "screen-blue", cls: "bg-screen-blue" },
          { token: "screen-deep-blue", cls: "bg-screen-deep-blue" },
        ].map((s) => (
          <div key={s.token} className="flex flex-col items-center gap-1">
            <div
              className={`w-8 h-8 rounded-lg ${s.cls} border border-border-accent/40 shadow-inner`}
            />
            <span className="text-[10px] text-foreground-base/50">
              {s.token}
            </span>
          </div>
        ))}
      </motion.div>

      {/* ── Row 3: octagon-sm showcase + accent-glow box ──────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Octagon demo */}
        <motion.div
          className="octagon-lg bg-surface border border-border-accent p-6 flex flex-col items-center gap-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
        >
          <span className="text-accent-base text-sm uppercase tracking-widest font-bold">
            .octagon-sm clip
          </span>
          <p className="text-foreground-base text-xs text-center">
            This panel uses the octagon-sm utility class — a sci-fi staple
            clipping shape.
          </p>
        </motion.div>

        {/* Accent glow box */}
        <motion.div
          className="bg-accent-base/10 border border-accent-base/40 rounded-2xl p-6 shadow-lg shadow-accent-glow/40 flex flex-col items-center justify-center gap-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="w-12 h-12 rounded-full bg-accent-base/30 shadow-xl shadow-accent-glow animate-pulse" />
          <span className="text-accent-base font-headings font-bold text-lg tracking-wider">
            accent-glow
          </span>
          <span className="text-foreground-base/50 text-xs">
            shadow-accent-glow / bg-accent-glow
          </span>
        </motion.div>
      </div>

      {/* ── Row 4: Mission log (jobs) — transparent cards over stars ─ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <h2 className="text-2xl font-headings font-bold text-foreground-base tracking-wider mb-4">
          Mission Log
        </h2>

        <div className="flex flex-col gap-4">
          {Array.isArray(jobs) &&
            jobs.map((job: JobEntry, index: number) => (
              <motion.div
                key={job.key}
                className="bg-panel/70 backdrop-blur-sm border border-border-accent/50 rounded-xl p-5 hover:border-accent-base/60 transition-colors duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-base font-headings font-bold text-accent-base tracking-wide">
                      {job.role}
                    </h3>
                    <span className="text-sm text-foreground-base/70">
                      {job.company} · {job.location}
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface text-foreground-base/60 border border-border-accent/30 shrink-0">
                    {job.date}
                  </span>
                </div>

                <ul className="list-none flex flex-col gap-1.5 mt-2">
                  {job.description.map((desc: string, di: number) => (
                    <li
                      key={di}
                      className="text-sm text-foreground-base/75 before:content-['▸'] before:text-accent-base before:mr-2"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
        </div>
      </motion.div>

      {/* ── Row 5: Open space — to see WarpDriveStars ─────────────── */}
      <div className="h-48 flex items-center justify-center">
        <span className="text-foreground-base/30 text-sm italic tracking-wide">
          ↑ Stars visible through transparent areas above ↑
        </span>
      </div>
    </div>
  );
}
