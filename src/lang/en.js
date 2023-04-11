export default {
    pubilc: {
        usingHelp: "Help",
        copySauccessfully: "Copyed",
        copyFailed: "Copy Failed",
        noData: "No data"
    },
    title: {
        home: "Toolbox For Blockchain Developer",
        unitConvert: "Unit Converter",
        bulkQuery: "批量查询钱包余额",
        traceview: "交易分析工具",
        abi: "ABI 图形化",
        address: "Address & ENS Lookup",
        generateWallet: "Wallet Generator",
        querySelector: "Selector By Function Signature",
        topicID: "查询事件主题(TopicID)",
        hashTool: "Hash Tools",
        calldata: "Input Calldata Decoder & Encoder",
        faucet: "Testnet Faucets"
    },
    navigation: {
        connectWallet: "Connect Wallet",
        nav:{
            home:"首页",
            languageSelection:"语言选择",
            folloUs:"关注我们",
        }
    },
    home: {
        title: ["OpenSource ", "Toolbox", "Make Blockchain Develop More Easier"],
        describe: "Open source is trustworthy, good to use to improve efficiency. The tools you need are here.",
        feedback: "Feedback",
        subheadingToolList: "Tools",
        listDescribe: "Free & Efficiency, try it out",
        toolList: [
            {
                title: 'Unit Converter',
                detail: 'ETH Unit Converter',
            },
            {
                title: 'Balance Querier',
                detail: 'Batch query wallet balance',
            },
            {
                title: 'Tx Trace Viewer',
                detail: 'Parse internal details of EVM transactions',
            },
            {
                title: 'ABI Caller',
                detail: 'Friendly generate callable functions for ABI',
            },
            {
                title: 'Address & ENS lookup',
                detail: 'Address lookup and ENS lookup',
            },
            {
                title: 'Wallet Generator',
                detail: 'Trustworthy & Batch EVM Wallet Generator',
            },
            {
                title: 'Selector Querier',
                detail: 'Function selector <=> Function signature',
            },
            {
                title: 'TopicID Querier',
                detail: 'Event TopicID <=> Event signature',
            },
            {
                title: 'Hash Tools',
                detail: 'Commonly used Hash Tools: keccak-256, base64 and so on...',
            },
            {
                title: 'Calldata Decoder & Encoder',
                detail: 'Encoding and decoding Tx Calldata',
            },
            {
                title: 'Testnet Faucets',
                detail: 'Testnet Faucet All in one',
            },
        ],
    },
    uintConvert: {
        title: "Unit Converter",
        describe: "The smallest unit of Ether is Wei in EVM, 1 Ether == 10^18 Wei, gwei usual as the unit when paying gas fee.",
        illustrate: ["The difference between ethereum and ether:", "Ethereum is an open blockchain platform that allows anyone to deploy or interact with smart contracts on it", "Ether is the native coin in Ethereum, ether used to pay for the gas fee"],
    },
    bulkQuery: {
        enterAddress: "Token Address",
        enterAddressPrompt: "Input your wallet address",
        enterWalletAddress: "Wallet",
        enterWalletAddressPrompt: "One address per line",
        inquireResult: "Result",
        list: ["Wallet", "Token", "Balance"],
        checkBalance: "Get Balance",
        exportExcel: "Download Excel",
        exportExcelPrompt: "No balance data",
        checkBalancePrompt: ["No wallet address", "Token address error, please review"],
    },
    traceView: {
        title: "Tx Trace Viewer",
        transactionHash: "Tx Hash",
        inputTransactionHash: "Input transaction hash",
        analyze: "Analyze",
        options: "options",
        inputAddressMap: "Input address alias",
        inputFunctionMap: "Input function alias",
        example: "A example",
        AddressMap: "Address alias",
        FunctionMap: "Function alias",
        CallTraces: "Traces",
        prompt: ["input tx hash", "retry input tx hash and "],
        analyzing: "analyzing...",
        parsingFailed: ["An error has occurred", "Failed"]
    },
    abi: {
        title: "ABI Caller",
        addContract: "Add Contract",
        share: "Share",
        sharePrompt: "Share to friends, will auto load contract",
        ABI: "Show ABI",
        ABIPrompt: "Click for show ABI, copy ABI",
        Etherscan: "Go etherscan",
        EtherscanPrompt: "Go etherscan for more details ",
        edit: "edit",
        editPrompt: "Modify contract name, network , address, ABI",
        delect: "Delete",
        delectPrompt: "Delete this contract",
        contractName: "Name",
        blockchainAddress: "Chain",
        contractAddress: "contract",
        callFunctions: "Function:",
        inputValue: "msg.value",
        pleaseChoose: "Choose",
        clearOutput: "Clean Output",
        run: "Run",
        transactionDetails: "Tx Details",
        returnContent: "Return:",
        contract: "Contract",
        commonABIs: "Commonly ABI",
        blockchainNetwork: "Chain",
        selectNetwork: "choose network",
        chooseCommonABI: "From Commonly ABI",
        uploadABIFile: "Upload ABI File",
        etherscanGet: "From Etherscan",
        cancel: "Cancel",
        sure: "OK",
        checkABI: "Show ABI",
        jsonABI: "JSON ABI",
        readableABI: "Humanable ABI",
        inputPrompt: "Please input",
        copy: "Copy",
        quit: "Exit",
        validateName: "Contract name",
        sameName: "Contract name existed",
        validateAddress: "Please check contract address",
        checkAbi: "Input ABI",
        checkNetwork: "Choose network",
        autoAddError: 'Load contract error',
        doesNotSupportSharing: "Current contract not support share",
        copyShareSuccess: "Copy share link success",
        examineAddressAndNetwork: "Please input contract address and network",
        getABIeroor: "Fail to get ABI ",
        useCurrentNetwork: "Network by wallet",
        checkAbiError: "ABI Error",
        notSelectedContractPrompt: "none contract selected",
        contractNotRecorded: "No source on Etherscan",
        deniedAccess: "User denied account access",
        notInstalledMetaMaskPrompt: "Need install MetaMask",
        abiError: "ABI Invalid",
        switchNetworkPrompt: "Network are mismatch, switch network ...",
        currentNetworkError: "Network error",
        connectionRequestError: "Network error, please retry connect and reload",
    },
    address: {
        address: "wallet address",
        convert: "Lookup",
        inquire: "Lookup",
        inputENS: "ens domain",
        loadPrompt: "loading",
        errorAddressPrompt: "invalid wallet address, please retype",
        errorENSPrompt: "No corresponding results were found."
    },
    generateWallet: {
        tips: ["Tips:  only run in your browser, totally", "Open Source", ". No one can get your mnemonic or private key, feel free to use."],
        randomBatch: "By Random",
        customize: "By Pri-key or Mnemonic",
        mnemonicLength: "How many mnemonic words",
        quantity: "Address numbers",
        generateImmediately: "Create",
        regenerate: "Re-create",
        exportexcel: "Download",
        walletsNumber: "Address numbers",
        subtitle: "Create Wallet by Private key or mnemonic",
        createNow: "Create",
        enterPrompt: "Private key or mnemonic",
        copy: "Copy",
        address: "Address",
        privateKey: "Pri-key",
        mnemonic: 'Mnemonic',
        nullErrorPrompt: "Invalid input",
        IllegalErrorPrompt: "Invalid address numbers",
        beyondErrorPrompt: "Address number too big, must be smaller than 100",
        inputErrorPrompt: "Create failed"
    },
    querySelector: {
        title: "Selector Querier",
        inputFunctionName: 'Get selector by function signature',
        inputFunctionNamePrompt: "enter the function signature",
        inquire: "query",
        inputByteFunctionSelector: "Get function signature by selector",
        functionInputError: "Input error",
        querying: "loading",
        noRecord: "no record",
    },
    topicID: {
        title: "TopicID Querier",
        EventSignature: 'Get topicId by event signature',
        inputEventSignature: "Input Event Signature",
        inquire: "query",
        TopicID: "Get event signature by topicId",
        InputTopicID: "Input topicId",
        signatureInputError: "Such as: event Transfer(address indexed from, address indexed to, uint256 amount)",
        querying: "loading",
        topicIDInputError: "no record"
    },
    hashTool: {
        title: "Hash Tools",
        confirm: "Confirm",
        coding: "Encoding",
        decoding: "Decoding",
        errorHexadecimal: "Invalid hex data",
        decodingError: "Decoding Error",
        noInput: "No input data"
    },
    calldata: {
        decoding: "Decoding",
        coding: "Encoding",
        inputFunction: "input function",
        inputFunctionPrompt: "function signaturs",
        parameter: "Params",
        inputParameterPrompt: "A param per line, Array like this:[0x2222,0x4444]",
        inputError: "Input Error",
        inputCalldata: "Calldata:",
        selectFunction: "Function",
        autoChoose: "Auto",
        manualInput: "Manual",
        decodingResult: "Result",
        parameter: "Param",
        parameterType: "Type",
        value: "Value",
        queryFailed: "An error has occurred",
    },
    faucet: {
        prompt: ["Request testnet coins and tokens for test you smart contract.", "ChainTool Faucets collet commonly used faucet websites for developers to enjoy.", "If you have a faucet website that we don't list, feel free to submit ", "PR", " or ", "ISSUE", ", Your support is our motivation."],
        currency: "Currency",
        url: "Website",
        remark: "Comment",
        operate: "Operate",
        receive: "Go",
        copyUrl: "Copy",
        copyURLSuccessfully: "URL Copied",
    },
    notfind: {
        title: "No Page Found",
        return: "Go back"
    },
    faucetData: {
        ethereum: "Ethereum",
        testnet: " Testnet",
        remarkGoerli: ["0.1 Goerli ETH per day", "by pow", "Twitter Auth,  faucet ETH, wETH, DAI, NFTs", "10 for those who have deployed contracts before 202211"],
        remarkSepolia: ["0.5 Sepolia ETH per day", "by pow", "10 for those who have deployed contracts before 202211"],
        remarkMumbai: ["0.5 Mumbai MATIC per day"],
        remarkHarmony: ["Shard 0、Shard 1、Shard 2、Shard 3"],
        remarkCelo: ["need github auth"]
    },
    connectWallet: {
        walleAccessDenied: "MetaMask refused",
        notInstalledMetaMask: "Please install MetaMask."
    }
}