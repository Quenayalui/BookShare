// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

import "./DonateContract.sol";

contract DonateContractFactory {
    DonateContract[] public DonateContractArray;

    function createNewDonateContract(uint _donating) public {
        DonateContract donater = new DonateContract(_donating);
        DonateContractArray.push(donater);
    }

    function dfSetter(uint256 _donaterIndex, uint _donating) public {
        DonateContract(address(DonateContractArray[_donaterIndex])).setAmount(
            _donating
        );
    }
}
