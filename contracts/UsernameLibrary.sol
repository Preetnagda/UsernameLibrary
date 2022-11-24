//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract UsernameLibrary {
    struct User {
        string username;
        bool isSet;
    }

    mapping(address => User) addressToUser;
    mapping(string => address) userToAddress;

    function registerUser(string calldata _username) public {
        // Prevent duplicate degistrations from a wallet
        require(!addressToUser[msg.sender].isSet, "User already registered");
        // Prevent duplicate usernames
        require(
            userToAddress[_username] == address(0),
            "Username is already taken"
        );

        addressToUser[msg.sender] = User(_username, true);
        userToAddress[_username] = msg.sender;
    }

    function getUsername(address _userAddress)
        public
        view
        returns (string memory)
    {
        require(addressToUser[_userAddress].isSet, "User not registered");
        return addressToUser[_userAddress].username;
    }

    function getUserAddress(string calldata _username)
        public
        view
        returns (address)
    {
        require(
            userToAddress[_username] != address(0),
            "Username does not exists"
        );
        return userToAddress[_username];
    }
}
