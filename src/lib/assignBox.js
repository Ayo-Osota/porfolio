// Maps two 1–5 answers (success axis, sanity-as-chaos axis) to a box.
// Tie-break rule: success = 3 OR sanity = 3 routes to the nearest box on the
// success axis, defaulting to Box 2 on a full tie. We implement this by
// treating mid values (3) as "high" on both axes, which naturally lands ties on Box 2.

export function assignBox(success, sanity) {
  const successHigh = success >= 3;
  const chaosHigh = sanity >= 3;

  if (successHigh && chaosHigh) return "box2";
  if (successHigh && !chaosHigh) return "box3";
  if (!successHigh && chaosHigh) return "box1";
  return "box4";
}
