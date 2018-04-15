interface ILabError {
    description: string | string[];
    title: string;
    images?: string[];
    steps?: string[];
    fix?: string;
    importance?: number;
    type?: number;
    repeatable: boolean;
}

interface ILabErrorDisplay {
    description?: boolean;
    steps?: boolean;
    images?: boolean;
}

interface IErrorHeader {
    companyName: string;
    confidence: string;
    reportIndex: number;
    appName: string;
    releaseDate: string;
    releaseVersion: string;
    workerName: string;
    createdAt: string;
}
