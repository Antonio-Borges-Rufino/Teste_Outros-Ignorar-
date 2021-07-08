def inputNumer():
    try:
        x = int(input())
    except ValueError:
        inputNumer()
    else:
        return x


if __name__ == '__main__':
    x = int(inputNumer())
    cont = 0
    while cont < 10:
        print('N[{}] = {}'.format(cont,x))
        x = x*2
        cont = cont + 1