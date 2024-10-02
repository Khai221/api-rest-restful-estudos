# API, REST e RESTFUL

- API
  Cliente (Client)
  Garçon (pedidos, levar seus pedidos, para a cozinha) (API)
  Cozinha (Server)

Básicamente uma API é o intermediário que facilita a comunicação entre o (client) e o servidor (server), No contexto de uma aplicação web, o cliente pode ser o front-end (a interface com a qual o usuário interage), e o servidor pode ser o back-end, onde os dados são processados e armazenados.

A API define regras sobre como o cliente pode solicitar informações ou realizar ações no servidor, geralmente utilizando métodos HTTP como:

- GET: para obter dados,
- POST: para enviar ou criar dados,
- PUT: para atualizar dados,
- DELETE: para remover dados.
  Em resumo, a API atua como um "tradutor" entre o front-end e o back-end, garantindo que o cliente possa fazer solicitações e receber respostas do servidor de forma padronizada.

- REST
  Um acrônimo para (Representational State Transfer).
  Transfêrencia de Estado Representativo.
  O que é isso?
  Será feita a transferência de dados de uma maneira simbólica, figurativa, representativa, de maneira didática.

  A transferência de dados, geralmente, usando o protocolo HTTP.

  O Rest, delimita algumas obrigações nessas transferências de dados.

  Resources (recursos) seria então, uma entidade, um objeto.

* Existem 6 NECESSIDADES (constraints) para ser RESTful

- _Client-server_: Separação do cliente e do armazenamento de dados (servidor), dessa forma, poderemos ter uma portabilidade do nosso sistema, usando o React para WEB e React Native para o smartphone, por exemplo.

- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST). Exemplo: a sessão do usuário deverá ser enviada em todas as requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi autenticado na requisição anterior.

- _Cacheable_: As respostas para um requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada pelo cliente.
  O que significa ser cacheable?
  Quando uma resposta é considerada cacheable, ela pode ser armazenada e reutilizada em requisições subsequentes, sem que seja necessário consultar novamente o servidor. Isso é importante porque:
  Reduz a carga no servidor: Menos requisições são enviadas ao servidor.
  Melhora o tempo de resposta: O cliente pode obter dados diretamente do cache local, sem a latência de uma nova requisição ao servidor.
  Reduz o uso de banda: Não é necessário transferir os mesmos dados várias vezes pela rede.
  Quando não usar o cache:
  Nem todas as respostas devem ser cacheadas. Por exemplo:
  Informações sensíveis, como dados pessoais ou detalhes financeiros, não devem ser armazenadas em cache para evitar riscos de segurança.
  Recursos que mudam frequentemente, como resultados de transações em tempo real, também não devem ser cacheados.

- _Layered System_: (Sistemas em camadas), o cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no cliente;

## RESTful

RESTful, é a aplicação dos padrões REST, cumprir a risca o REST.

## BOAS PRÁTICAS

- Utilizar verbos HTTP para nossas requisições.
- Utilizar plural ou singular na criação dos endpoints? _NÃO IMPORTA!_ use um padrão!!
- Não deixar barra no final do endpoint.
- Nunca deixe o cliente sem resposta!

### VERBOS HTTP

- GET: Receber dados de um Resource.
- POST: Enviar dados ou informações para serem processados por um Resource.
- PUT: Atualizar dados de um Resource.
- DELETE: Deletar um Resource.

### STATUS DAS RESPOSTAS

- 1xx: Informação
- 2xx: Sucesso
  - 200: OK
  - 201: CREATED
  - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
  - 400: Bad Request
  - 404: Not Found
- 5xx: Server Error
  500: Internal Server Error
