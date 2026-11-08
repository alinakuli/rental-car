export const getArticle = (imgUrl: string): string => {
    const match = imgUrl.match(/(\d+)-ai\.\w+$/);
    return match ? match[1] : "";
}