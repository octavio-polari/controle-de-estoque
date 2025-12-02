# Controle de Estoque

#### Para instalar as dependências:

```bash
bun install
```

#### Para rodar o projeto:

```bash
bun run index.ts
```

# Descrição

#### Este software foi criado no intuito de auxiliar minha noiva no controle do estoque do posto de saúde em que trabalha.

# Como funciona:

#### - Endpoint /saida:
- Registra todas as saídas na tabela `saida`
    - Os campos são:
        ```bash
            - nome (do item)
            - extrator (nome de quem retira o item)
            - quantidade (que foi retirada)
        ``` 

#### - Endpoint /adicionar:
- Registra novos itens na tabela `item`
    - Os campos são:
        ```bash
            - nome (do item)
            - formato (un., cx., ...)
            - in_estoque (quantidade em estoque atual)
        ```
 
 #### - Endpoint /controle
 - Visualiza o estoque completo
    - Os campos são:
        ```bash
            - item
            - formato (un., cx., ...)
            - ut_estoque (último registrado do estoque atual no último mês)
            - entrada (no registro do último mês)
            - saída (o estoque atual menos o último estoque somado à entrada)
            - at_estoque (estoque atual)
        ```

# Base de Dados

### As tabelas estão estruturadas da seguinte forma:

#### Saída
|   Item  | Extrator |   Saída   |  DT_Saída  |
|---------|----------|-----------|------------|
| `Texto` |  `Texto` | `Integer` | `DataTime` |

#### Cadastro de Item
|   Nome  | Formato | IN_Estoque |
|---------|---------|------------|
| `Texto` | `Texto` |  `Integer` |

#### Controle Geral
|   Item  | Formato | UT_Estoque |   Entrada |   Saída   | AT_Estoque |
|---------|---------|------------|-----------|-----------|------------|
| `Texto` | `Texto` |  `Integer` | `Integer` | `Integer` |  `Integer` |

<hr>

###### Este projeto foi criado com `bun init` no `bun v1.3.3`. [Bun](https://bun.com) é um ambiente de execução JavaScript completo e rápido.
