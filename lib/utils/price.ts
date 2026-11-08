export const buildPriceOptions = (min: number, max: number, step = 10): number[] => {
    const start = Math.ceil(min / step) * step;
    const options: number[] = [];
    for (let p = start; p <= max; p += step) options.push(p);
    
    return options;
}