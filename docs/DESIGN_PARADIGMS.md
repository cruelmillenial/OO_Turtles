/docs/DESIGN_PARADIGMS.md
🧩 Design Paradigms — OO_Turtles Hybrid Architecture
1. Object-Oriented Core

The turtles themselves are autonomous objects that encapsulate state and behavior.
Each subclass (species) overrides shared methods of the Turtle superclass to express distinct movement and temperament.

Why OOP here ?

Represents biological agency — each turtle owns its own data and decisions.

Enables polymorphism: a single update loop drives many behaviors.

2. Functional Environment Layer

The pond ecosystem is modeled as pure functional transformations: temperature, water chemistry, light, and time evolve from deterministic rules.

Why Functional here ?

Predictable and testable: identical inputs → identical outputs.

Stateless updates make rollback, seeding, and replay trivial.

Encourages composable systems (updateWeather ∘ updateChemistry ∘ updateTime).

3. Hybrid Interaction Model

```
envNext = evolveEnvironment(envPrev, dt)
turtles.forEach(t => t.update(envNext))
```
Functional substrate = laws of physics.

OOP agents = biological actors.

The data boundary is a pure snapshot object shared per tick.

4. Key Takeaway

This separation ensures determinism below, emergence above — a pattern scalable from classroom demo to full ecological simulation.
