# PrAIme Productions — development build

This branch is an isolated development rebuild. The `main` branch and live deployment are not changed by these commits.

## Current working foundation
- Responsive studio navigation designed for mobile screens.
- 16-step, four-track drum sequencer using Web Audio synthesis.
- Tempo, master level, swing, playback and stop controls.
- Trap, boom-bap, house and empty pattern presets.
- Local browser autosave and portable JSON project import/export.
- Installable PWA manifest and offline application-shell cache.

## Important limitations
This is a foundation, not a completed DAW. Full-song AI generation, multitrack recording, mastering/rendering, video generation, marketplace, payment verification, cloud accounts, collaboration, converter and native Android audio are not implemented in this commit. The sequencer is browser audio and is not a guarantee of zero latency. Optional Ollama integration is not yet connected.

## Development
Serve this folder over HTTPS or localhost to enable service workers and PWA installation. Test on the target Samsung Galaxy A15 before connecting a deployment. Keep credentials and signing keys out of this repository.
