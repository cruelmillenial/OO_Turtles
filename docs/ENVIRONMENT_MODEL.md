/docs/ENVIRONMENT_MODEL.md
🌎 Functional Environment Model
Purpose

Defines the deterministic substrate that drives the simulation — temperature, light, water, and chemistry.

Snapshot Schema

```
{
  "time": 123.4,
  "temp": 28.3,
  "pH": 7.4,
  "waterLevel": 0.9,
  "sunlight": 0.75,
  "wind": {"dir": 0.8, "speed": 2.1},
  "nutrients": {"n": 0.2, "p": 0.1}
}
```

Each tick produces a new immutable snapshot; no mutation of prior state.

Core Functions
Function	Description
evolveEnvironment(env, dt)	Advances overall state one step
updateWeather(weather, dt)	Generates sunlight / wind cycles
updateChemistry(state, inputs)	Adjusts pH and nutrients
applyTurtleFeedback(env, outputs)	Processes turtle effects without side effects

Design Rules

Pure functions only — no globals or side-effects.

Reproducible with seed inputs.

Composable for testing and dataflow visualization.

Educational Note

This module illustrates functional thinking within a simulation: inputs → transformations → outputs.
