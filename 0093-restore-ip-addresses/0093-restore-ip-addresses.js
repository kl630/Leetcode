var restoreIpAddresses = function(s) {
	let result = [];
	let path = [];
	const isValidIPInteger = (str) => {
		// ‘05’
		if (str.length > 1 && str[0] === '0') return false;
		if (Number(str) >= 0 && Number(str) <= 255) {
			return true;
        } else {
            return false;
        }
    };

	const backtracking = (startIndex) => {
		// termination condition
		// when the length of path === 4 AND path.join(‘’) === s
		if (path.length === 4) {
			if (path.join('') === s) {
                pathStr = path.join('.');
                result.push(pathStr);
                return;
            } else {
                return;
            }
        } 

		for (let i = startIndex; i < s.length; i++) {
			let cutPart = s.slice(startIndex, i + 1);
			if (isValidIPInteger(cutPart)) {
				path.push(cutPart);
				backtracking(i + 1);
				path.pop();
            }
        }
    };

    backtracking(0);
    return result;
};
