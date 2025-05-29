export type ComSectProps = {
    id: number;
    grade: number;
    text: ComSectText;
    posted?: Date;
}

type ComSectText = {
    username: string;
    textCom: string;
}