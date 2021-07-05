def escreverArq(nomeArq,texto):
    try:
       arquivo = open(nomeArq)
       arquivo.close()
    except FileNotFoundError:
        arquivo = input('Arquivo Inexistente. \nDeseja criar o arquivo?[S/n]')
        if arquivo == 'S':
            arquivo = open(nomeArq, 'w')
            arquivo.close()
            arquivo = open(nomeArq,'a')
            arquivo.write(texto)
            arquivo.close()
            return arquivo
        else:
            print('Saindo do programa:')
    else:
        arquivo = open(nomeArq,'a')
        arquivo.write('\n'+texto)
        arquivo.close()