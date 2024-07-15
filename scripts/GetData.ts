import { ethers } from "hardhat";

async function main() {
  const address = "";

  const TokenERC20 = await ethers.getContractFactory("MyToken");
  const token = TokenERC20.attach(address);
  try {
    const pauseData = await token.getPauseData();
    console.log(`Data pause: ${pauseData}`);
  } catch (Error: any) {
    console.log(Error.error);
  }
}

main()
  .then(() => {
    console.log("Success");
  })
  .catch((err) => {
    console.log(err);
  });
