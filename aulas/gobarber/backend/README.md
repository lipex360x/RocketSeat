# Recuperação de Senha

**RF - Requisitos Funcionais**

[x] O usuário deve poder recuperar sua senha informando o seu e-mail;
[x] O usuário deve receber um e-mail com instruções de recuperação de senha;
[x] O usuário deve poder resetar sua senha;

**RN - Regras de Negócios**

- O link enviado por email para resetar a senha, deve expirar em 2h;
[x] O usuário precisa confirmar a nova enha ao resetar sua senha;

**RNF - Rquisitos Não Funcionais**

[x] Utilizar Ethereal para testar envios em ambiente de desenvolvimento;
- Utilizar o Amazon SES para envio em produção;
- O envio de emails deve acontecer em segundo plano (background job);

# Atualização do Perfil

**RF - Requisitos Funcionais**

[x] O usuário deve poder atualizar o seu nome, email e senha;

**RN - Regras de Negócios**

[x] O usuário não pode alterar seu e-mail para um e-mail já utilizado;
[x] Para atualizar sua senha, o usuário deve informar a senha antiga;
[] Para atualiar sua senha, o usuário precisa confirmar a nova senha;


# Dashboard do Prestador

**RF - Requisitos Funcionais**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RN - Regras de Negócios**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

**RNF - Rquisitos Não Funcionais**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo real utilizando Socket.io;

# Agendamento de Serviços

**RF - Requisitos Funcionais**

- O usuário deve poder listar todos os prestadores de serviços cadastrados;
- O usuário deve poder visualizar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RN - Regras de Negócios**

- Cada gendamento deve durar 1h;
- Os agendamentos devem estar disponíveis entre as 08h às 18h (de 08h as 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo;

**RNF - Rquisitos Não Funcionais**

- A listagem de prestadores deve ser amazenada em cache;
