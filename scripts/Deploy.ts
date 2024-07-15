import { ethers } from "hardhat";
import "@nomicfoundation/hardhat-ethers";

async function main() {
  const [signer] = await ethers.getSigners();
  console.log(`Using signer: ${signer.address}`);

  const multiSigContract = await ethers.getContractFactory("MultiSigWallet");
  const contract = await multiSigContract.deploy();

  console.log("Contract deployed at:", contract.address);
}

main()
  .then(() => {
    console.log("Success");
  })
  .catch((err) => {
    console.log(err);
  });
