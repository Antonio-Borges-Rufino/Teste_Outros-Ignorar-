def pegarArq(nomeArq):
    try:
       arquivo = open(nomeArq,'r')
    except FileNotFoundError:
        arquivo = input('Arquivo Inexistente. \nDeseja criar o arquivo?[S/n]')
        if arquivo == 'S':
            arquivo = open(nomeArq, 'w')
            arquivo.close()
            arquivo = open(nomeArq,'r')
            arquivo = arquivo.read()
            return arquivo
        else:
            print('Saindo do programa:')
    else:
        arquivo = arquivo.read()
        return arquivo
