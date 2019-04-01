---
header: Microelectronics
description: The study of small eletrical components.
---

# Brief
We'll analyze circuit components such as diodes, amplifiers and MOSFETs.

# MOSFETs
A MOSFET is a metal oxide semiconduter (MOS) field effect transistor (FET). It is a two terminal semiconductor device that is often utilized in integrated circuits. 

## N-channel MOS
The N-channel MOS is one that has a heavily doped n-channel regions in the source and drain regions. It has the drain, source, gate and body.

### NMOS Dependencies

#### Gate Voltage $V_G$

#### Drain Voltage $V_D$

#### Source Voltage $V_S$

#### Gate to Source Voltage
- The potential difference between the gate and source.

$$V_{GS} = V_G - V_S$$

#### Drain to Source Voltage
- The potential difference between the drain and source.

$$V_{DS} = V_D - V_S$$

#### Threshold Voltage $V_t$

- The minimum voltage required to form a conducting channel between the source and drain terminals.
- A manufacturing dependent value.

#### Effective / Overdrive Voltage

- The excess $V_{GS}$ over $V_t$.
- Determines charge of the conducting channel.

$$V_{OV} \equiv V_{GS} - V_t$$

#### Channel Width $W$

#### Channel Length $L$

#### Permittivity of Silicon Dioxide

$$\epsilon_{ox} = 3.9 \epsilon_0 = 3.9 \times 8.854 \times 10^{-12} = 3.45 \times 10^{-11} \frac{F}{M}$$

#### Oxide Thickness $t_o\phantom{}_x$

- A manufacturing dependent value.

#### Oxide Capacitance

- The capacitance of the parallel plate capacitor per unit gate area.

$$C_{ox} = \frac{\epsilon_{ox}}{t_{ox}}$$

#### Electron Charge Magnitude

$$|Q| = C_{ox}(WL)V_{OV}$$

#### Gate to Channel Capacitance

$$C=C_{ox}WL$$

#### Electron Mobility $\mu_n$

#### Process Transconductance

$$k^{'}_{n} = \mu_n C_{ox}$$

#### MOSFET Transconductance Parameter

$$k_n = k^{'}_{n} (\frac{W}{L}) = \mu_n C_{ox} (\frac{W}{L})$$

#### MOSFET Resistance

$$r_{DS}=\frac{1}{g_{DS}} = \frac{1}{\mu_n C_{ox} (\frac{W}{L})V_{OV}}$$

### NMOS Regions of Operation

#### Triode


#### Saturation
#### Cutoff
