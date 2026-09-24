lista_compras = []

# Adicionando elementos
lista_compras.append("Maçãs")
lista_compras.append("Ovos")
lista_compras.append("Café")

# Exibindo a lista com índices numerados
for indice, item in enumerate(lista_compras, start=1):
    print(f"{indice}. {item}")