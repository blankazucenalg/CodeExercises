"""
Dos planetas giran alrededor de una misma estrella. 
El exterior tarda doce años terrestres en completar una órbita y el interior, diez. 
Ahora mismo se encuentran alineados. 
¿Cuándo volverán a alinearse otra vez?
"""
import matplotlib.pyplot as plt
import numpy as np
import time
import math


def get_position(a, b, r, angle):
    x = r*math.cos(angle) + a
    y = r*math.sin(angle) + b
    ax.plot(x, y, marker='o')


if __name__ == '__main__':
    plt.ion()
    fig, ax = plt.subplots()
    ax.set_ylim([0, 1])
    ax.set_xlim([0, 1])
    x = range(0, 5)
    circle1 = plt.Circle((0.5, 0.5), 0.2, color='r', linewidth=3, fill=False)
    circle2 = plt.Circle((0.5, 0.5), 0.3, color='blue',
                         linewidth=3, fill=False)

    posicion_planeta_1 = 0
    posicion_planeta_2 = 0
    months = 0
    while True:
        months += 1
        posicion_planeta_1 += (360 / (12 * 12))
        posicion_planeta_2 += (360 / (10 * 12))

        posicion_planeta_1 %= 360
        posicion_planeta_2 %= 360

        plt.cla()
        ax.add_artist(circle1)
        ax.add_artist(circle2)
        get_position(0.5, 0.5, 0.2, posicion_planeta_1)
        get_position(0.5, 0.5, 0.3, posicion_planeta_2)
        plt.draw()
        ax.set_ylim([0, 1])
        ax.set_xlim([0, 1])
        plt.pause(0.001)

        print(months // 12, posicion_planeta_1, posicion_planeta_2)
        if (posicion_planeta_1 == posicion_planeta_2):
            print(months // 12)
            break
