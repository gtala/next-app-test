// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProposalContract {
    struct Proposal {
        uint id;
        address creator;
        string title;
        string description;
    }

    Proposal[] public proposals;
    uint public nextId;

    event ProposalCreated(uint id, address creator, string title, string description);

    function createProposal(string memory _title, string memory _description) public {
        proposals.push(Proposal({
            id: nextId,
            creator: msg.sender,
            title: _title,
            description: _description
        }));
        emit ProposalCreated(nextId, msg.sender, _title, _description);
        nextId++;
    }

    function getAllProposals() public view returns (Proposal[] memory) {
        return proposals;
    }
}
