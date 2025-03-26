// Webpack module ID: 53833

/**
 * Purpose: Shuffle an array in place
 * @param vecArray
 */
export function ShuffleArray(vecArray, index = 0) {
	// Do nothing if the array doesn't exist or only has one item
	if (vecArray?.length > 1) {
		let iCurrent =
			index > 0 ? Math.min(index, vecArray.length) : vecArray.length;
		while (iCurrent !== 0) {
			// Pick a remaining element...
			const iRandom = Math.floor(Math.random() * iCurrent);
			iCurrent -= 1;
			// And swap it with the current element.
			const temp = vecArray[iCurrent];
			vecArray[iCurrent] = vecArray[iRandom];
			vecArray[iRandom] = temp;
		}
	}
}

//-----------------------------------------------------------------------------
// Purpose: Moves an array element from one index to another. Pads array if iTo would create a gap after the end of the array
//-----------------------------------------------------------------------------
export function MoveElement(vecItems, iFrom, iTo) {
	if (!(iFrom < 0) && !(iTo < 0)) {
		// if moving element beyond the length of the array, pad out the array
		if (iTo >= vecItems.length) {
			vecItems[iTo] = undefined;
		}
		// swap using splice instead of manual iteration. Hoping this memmoves
		vecItems.splice(iTo, 0, vecItems.splice(iFrom, 1)[0]);
	}
}

//-----------------------------------------------------------------------------
// Purpose: Return true if two arrays are equivalent
//-----------------------------------------------------------------------------
export function ArrayEquals(vecA, vecB) {
	if (!vecA && !vecB) {
		return true;
	}
	if (!vecA || !vecB) {
		return false;
	}
	if (vecA.length != vecB.length) {
		return false;
	}
	for (let i = 0; i < vecA.length; i++) {
		if (vecA[i] !== vecB[i]) {
			return false;
		}
	}
	return true;
}

//-----------------------------------------------------------------------------
// Purpose: Finds an element in an array and removes it.  Returns true if it was found.
//-----------------------------------------------------------------------------
export function FindAndRemove(vec, item) {
	return FindAndRemoveWhere(vec, (element) => item == element);
}

//-----------------------------------------------------------------------------
// Purpose: Finds an element in an array and removes it.  Returns true if it was found.
//-----------------------------------------------------------------------------
export function FindAndRemoveWhere(vec, fnPredicate) {
	const i = vec.findIndex(fnPredicate);
	return i >= 0 && (vec.splice(i, 1), true);
}

//-----------------------------------------------------------------------------
// Purpose: Counts the number of entries in the array that pass the match function
//-----------------------------------------------------------------------------
export function CountMatches(vec, fnMatch) {
	return vec.reduce(
		(sum, element, index, array) =>
			sum + (fnMatch(element, index, array) ? 1 : 0),
		0,
	);
}

//-----------------------------------------------------------------------------
// Purpose: Returns an array without the element.  Does not modify the passed array, and the result is
//	always a mutable copy.
//-----------------------------------------------------------------------------
export function ArrayWithoutElement(vec, item) {
	return vec.filter((e) => item !== e);
}

//-----------------------------------------------------------------------------
// Purpose: Finds the element with the highest index that is less than or equal to the provided element
//-----------------------------------------------------------------------------
export function SortedFindLessOrEqual(vec, fnCompare) {
	let iStart = 0;
	let iStop = vec.length - 1;
	while (iStart <= iStop) {
		const iMid = Math.floor((iStart + iStop) / 2);
		const nCompare = fnCompare(vec[iMid]);
		if (nCompare > 0) {
			iStart = iMid + 1;
		} else if (nCompare < 0) {
			iStop = iMid - 1;
		} else {
			// found a match - but we want the last one - keep looking
			if (iStop == iMid) {
				return iMid;
			}
			if (iMid == iStart) {
				// This means we have just start and stop elements left to check
				if (iStop > iMid && fnCompare(vec[iMid + 1]) < 0) {
					return iMid;
				} else {
					return iMid + 1;
				}
			}
			iStart = iMid;
		}
	}
	return iStop;
}

//-----------------------------------------------------------------------------
// Purpose: Finds the element with the highest index that is less than or equal to the provided element
//-----------------------------------------------------------------------------
export function SortedInsert(vec, element, fnCompare) {
	const iBefore = SortedFindLessOrEqual(vec, (e) => fnCompare(element, e));
	vec.splice(iBefore + 1, 0, element);
}

//-----------------------------------------------------------------------------
// Purpose: Filters an array to only the elements passing a test, in place
//-----------------------------------------------------------------------------
export function FilterInPlace(vec, fnCompare) {
	let i = 0;
	let j = 0;
	while (i < vec.length) {
		const val = vec[i];
		if (fnCompare(val, i, vec)) {
			vec[j++] = val;
		}
		i++;
	}
	vec.length = j;
	return vec;
}

/**
 * Purpose: Pads an array to the specified length, using the specified fill element.
 * @param vec
 * @param len
 * @param fill
 */
export function PadArray(vec, len, fill) {
	if (!vec) {
		console.error(
			"array should be defined for us to fill in the missing indexes",
		);
	}
	if (vec.length < len) {
		return vec.concat(Array(len - vec.length).fill(fill));
	} else {
		return vec;
	}
}

/** @return Return a unique version of the array provided */
export function Unique(rgInput) {
	const uniqSet = new Set();
	rgInput.forEach((e) => uniqSet.add(e));
	return Array.from(uniqSet);
}
