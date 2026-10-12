// ─── FINA 405 · ROSTER MASTER (Updated: Fall 2026, from Lec07 onwards) ────────
// Groups: G1 = 14 students, G2 = 13, G3 = 13  (40 total)
// Usage in lecture files:
//   const MATURITIES_13=[0.25,0.5,0.75,1.0,1.25,1.5,1.75,2.0,2.25,2.5,2.75,3.0,3.25];
//   const MATURITIES_14=[...MATURITIES_13, 3.5];
//   Then paste the ROSTER object below.
//
// Each student gets a unique T maturity for their individual bond exercise.
// G1 uses MATURITIES_14[0..13], G2 uses MATURITIES_13[0..12], G3 uses MATURITIES_13[0..12].

const MATURITIES_13=[0.25,0.5,0.75,1.0,1.25,1.5,1.75,2.0,2.25,2.5,2.75,3.0,3.25];
const MATURITIES_14=[0.25,0.5,0.75,1.0,1.25,1.5,1.75,2.0,2.25,2.5,2.75,3.0,3.25,3.5];

const ROSTER = {
  // ── GROUP 1 (14 students) ──────────────────────────────────────────────────
  "Alcina, Kiara":              {g:1,T:MATURITIES_14[0]},
  "Brambila, Eddie Medina":     {g:1,T:MATURITIES_14[1]},
  "Broz, Elisa":                {g:1,T:MATURITIES_14[2]},
  "Dutrey, Quinn":              {g:1,T:MATURITIES_14[3]},
  "Gonzalez, Mazzaria":         {g:1,T:MATURITIES_14[4]},
  "Guerrido, Daniel":           {g:1,T:MATURITIES_14[5]},
  "He, Honghui":                {g:1,T:MATURITIES_14[6]},
  "Klein, Cameron":             {g:1,T:MATURITIES_14[7]},
  "Marley, Molly":              {g:1,T:MATURITIES_14[8]},
  "Meng, Xiangyang":            {g:1,T:MATURITIES_14[9]},
  "Mulkerrins, Colin":          {g:1,T:MATURITIES_14[10]},
  "Park, Ethan":                {g:1,T:MATURITIES_14[11]},
  "Ramani, Sahil":              {g:1,T:MATURITIES_14[12]},
  "Singer, Noah":               {g:1,T:MATURITIES_14[13]},
  // ── GROUP 2 (13 students) ──────────────────────────────────────────────────
  "Bae, Kristy":                {g:2,T:MATURITIES_13[0]},
  "Burke, Ryan":                {g:2,T:MATURITIES_13[1]},
  "Garcia, Sofia Gaeta":        {g:2,T:MATURITIES_13[2]},
  "Gasca, Carlos Riveiro":      {g:2,T:MATURITIES_13[3]},
  "Hein, Dawson":               {g:2,T:MATURITIES_13[4]},
  "Lee, Brandon":               {g:2,T:MATURITIES_13[5]},
  "Mass, Grant":                {g:2,T:MATURITIES_13[6]},
  "Megahan, Lauren":            {g:2,T:MATURITIES_13[7]},
  "Montoya, Joaquin":           {g:2,T:MATURITIES_13[8]},
  "Myers, Ana":                 {g:2,T:MATURITIES_13[9]},
  "Pasquini, Sasha":            {g:2,T:MATURITIES_13[10]},
  "Salgado, Candela Gonzalez":  {g:2,T:MATURITIES_13[11]},
  "Skvarca, Sophia":            {g:2,T:MATURITIES_13[12]},
  // ── GROUP 3 (13 students) ──────────────────────────────────────────────────
  "Gard, Griffin":              {g:3,T:MATURITIES_13[0]},
  "Gillern, Katie Von":         {g:3,T:MATURITIES_13[1]},
  "Kennison, Isabella":         {g:3,T:MATURITIES_13[2]},
  "Longaker, Zaley":            {g:3,T:MATURITIES_13[3]},
  "Lopez, Aitana Barcia":       {g:3,T:MATURITIES_13[4]},
  "Marin, Elsa Delgado":        {g:3,T:MATURITIES_13[5]},
  "Mccain, John":               {g:3,T:MATURITIES_13[6]},
  "Mendez, Brody":              {g:3,T:MATURITIES_13[7]},
  "Moon, Jackson":              {g:3,T:MATURITIES_13[8]},
  "Ortiz, Genesis":             {g:3,T:MATURITIES_13[9]},
  "Price, Ariene":              {g:3,T:MATURITIES_13[10]},
  "Scholl, Nicki":              {g:3,T:MATURITIES_13[11]},
  "Wrench, AJ":                 {g:3,T:MATURITIES_13[12]}
};
