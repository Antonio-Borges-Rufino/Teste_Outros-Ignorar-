import sys

def inputNota():
    try:
        print('Escreva a nota: ')
        nota = int(sys.stdin.readline())
        if (nota<0)or(nota>100):
            print('Você colocou uma nota Menor que 0 ou maior que 100')
            inputNota()
    except ValueError:
        print('Voce precisa colocar valores entre 0 e 100: ')
        inputNota()
    else:
        return nota

if __name__ =='__main__':
    nota = inputNota()
    if nota == 0:
        print('E')
    elif (nota>0)and(nota<=35):
        print('D')
    elif (nota>35)and(nota<=60):
        print('C')
    elif (nota>60)and(nota<=85):
        print('B')
    elif (nota>85)and(nota<=100):
        print('A')