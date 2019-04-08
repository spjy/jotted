---
header: Microelectronics
description: The study of small eletrical components.
---

# Brief
We'll analyze circuit components such as diodes, amplifiers and MOSFETs.

# Operational Amplifiers (Op amp)
The main goal of an operational amplifier is to amplify a voltage. It has three terminals, two inputs and one output, as seen in the figure:

![opamp](/microelectronics/opamp.svg)

An op amp is operated by DC power supplies with one rail connected to postive voltage and the other connected to negative voltage.

## Ideal Operation Amplifier Model

We can assume four characteristics of an ideal op amp:

1. $i_{input} = 0 \implies R_i \rightarrow \infty$. No current flows into the input terminals, thus the input impedence is infinite.
2. $v_o = A(v_2-v_1) \implies R_o \rightarrow 0$. The output terminal acts like an ideal voltage source, where $v_o = A(v_2-v_1)$, so the output impedance is zero.
3. Bandwidth $\rightarrow \infty$. In other words, the op amp can amplify signals at any frequency with equal gain.
4. Infinite Open Loop Gain. $A \rightarrow \infty$.
4. Infinite Common Mode Rejection, so $v_1=v_2$ assuming the differential gain $A \rightarrow \infty$.
    * $\displaystyle \lim_{A \rightarrow \infty} \frac{v_o}{A} = v_2 - v_1 \implies v_1 = v_2$.
    * Common mode rejection is the amplifier's ability to rid of the common mode voltage. In other words, if an ideal op amp removed all of the common mode voltage, then say $v_1=v_2=1v$. 
    
    $$v_o = A(v_2-v_1) = A(1 - 1) = 0$$

### Differential & Common Mode Signals

#### Differential Input
- The difference between the input signals $v_1$ and $v_2$.

$$v_{Id} = v_2 - v_1$$

#### Common Mode Input
- The average of the input signals $v_1$ and $v_2$.

$$v_{Icm}=\frac{1}{2} (v_1+v_2)$$

### Closed Loop Gain

$$G \equiv \frac{v_O}{v_I}$$

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

#### Process Transc onductance

$$k^{'}_{n} = \mu_n C_{ox}$$

#### MOSFET Transconductance Parameter

$$k_n = k^{'}_{n} (\frac{W}{L}) = \mu_n C_{ox} (\frac{W}{L})$$

#### MOSFET Resistance

$$r_{DS}=\frac{1}{g_{DS}} = \frac{1}{\mu_n C_{ox} (\frac{W}{L})V_{OV}}$$

### NMOS Regions of Operation

#### Cutoff

- As long as the following conditions are satisfied, the MOSFET is in cutoff:

$$V_{GS} < V_{tn}$$

- If the MOSFET is in cutoff, the drain current is zero ($i_D=0$).
- In this state, the channel is pitched so no current can flow.

#### Triode
- As long as the following conditions are satisfied, the MOSFET is in triode:

$$V_{GS} > V_{tn}$$
$$V_{GD} > V_t \text{ or } V_{DS} < V_{OV}$$

- The drain current when in triode is:

$$i_D= k'_n \frac{W}{L} [(V_{GS}-V_{tn})V_{DS}-\frac{1}{2} V_{DS}^2]$$

#### Saturation

- As long as the following conditions are satisfied, the MOSFET is in triode:

$$V_{GS} > V_{tn}$$
$$V_{GD} \leq V_{tn} \text{ or } V_{DS} \geq V_{OV}$$

- The drain current when in triode is:

$$i_D= k'_n \frac{W}{L} (V_{GS}-V_{tn})^2$$
