/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const originalColor = image[sr][sc];
    // TODO: when starting pixel is already target color
    // just return image (early return)
    if (originalColor === color) return image;
    
    const m = image.length;
    const n = image[0].length;
    
    const dfs = (x, y) => {
        if (x < 0 || x >= m || y < 0 || y >= n || image[x][y] !== originalColor) {
            return;
        }
        
        image[x][y] = color;
        dfs(x-1, y);
        dfs(x+1, y);
        dfs(x, y-1);
        dfs(x, y+1);
    };

    dfs(sr, sc);
    return image;
};