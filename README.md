# 🚀 About Me Card

Um cartão de apresentação interativo e moderno desenvolvido com React, TypeScript e Vite. Este projeto apresenta um design elegante com animações dinâmicas e uma interface responsiva para mostrar informações profissionais de forma criativa.

## ✨ Características

- **Design Moderno**: Interface clean com esquema de cores laranja e preto
- **Animações Interativas**: Grid animado de fundo que responde ao movimento do mouse
- **Totalmente Responsivo**: Adaptável a diferentes tamanhos de tela
- **Tags Estilizadas**: Elementos `<p>` decorativos que adicionam um toque de código ao design
- **Componentes Reutilizáveis**: Arquitetura modular com TypeScript para melhor manutenção
- **Performance Otimizada**: Construído com Vite para carregamento rápido

## 🛠️ Tecnologias

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Tipagem estática para maior segurança no código
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Biblioteca para animações fluidas
- **React Icons** - Ícones customizados para redes sociais

## 🎨 Estrutura do Projeto

```
src/
├── components/
│   ├── beamGrid.tsx       # Fundo animado com grid interativo
│   ├── card.tsx           # Componente principal do cartão
│   ├── cardHeader.tsx     # Avatar e informações do cabeçalho
│   ├── cardBody.tsx       # Descrição e habilidades
│   └── cardFooter.tsx     # Links das redes sociais
├── assets/
│   ├── profileIcon.png    # Foto de perfil
│   ├── icons8-dev-50.png  # Favicon
│   └── [social-icons]/    # Ícones SVG das redes sociais
└── App.tsx                # Componente raiz da aplicação
```

## 🚀 Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/JVOliver-XVII/AboutME.git
cd AboutME
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🎯 Funcionalidades Principais

### Grid Animado Interativo

O fundo apresenta uma grade animada com feixes de luz que se movem continuamente. Quando você move o mouse, a grade cria um efeito de destaque interativo em múltiplos níveis ao redor do cursor.

### Sistema de Componentes

- **Card**: Container principal com animações de entrada
- **CardHeader**: Exibe avatar circular com borda laranja brilhante
- **CardBody**: Apresenta descrição com tags `<p>` estilizadas e lista de habilidades
- **CardFooter**: Links para redes sociais com ícones customizados

### Design Visual

- Esquema de cores: Laranja (#f97316) e preto (#000000)
- Tipografia moderna com fontes sans-serif
- Efeitos de hover em todos os elementos interativos
- Sombras e brilhos suaves para profundidade

## 📝 Personalização

Para personalizar o cartão com suas informações:

1. Edite `src/App.tsx` e modifique as propriedades do componente `Card`:

```tsx
<Card
  name="Seu Nome"
  role="Seu Cargo"
  description="Sua descrição"
  skills={["Skill1", "Skill2", "Skill3"]}
  socialLinks={[...]}
/>
```

2. Substitua a imagem do perfil em `src/assets/profileIcon.png`

3. Atualize os links das redes sociais no array `socialLinks`

## 👨‍💻 Autor

**João Victor**

- GitHub: [@JVOliver-XVII](https://github.com/JVOliver-XVII)
- LinkedIn: [Seu LinkedIn](#)

---

Desenvolvido com ❤️ e ☕
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```
#
