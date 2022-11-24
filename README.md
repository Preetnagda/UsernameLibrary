# Username library

This project uses hardhat framework to create a smartcontract where you can register a username for your wallet address.

This smartcontract is developed for goerli testnet and ethereum blockchain.
Smartcontract is written in solidity.

## Test

```shell
npx hardhat test
```

## Deploy

```shell
npx hardhat run scripts/deploy.js
```

## Interact with SmartContract

Once the smartcontract is deployed, you can interact to it using the following functions:

### registerUser()

This function takes a username as an argument. It maps your current wallet address to the username you provide.
It will not allow duplicate usernames and multiple username registration for one wallet.

### getUsername()

It is a view functions and hence does not cost any gas.

Pass a address to this function and get the username corresponding to it, if it exists.

### getAddress()

It is a view functions and hence does not cost any gas.

Pass a username to this function and get the address corresponding to it, if it exists.
