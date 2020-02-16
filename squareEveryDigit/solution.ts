/** Square Every Digit
 Copyright © 2020 Jerod Gawne <https://github.com/jerodg/codewars>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as
 published by the Free Software Foundation, either version 3 of the
 License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.

 Instructions
 Welcome. In this kata, you are asked to square every digit of a number.
 For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
 Note: The function accepts an integer and returns an integer
 */
export class Kata {
    static squareDigits(num: number) {
        let key;
        let x = '';
        let n = (num + '').split('');
        for (const val of n) {
            x += Math.pow(parseInt(val), 2);
        }
        return parseInt(x);
    }
}

console.log(Kata.squareDigits(9119));