---
header: Fourier Analysis
description: Manipulation of sinusoids for expansion of periodic functions.
---

# Brief
We can express periodic functions in terms of sinusoids. More specifically, it is an infinite series of sinusoids to expand functions.

# Mathematical References

#### Euler's Relation

$$e^{jx}=cosx+jsinx$$

$$cos(wt) = \frac{e^{jw}+e^{-jw}}{2}$$

$$sin(wt) = \frac{e^{jw}-e^{-jw}}{2j}$$

#### Complex Numbers

$$\mathcal{Re} \left\{ a_k \right\} = \frac{1}{2} (a_k + a_k^*)$$

$$\mathcal{Im} \left\{ a_k \right\} = \frac{1}{2j} (a_k - a_k^*)$$

#### Sum Solutions

$$\sum_{n=0}^\infty a^n = \frac{1}{1-a}, |a| < 1$$
$$\sum_{k=0}^n a^k = \frac{1-a^{n+1}}{1-a}, a \neq 1$$

# Fourier Series

## Continuous Time Fourier Series Representation

$$\mathcal{F}(t) = x(t) = \sum_{k = -\infty}^\infty a_ke^{jk \omega_0 t}$$

### Fourier Series Values

#### Fundamental Period

$$T= \frac{2\pi}{\omega_0}$$

#### Fundamental Frequency

$$\omega_0 = \frac{2\pi}{T}$$

#### Fourier Series Coefficients

$$a_k = \frac{1}{T} \int_{<T>} x(t)e^{-jk \omega_0 t} dt$$

$$a_0 = \frac{1}{T} \int_{<T>} x(t) dt$$

### Linear Time Invariant Systems (LTI) & Fourier Series

Say we wanted to analyze the response of an LTI system with a periodic signal. We can modify the Fourier series representation to take into the account the response of a system:

$$y(t) = \sum_{k=-\infty}^\infty b_k e^{jk\omega_0 t}$$

where $b_k=a_k H(k \omega_0)$.

### LTI & Fourier Series Values

#### Frequency Response

$$H(\omega) = \int_{-\infty}^\infty h(t) e^{-j\omega t} dt$$

#### Fourier Coefficient Scaling Factor

$$b_k = a_k H(k \omega_0)$$

### Representing power of a signal

To get the power of a signal, we can simply use Parseval's relation for periodic signals:

$$\mathcal{P} = \frac{1}{T} \int_{<T>} |x(t)|^2 dt = \sum_{k= -\infty}^\infty |a_k|^2$$
