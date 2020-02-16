/** Count Odd Numbers Below N
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
 along with this program.  If not, see <https://www.gnu.org/licenses/>.*/
export function oddCount(n: number) {
    if (n < 1) {
        return 0;
    }
    return Math.trunc(n / 2);
}

console.log(oddCount(7));
console.log(oddCount(4));
console.log(oddCount(2));
console.log(oddCount(1.5));
console.log(oddCount(675647749644376));
console.log(oddCount(837437372.5));
