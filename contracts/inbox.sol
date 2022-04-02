pragma solidity ^0.4.17;

contract inbox{
    string public getMessage;

    function inbox(string initialMessage) public {
        getMessage = initialMessage;
    }

    function setMessage(string newMessage) public {
        getMessage = newMessage;
    }
}
