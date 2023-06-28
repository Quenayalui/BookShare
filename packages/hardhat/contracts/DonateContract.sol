// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract DonateContract {
  uint totalDonations; // the amount of donations
  address payable owner; // contract creator's address

  // Other contract properties and variables

  constructor() {
    owner = payable(msg.sender); // setting the contract creator
  }

function donate(uint amount) public payable {
  require(msg.value == amount, "Incorrect donation amount");
  totalDonations += amount;
  // Other logic for handling the donation
}
}
