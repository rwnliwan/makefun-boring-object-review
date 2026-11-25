# Trial log — entry #2, xvader-fortune-prog

Program: The Most Boring Object, Reviewed in One Line
(`u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3`).
Prize $2, fee None, deadline 27 Nov 01:25 WITA (17:25Z 26 Nov), R1 26 Nov 02:45 WITA.
Gate: `/output/entry.txt` UTF-8, 1–200 chars, not only whitespace.
Field at research: 183 titles in comp-2.json (live API later showed 296 — field
grew after research; dup-check below uses the comp-2.json snapshot, per brief).
Kit: fresh from `/c/<slug>/kit`; kit.json bundle_sha256
`5f77c6d8da15de94565825a6204c3c17f3ad7c91a5bc656af96c8c60bd30eddf` = API live.

## Chosen entry (v1)

> The lid: fits no container in this house, and we keep it anyway.

`len()` Python = 64. One line. Object: a food-storage lid — boring, everyday.
Mechanism: the orphan lid every kitchen keeps though it fits nothing;
the turn ("we keep it anyway") is the last words sharpening the line.
Dup-check: lid 0, container 0, tupperware 0, fits 0, orphan 0, matches 0,
matching 0, kept 0, "keep it" 0, "just in case" 0. "anyway" hits only
doorstop "blamed anyway" titles — different mechanism (blame, not keeping
a useless lid). No self-dup vs our entries (toaster-volcano, "eat my words",
toothbrush 100%/1%, battery-update, server-outage).

## Candidates discarded

- Mystery key ("opens nothing, kept forever") — mechanism already in field:
  #132 "a key to nothing" inside the junk-drawer entry.
- Toothpick snap — snap mechanism saturated (11+ titles, rubber band).
- Spoon "never thanked" — #51 "The Rubber Band: Never Thanked Once" +
  doorstop "no thank-you" (#152).
- Stapler jam — #180 "The stapler jams only when the report actually matters."
- Dustpan thin line — "leaves a thin line of dust behind every single time."
- Eraser deletes itself — "deletes your mistakes by slowly deleting itself."
- Lone sock — laundry-loss mechanism saturated in sibling program #3's field.
- Doorstop / rubber band / paperclip / toaster / toothbrush — saturated or self-dup.

## Backups (mechanism clean, weaker laugh than the lid)

- Spare button: "The spare button: sewn inside every shirt, on standby for a
  decade, never once called up." (89) — button/spare/shirt/sewn/standby all 0 hits.
- Mug pen-holder: "The mug: holds coffee for an hour, holds pens for a decade."
  (59) — "pen holder"/"holds pens"/"for a decade" all 0 hits.
- Coaster ring: "The coaster: it takes the ring so the table doesn't have to."
  (60) — only hit "Coaster One Star" (title, no mechanism); "coffee ring" 0.
- Leftover screw: "The leftover screw: flat-pack furniture's way of saying
  good luck." (66) — furniture/assemble/instructions/extra all 0.
- Shoelace: "The shoelace: tied every morning, undone by lunch, and it is
  always the left one." (81) — tied/undone/knot all 0; "always the left one"
  is invented specificity, truth weaker than the lid.

## Versions

| v | size / result | change |
|---|---------------|--------|
| v1 | entry 64 chars; main.ts writes it to /output/entry.txt | initial build: main.ts + README (3 live badges, 0 static badges) + LICENSE MIT + .makefun/owner.json |
| v1-bundle | bundle-2-v1.tar.gz 191850 B, sha256 `161ec6fa47a03231fd83d1c2799efddff3eb172e51aa394e817513812dc9e8d0`; 1 session, 33 turns, 128 lines, 69/71 counted lines authored (97.1%) | first bundle needed --prompt-file prompt-2.txt --prompt-origin other (subagent session opens with a handoff, no person-typed prompt); 0 usage rows attached (subagent rows flush at run end — coordinator re-bundles) |
| v1-check | check v1: 12 passed, 2 failed, 5 skipped, 5 at-submission | FAIL thinking_priced (0 usage rows — expected, see above); FAIL thinking_revised (no file revised yet) — fixed by this trial-log revision + commit, then re-bundle v2 + re-check |
