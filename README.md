# Melodia

**Projeto Acadêmico** - Uma landing page moderna e responsiva para o serviço de streaming de música Melodia, desenvolvida como parte de um projeto acadêmico de desenvolvimento web para a matéria de Front End Design na FIAP. Este projeto demonstra o uso de tecnologias front-end modernas para criar uma experiência visual imersiva e intuitiva.

## 📋 Descrição

O Melodia revoluciona sua experiência musical com qualidade superior, playlists inteligentes e descobertas incríveis. Esta landing page apresenta os principais recursos do serviço, incluindo streaming de alta qualidade, recomendações personalizadas e descoberta de novos artistas.

## ✨ Funcionalidades

- **Design Responsivo**: Layout adaptável para desktop, tablet e mobile
- **Menu Transparente**: Efeito de transparência no header durante o scroll
- **Seções Informativas**:
  - Hero com chamada para ação
  - Apresentação dos benefícios
  - Descoberta de novos artistas
  - Diferenciais do serviço (qualidade de som, recomendações, modo offline, sincronização)
  - Depoimentos de usuários
  - Formulários de contato e newsletter
- **Validação de Formulários**: JavaScript para validação de email e campos obrigatórios
- **Animações e Transições**: Efeitos hover e transições suaves

## 📄 Seções da Landing Page

A landing page é dividida em várias seções estratégicas para apresentar o produto de forma organizada e atraente:

- **Header**: Navegação fixa com menu transparente que escurece ao rolar a página. Contém links para seções da página e botões de login/inscrever-se.

- **Hero Section**: Seção principal com fundo em gradiente e imagem de fundo, apresentando o slogan "Sua música, Sua forma" e botão de chamada para ação "Ouvir Agora".

- **Apresentação**: Seção que explica os benefícios do Melodia através de cards com ícones, destacando qualidade de som, playlists personalizadas, descoberta de artistas e interface intuitiva.

- **Descubra**: Galeria de gêneros musicais (Indie Rocks, Eletrônica, Hip Hop) com imagens e descrições, incentivando a exploração de novos artistas.

- **Diferenciais**: Seção detalhada dos recursos avançados, incluindo streaming de alta qualidade, recomendações inteligentes, modo offline e sincronização multi-dispositivo, cada um com imagem ilustrativa e lista de benefícios.

- **Depoimentos**: Seção de testimonials com avatares, nomes, datas e comentários de usuários satisfeitos, incluindo sistema de estrelas.

- **Contato**: Formulário de newsletter para inscrição e formulário completo de contato com campos para nome, telefone, email e mensagem.

- **Footer**: Rodapé com links institucionais, ícones de redes sociais (Twitter, Instagram, Facebook) e copyright.

## 🛠️ Tecnologias Utilizadas

Este projeto acadêmico utiliza uma stack moderna de tecnologias front-end para demonstrar conceitos de desenvolvimento web responsivo e interativo:

- **HTML5**: Fornece a estrutura semântica da página, utilizando elementos como `<header>`, `<main>`, `<section>` e `<footer>` para uma melhor acessibilidade e SEO. Inclui meta tags para viewport e links para recursos externos.

- **CSS3**: Responsável pelos estilos visuais, incluindo gradientes, transições e efeitos de backdrop-filter. Trabalha em conjunto com Tailwind CSS para criar um design moderno e responsivo.

- **JavaScript (ES6+)**: Implementa a interatividade da página, incluindo validação de formulários com regex para emails, manipulação do DOM para efeitos de scroll no header, e event listeners para submissão de formulários.

- **Tailwind CSS**: Framework CSS utilitário que acelera o desenvolvimento através de classes pré-definidas. Utilizado para layout responsivo (grid, flexbox), espaçamento, cores e tipografia, permitindo um design consistente sem escrever CSS customizado extensivo.

- **Vite** (Opcional): Ferramenta de build moderna incluída no projeto, mas não essencial para execução. Pode ser usada para desenvolvimento avançado com hot reload, mas o projeto funciona perfeitamente com um servidor HTTP simples.

- **Font Awesome**: Biblioteca de ícones vetoriais escaláveis, integrada via CDN para adicionar ícones sociais, de funcionalidades e decorativos sem aumentar o tamanho do bundle.

- **Google Fonts**: Serviço de fontes web que fornece a tipografia Poppins em pesos variados (300, 400, 500, 600, 700), garantindo uma leitura agradável e design profissional.

## 🚀 Como Executar

Este é um projeto front-end simples composto apenas por HTML, CSS e JavaScript, não requerendo instalação de dependências complexas. Para visualizar a página:

### Opção 1: Live Server (Recomendado)
1. Instale a extensão "Live Server" no VSCode
2. Clique com o botão direito no arquivo `index.html`
3. Selecione "Open with Live Server"
4. A página será aberta automaticamente no navegador

### Opção 2: Vite (Opcional)
1. Tenha o Node.js instalado.
2. Na pasta do projeto, utilize o comando `npm install`
3. Utilize o comando `npm run dev`
4. Abra o link disponibilizado no terminal.


**Nota**: Como o projeto utiliza apenas tecnologias front-end básicas (HTML, CSS, JavaScript), não há necessidade de instalar Node.js ou executar `npm install` para este projeto acadêmico.

## 📁 Estrutura do Projeto

```
melodia/
├── index.html              # Página principal
├── package.json            # Dependências e scripts
├── src/
│   ├── css/
│   │   └── style.css       # Estilos customizados
│   ├── imgs/               # Imagens do projeto
│   │   ├── hero.png
│   │   ├── mix-*.png
│   │   └── ...
│   └── javascript/
│       └── main.js         # Scripts de interatividade
├── public/
│   └── cube.png            # Ícone do favicon
├── .gitignore
└── README.md
```

## 🎯 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera os arquivos de produção
- `npm run preview` - Visualiza a build de produção

## 🎨 Paleta de Cores

- **Fundo Principal**: `#161022`
- **Gradientes**: Indigo/Pink (`#27377c` to `#9b3c77`)
- **Texto**: Cinza claro para boa legibilidade
- **Acentos**: Cores vibrantes para botões e destaques

## 📱 Responsividade

A página é totalmente responsiva e otimizada para:
- **Desktop**: Layout completo com todas as seções lado a lado
- **Tablet**: Ajustes de grid e espaçamento
- **Mobile**: Layout empilhado com navegação adaptada

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor
 - Eduardo Ulisses Pereira da Silva

**Melodia** - Sua música, sua forma. 🎵
