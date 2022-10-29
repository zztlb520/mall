interface HomeModel {
    config:{
        bannas: string[];
        quickNavs: {text:string,url:string}[][];
        notifica: string;
        spike:{
            time: number;
            url: string[];
        };
        hot:{
            title: string;
            url: string;
            tip: string;
            isBg: boolean;
            bgtxt: string;
        }[];
        snapUp:{
            tip:string;
            url:string;
            num:number;
            specialPrice:number;
            price:number;
        }[];
        recommendTitle:{
            url: string;
            tip: string;
            specialPrice:number;
            price:number;
        }[];
        recommendMain:{
            url:string;
            content:{
                url: string;
                tip: string;
                specialPrice:number;
                price:number;
            }[]
        }[];
        like:{
            url: string;
            tip: string;
            specialPrice:number;
            price:number;
            num: number;
        }[]
    }
}