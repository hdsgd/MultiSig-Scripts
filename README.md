# Script para acesso ao contrato multisig

Contrato para teste e execução de métodos no contrato de carteira multisig

Setup inicial

```shell
  npm i
```

Para fazer deploy do contrato de carteira multisig

```shell
  npx hardhat run scripts/deploy.ts --network amoy
```

Para fazer consulta de getData do método pause em contrato ERC20

```shell
  npx hardhat run scripts/getdata.ts --network amoy
```

# Referência para integração com Ledger Nano

https://hardhat.org/ignition/docs/guides/ledger