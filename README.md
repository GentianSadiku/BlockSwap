# BlockSwap

This is an NFT listing dashboard website based on React.js, styled with CSS

## Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Ethers](https://docs.ethers.io/v5/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Reference

- [Contract](https://etherscan.io/address/0x4ea67aebb61f7ff6e15e237c8b79d29c41f750fd#code) 
- [Subgraph](https://thegraph.com/hosted-service/subgraph/vince0656/brand-central?version=current) 

## Demo
- First you need to have [MetaMask](https://metamask.io) installed
- [Demo website](https://block-swap.vercel.app/)

## Approach

**Reasons we went with this particular tech stack.**w

- **React**: 
    - Fast & Easy at building interactive UI, because it’s declarative
    - Easier to hire react dev and onboard them with the codebase.
    - Reusable components, easier to maintain, and is flexible due to their modular structure
    - Fast rendering, React is built to have high performance (virtual DOM program and server-side rendering)
- **TypeScript** is a statically compiled programming language for writing clear and concise JavaScript code and it supports both dynamic and static typing. 
    - Static Typing, easier to read and debug, avoid hidden errors (ex: undefined)
    - Increases dev team confidence when refactoring the code or scaling the project fast.
    - Relying on a specific structure is a much safer solution
- **CSS**
    - Project was light and it makes more sense to write custom classes then Importing an entire library for such a small styling.

### Project Structure
- **Components**
    - **Btn**: responsible for authenticating users using MetaMask wallet.
    - **Navigation**: shows logo and login button.
    - **Information**: contains informations related to NFTs
    - **Card**: displays particular NFT informations
    - **Content**: displays NFTs informations
- **Context**: Responsible for connecting the wallet / Web3 authentication
    - **accounts**: keeps an array of  accounts that are connected with our website
    - **walletConnected**: returns a value if the wallet is connected. (meaning we have user address)


## Development

### Setup

You need NodeJS with NPM installed to execute `npm install`.

### Run

To run the dev server, use `npm run dev` and open [localhost:3000](https://localhost:3000) in your Browser.

## Questions

If you have any questions, you can create an issue here on GitHub or ping me on Twitter [@sadikugentian](https://twitter.com/sadikugentian).
