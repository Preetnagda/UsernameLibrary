const { ethers } = require("hardhat");

async function main() {
  const UsernameLibraryFactory = await ethers.getContractFactory(
    "UsernameLibrary"
  );
  console.log("Deploying contract...");
  const usernameLibrary = await UsernameLibraryFactory.deploy();
  await usernameLibrary.deployed();
  console.log(`Contract deployed at address ${usernameLibrary.address}`);
  //   Can also verify deployed contract on etherscan using hardhat-etherscan package
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    if (error.code == "CALL_EXCEPTION") {
      console.log(error.reason);
    } else {
      console.error(error);
    }
    process.exit(1);
  });
