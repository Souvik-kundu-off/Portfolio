# Task: Smooth scroll to Hero after boot completes (no direct jump/open)

## Steps:
1. ✅ Understand files (BootScreen.tsx, Index.tsx, App.tsx, Hero.tsx read and analyzed)
2. ✅ Create detailed edit plan and get user approval
3. ✅ Update src/pages/Index.tsx: Increased scroll timeout to 1000ms, added scrollTo top + if-check for hero, with comment
4. ✅ Additional fixes for jump to Contact:
 - App.tsx: ScrollToTop behavior 'auto' (instant top, no smooth move).
 - Index.tsx: Post-boot force scroll top 'auto' + clear #contact hash if present.

5. ✅ Task complete - opens directly to Hero, no scroll to Contact/jump.

TODO complete.
