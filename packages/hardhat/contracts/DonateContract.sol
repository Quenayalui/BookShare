// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract DonateContract {
    uint totalDonations; // the sum of donations
    // address owner; // contract creator's address
    uint public amount; // amount to be achieved

    // Other contract properties and variables

    constructor(uint _amount) {
        amount = _amount;
        // owner = msg.sender; // setting the contract creator
    }

    function donate(uint donation) public payable {
        require(msg.value == amount, "Incorrect donation amount");
        totalDonations += donation;
        // Other logic for handling the donation
        // returning excess amount or putting it towards other publications
        if (totalDonations >= amount) {
            storeContent();
        }
    }

    function setAmount(uint _amount) public {
        // console.log("Changing greeting from '%s' to '%s'", amount, _amount);
        amount = _amount;
    }

    // function to transfer on content to bundlr
    function storeContent() private {
        // logic to store content in bundlr
        console.log("Storage ACHIEVED");
    }
}
