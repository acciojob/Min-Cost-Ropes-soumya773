function mincost(arr) { 
  // If there's only one or no rope, no cost to connect
  if (arr.length <= 1) return 0;

  let totalCost = 0;

  // Sort the array to simulate min-heap behavior
  arr.sort((a, b) => a - b);

  while (arr.length > 1) {
    // Always pick the two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    let cost = first + second;
    totalCost += cost;

    // Insert the combined rope back in sorted order
    // Using binary insertion for efficiency
    let left = 0, right = arr.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] < cost) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    arr.splice(left, 0, cost);
  }

  return totalCost;
}

module.exports = mincost;
