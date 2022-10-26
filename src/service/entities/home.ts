interface HomeModel {
    config:{
        bannas: string[];
        quickNavs: {text:string,url:string}[][];
        notifica: string;
        spike:{
            time: number,
            url: string[]
        },
        hot:{
            title: string;
            url: string;
            tip: string;
            isBg: boolean;
            bgtxt: string;
        }[]
    }
}