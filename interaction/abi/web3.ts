class Web3Nuxios{
    constructor(
        private web3_identifier: string,
    ) {}

    get web3Metamask() {
        return this.web3_identifier;
    }
}