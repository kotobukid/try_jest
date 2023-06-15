import os from 'os';

// ネットワークインターフェースの情報を取得

const get_ipv4nicnames = (): string[] => {
    const names: string[] = [];
    const interfaces: NodeJS.Dict<os.NetworkInterfaceInfo[]> = os.networkInterfaces();
    for (const name in interfaces) {
        // @ts-ignore
        const interfaceInfo: os.NetworkInterfaceInfo[] | null = interfaces[name];

        // interfaceInfoは配列で、IPv4とIPv6の情報が含まれている
        // IPv4の情報のみを取得する
        // @ts-ignore
        const ipv4Info = interfaceInfo.find(info => info.family === 'IPv4');

        const ipv4Address: string = ipv4Info ? ipv4Info.address : 'None';

        if (ipv4Address) {
            names.push(ipv4Address);
        }
    }
    return names;
}

const getIpAddress = (interfaceName: string) => {
    const interfaces = os.networkInterfaces();
    const interfaceInfo = interfaces[interfaceName];

    if (!interfaceInfo) {
        return null;
    }

    // interfaceInfoは配列で、IPv4とIPv6の情報が含まれている
    // IPv4の情報のみを取得する
    const ipv4Info = interfaceInfo.find(info => info.family === 'IPv4');

    return ipv4Info ? ipv4Info.address : null;
}

const get_addresses = () => {
    return get_ipv4nicnames().map((name: string) => {
        return getIpAddress(name)
    }).filter((n: string | null) => !!n)
};

export {
    get_addresses
}