const { ethers } = require("hardhat");
const { assert } = require("chai");

describe("UsernameLibrary", () => {
  let usernameLibrary;
  beforeEach(async () => {
    const UsernameLibraryFactory = await ethers.getContractFactory(
      "UsernameLibrary"
    );
    usernameLibrary = await UsernameLibraryFactory.deploy();
    await usernameLibrary.deployed();
  });

  it("Initially, username should not be registered", async () => {
    const signer = await ethers.getSigner();
    usernameLibrary.getUsername(signer.address).catch((err) => {
      assert(err.reason == "User not registered");
    });
  });

  it("Username should reflect after registration", async () => {
    await usernameLibrary.registerUser("HighStorm");
    const signer = await ethers.getSigner();
    const username = await usernameLibrary.getUsername(signer.address);
    assert(username == "HighStorm");
  });

  it("Get signer address from username", async () => {
    await usernameLibrary.registerUser("HighStorm");
    const signer = await ethers.getSigner();
    const address = await usernameLibrary.getUserAddress("HighStorm");
    assert(address == signer.address);
  });
});
