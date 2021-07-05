import os
import time
from  lerArquivo import pegarArq
from  escreverArquivo import escreverArq

while True:
    if __name__ == '__main__':
        print('#'*22+' '+'MENU'+' '+'#'*22)
        print('1 - Pingar os host de um arquivo: ')
        print('2 - Escrever os host em um arquivo: ')
        print('3 - Sair: ')
        menu = input('Opção: ')

        if menu == '1':
            nomeArq = input('Qual nome do arquivos? ')
            arquivo = pegarArq(nomeArq)
            dump = arquivo.splitlines()
            for ip in dump:
                os.system('ping -n 2 {}'.format(ip))
                time.sleep(5)
            print('10 segundos para limpar a tela')
            time.sleep(10)
            os.system('cls')
        elif menu == '2':
            nomeArq = input('Nome do arquivo: ')
            alteracao = input('texto para escrever: ')
            escreverArq(nomeArq,alteracao)
        elif menu == '3':
            break
        else:
            print('valor nao reconhecido !!!!!!!!!!!!!!!!!!')

