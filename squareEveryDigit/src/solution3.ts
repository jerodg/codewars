export class Kata {
    static squareDigits(num: number) {
        return +num.toString().split('').map(i=>+i*+i).join('');
    }
}