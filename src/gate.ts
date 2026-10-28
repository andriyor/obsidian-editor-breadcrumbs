/**
 * Fallback delay for the render gate. Chromium defers requestAnimationFrame
 * while the window is hidden or occluded, so a boolean flag released only by
 * rAF can stay set for the whole hidden phase and swallow every later render
 * (the 1s poll then finds its snapshot already current and never re-schedules
 * — cursor-follow freezes permanently). The 64ms timer opens the same gate
 * whenever rAF does not arrive in time; when rAF arrives first (the normal
 * visible case) the timer just observes an already-open gate.
 */
const GATE_FALLBACK_MS = 64;

/**
 * Coalesce repeated triggers (scroll, poll, cursor moves) into one render per
 * frame, with a timer fallback so the gate can never wedge while the window is
 * hidden. Both the editor tracker and the per-leaf bar share this gate.
 */
export function createRenderGate(render: () => void): () => void {
  let pending = false;
  return () => {
    if (pending) return;
    pending = true;
    const run = () => {
      if (!pending) return; // the other trigger already rendered
      pending = false;
      render();
    };
    window.requestAnimationFrame(run);
    window.setTimeout(run, GATE_FALLBACK_MS);
  };
}
