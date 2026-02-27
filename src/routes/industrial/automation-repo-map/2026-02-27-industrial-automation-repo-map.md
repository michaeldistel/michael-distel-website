# Industrial Automation Repo Map

Note - 27 Feb 2026 - by Michael Distel

I keep a running list of industrial automation repos because the space is noisy and weirdly cyclical. Every few years someone "rediscovers" open PLCs, SCADA-in-a-browser, protocol gateways, and IDE tooling. Most of it is hobby-grade. Some of it is quietly becoming infrastructure.

This note is what happens when you treat the list like a dataset instead of a vibes folder.

Canonical list: `interesting-repos/industrial-automation.md` (GitHub: https://github.com/michaeldistel/michaeldistel/blob/main/interesting-repos/industrial-automation.md)

## Quick Take

Industrial automation open source is not "one market". It is three overlapping markets that mostly do not like each other:

- Protocol plumbing (Modbus, OPC UA, EtherCAT, MQTT) where the winners are boring, widely deployed, and maintained for a decade.
- Edge and observability where the winners are agents and gateways, not dashboards.
- Developer experience (especially Structured Text) where VS Code is becoming the de facto control surface.

If you are building here, your differentiation is rarely the protocol. It is the workflow, operability, and distribution.

## Dataset Overview

Snapshot date: 27 Feb 2026.

- Repos: 90.
- Freshness: 68/90 had a push within 12 months; 22/90 are stale and moved to Archive (cut-off: last push before 2025-02-27).
- "Popular" (rule: >= 1,000 stars or >= 500 forks): 19/90.

### List Composition (By Category)

This is how the list breaks down by section. It is more "tooling and plumbing" than "control runtimes".

| Category | Repos |
| --- | ---: |
| VS Code extensions | 2 |
| Soft PLCs and runtimes | 4 |
| PLC frameworks and developer tooling | 13 |
| Analysis and verification | 2 |
| CODESYS tooling | 1 |
| OPC UA | 4 |
| EtherCAT | 4 |
| Modbus | 6 |
| EtherNet/IP and CIP | 3 |
| PROFINET | 1 |
| CAN | 1 |
| ADS (TwinCAT) | 1 |
| PLC access stacks | 1 |
| MQTT | 3 |
| Multi-protocol clients | 2 |
| Siemens S7 | 4 |
| SCADA and HMI | 2 |
| Data collection and observability | 2 |
| Simulation, digital twin, and CAD | 2 |
| OT security labs | 1 |
| Testing and quality | 1 |
| Robotics and integration | 1 |
| Edge and platform stacks | 6 |
| UI and design systems | 1 |
| Archive | 22 |

### Star Distribution

This is not a list of household names. It is a list of niche tools with a fat tail.

- Median stars: 161
- 25th percentile: 52
- 75th percentile: 777
- 90th percentile: 1,981

Breakdown by star bands:

| Stars | Repos |
| --- | ---: |
| 0 | 2 |
| 1 to 9 | 10 |
| 10 to 49 | 10 |
| 50 to 199 | 26 |
| 200 to 999 | 23 |
| 1,000+ | 19 |

### Language Mix (Primary)

The primary language distribution is a decent proxy for where the work actually sits.

- C#: 17
- Python: 15
- C++: 12
- C: 11
- TypeScript: 9
- Java: 5
- Rust: 4

Translation: the glue is still .NET and Python; the protocol stacks are still C/C++.

## What Gets Real Adoption

The top by stars is mostly infrastructure, not "apps". No surprises.

Top repos by stars (selected):

- `influxdata/telegraf` (16.7k stars, 5.7k forks): the agent layer is a distribution channel.
- `eclipse-mosquitto/mosquitto` (10.7k, 2.6k): MQTT remains the default pipe.
- `dgiot/dgiot` (5.0k, 1.1k): a very real edge platform, with a China-first flavour.
- `frangoteam/FUXA` (4.1k, 1.2k): SCADA/HMI in the browser, broadly useful.
- `stephane/libmodbus` (4.1k, 1.9k): canonical Modbus in C.
- `open62541/open62541` (3.0k, 1.4k): OPC UA baseline.

If you are building something that competes with these, you are not "building an integration". You are picking a fight with incumbent open source gravity.

## Where The Maintenance Load Sits

The repos with the most open issues are the ones that matter operationally. They are not "badly run". They are *used*.

Top open-issue counts (selected):

- `open62541/open62541`: 883
- `eclipse-mosquitto/mosquitto`: 721
- `influxdata/telegraf`: 452
- `frangoteam/FUXA`: 360

This matters if you are betting on these projects: maintainer bandwidth and triage culture are part of your supply chain.

## The Real Control Surface Is VS Code

The most investable pattern in the list is not "open PLC runtime". It is the migration of Structured Text developer experience into mainstream editors.

Two camps show up:

- Syntax coverage: highlights, snippets, outline, formatter-lite. This spreads fast.
- IDE-grade language intelligence (LSP): diagnostics, indexing, rename, quick fixes, formatting discipline. This is what teams pay for once a codebase exists.

If you are a tooling startup, assume VS Code is the browser. Assume LSP is the product.

## Siemens: Perimeter Strategy In Public

The Siemens repos in the list are mostly "around the PLC", not "the PLC":

- Engineering automation examples (`tia-portal-openness-code-snippets`).
- Edge debugging (`edgeshark`).
- BSPs (`meta-iot2050`).
- A design system (`ix`).
- Webserver API clients for S7.

This is a perimeter strategy: open enough to make the ecosystem productive, keep the core runtime and lifecycle tooling behind the wall.

As a founder, do not misread this as "Siemens is going open". It is "Siemens is making integration cheaper". Still useful, still not altruistic.

## OpenPLC: Still The Reference Spine

`thiagoralves/*` shows up a lot, and much of it is old. It still matters because it anchored how people talk about "open PLC":

- A runtime stack people have actually used in research and training.
- Enough ecosystem glue (editor, web UI, hardware experiments) to create a narrative.

The lesson is not "copy OpenPLC". The lesson is that narrative plus an end-to-end path (even if imperfect) beats a pure library.

## Licence Reality: Metadata Lies

GitHub's licence metadata is messy. A non-trivial number of repos show "no licence" in the API while still being mainstream open source.

Example: `eclipse-mosquitto/mosquitto` shows as `NONE` via the API in my snapshot, despite being a foundational Eclipse project.

If you are using this list for commercial diligence, treat licences as a real workflow:

- read the actual `LICENSE` file,
- check for dual-licensing,
- check for copyleft components in the dependency chain.

## What I'd Build (If I Had To Pick A Hill)

I would rather build where the pain is constant and budgets exist:

- Structured Text quality tooling that works cross-vendor (formatter, lints, refactors, guidelines, CI integration).
- Test and verification workflows that fit real teams (not "formal methods theatre").
- Gateways that are operationally boring: upgrades, rollbacks, telemetry, config management.

I would be cautious about:

- New PLC runtimes without a serious plan for IO, determinism, and support.
- Security tooling with unclear licensing and no maintenance. Great demos, bad dependencies.

## Method Notes

All numbers come from the GitHub API as of 27 Feb 2026.

- Freshness is based on `pushed_at`.
- "Popular" is based on stars/forks at snapshot time.
- Language is GitHub's primary language field.
- Licence is GitHub's API metadata, which is not reliable enough to use as a compliance source.

If you disagree with the framing, great. Send me a repo that proves it.
