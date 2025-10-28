/docs/CLASS_ARCHITECTURE.md
🐢 Turtle Class Architecture
Overview

All turtles inherit from a single Turtle superclass that defines motion, drawing, and state handling.
Species subclasses implement specialized behaviors while keeping a common interface.

Class	Description	Distinct Behaviors
Turtle	Abstract base class	Position, heading, energy, update() stub
RedEaredSlider	Semi-aquatic	Alternates swim / bask, seeks waterline
DesertTortoise	Terrestrial	Slow movement, temperature avoidance
SeaTurtle	Marine	Gliding motion, smooth arcs
WoodTurtle	Riparian	Mixed terrain adaptation
SnappingTurtle	Predatory	Ambush behavior, short bursts

Encapsulation

Private fields (#x, #y, #energy, etc.) enforce isolation.
Public methods operate through controlled getters / setters.

Polymorphism

The engine invokes update(envSnapshot) on every object.
Each class responds differently while sharing one interface.

Extensibility

Subclasses plug into the same update loop.

New species add only their own traits and drawing logic.

Behaviors may emit events (outputs) consumed by the environment layer.
