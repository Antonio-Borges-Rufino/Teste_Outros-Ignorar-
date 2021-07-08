cont = 0

triangulo = False

lado = [float(x) for x in input().split()]
if lado[0] + lado[1] > lado[2]:
    triangulo = True
    if lado[0] + lado[2] > lado[1]:
        triangulo = True
        if lado[1] + lado[2] > lado[2]:
            triangulo = True
        else:
            triangulo = False
    else:
        triangulo = False
else:
    triangulo = False

if triangulo == True:
    lado = float(lado[0]+lado[1]+lado[2])
    print('Perimetro = {}'.format(lado))
else:
    lado = float((lado[0]+lado[1])*lado[2])/2
    print('Area: {}'.format(lado))
