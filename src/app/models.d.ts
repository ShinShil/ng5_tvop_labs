interface ILabError {
    description: string | string[];
    title: string;
    images?: string[];
    steps?: string[];
}

interface ILabErrorDisplay {
    description?: boolean;
    steps?: boolean;
    images?: boolean;
}
