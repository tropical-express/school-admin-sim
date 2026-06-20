# 🏫 School Admin Simulator
[![Download school-admin-sim](https://img.shields.io/sourceforge/dt/school-admin-sim.svg)](https://sourceforge.net/projects/school-admin-sim/files/latest/download)

A text-based school administration simulation game built with HTML, Electron, JavaScript, and YAML.

Manage incidents, make disciplinary decisions, and attempt to keep your school under control over a 30-day campaign.

This project focuses on decision-making, consequences, and replayability rather than graphics.

---

## ✨ Features

* 📖 Text-based gameplay
* 🎲 Random student generation
* 🧠 Student memory system
* 🏫 30-day school campaign
* 📊 School statistics tracking
* ⚠️ Escalating incidents
* 🗄️ YAML-driven data files
* 💾 Save system
* 🖥️ Electron desktop application

---

## 📸 Gameplay

```text
DAY 8 / 30

Safety: 91
Morale: 83
Teacher Trust: 87
Chaos: 28

--------------------

Student:
Jordan Kim

Personality:
Rebellious

Severity:
MEDIUM

Incident:

Jordan Kim skipped class.

--------------------

[ Warning ]

[ Detention ]

[ Suspension ]
```

---

## 🗂️ Project Structure

```text
school-admin-sim/

index.html
style.css
app.js
main.js
package.json

engine/
├── game.js
├── save.js
├── students.js
└── escalation.js

data/
├── incidents.yaml
├── names.yaml
└── personalities.yaml

.github/
└── workflows/
    └── release.yml
```

---

## 🚀 Running Locally
Clone the repo 
```bash
git clone https://github.com/tropical-express/school-admin-sim.git
```


Install dependencies:

```bash
pnpm install
```

Start the application:

```bash
pnpm start
```

Create distributable packages:

```bash
pnpm run dist
```

---

## 📦 Release Artifacts

GitHub Actions automatically builds:

### Windows

* Installer (.exe)
* Portable (.zip)

### Linux

* AppImage
* Portable (.zip)

Each artifact includes its own SHA256 checksum file.

Example:

```text
School Admin Simulator Setup.exe
School Admin Simulator Setup.exe.sha256

School Admin Simulator-0.1.0.zip
School Admin Simulator-0.1.0.zip.sha256

School Admin Simulator-0.1.0.AppImage
School Admin Simulator-0.1.0.AppImage.sha256
```

---

## 🎮 Gameplay Goals

Your job is to balance multiple school metrics.

* Safety
* Morale
* Teacher Trust
* Chaos

Every decision has consequences.

Too much punishment may lower morale.

Too much leniency may increase chaos.

---

## 🛠️ Technologies

* HTML
* CSS
* JavaScript
* Electron
* YAML
* pnpm
* GitHub Actions

---

## 📝 License

GPL-3.0
