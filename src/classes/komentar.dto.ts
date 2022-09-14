export class KomentarDto {

    id: number;
    komentar: string;

    constructor(id: number, komentar:string) {
        this.id = id;
        this.komentar = komentar;
    }
}