import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * fungsi untuk menggabungkan class tailwind dan menghilangkan duplikat atau conflict
 *
 * @memberof Lib
 * @alias mergeClass
 *
 * @param {...string} inputs
 * @returns {string}
 */
export default function mergeClass(...inputs) {
    return twMerge(clsx(inputs));
}