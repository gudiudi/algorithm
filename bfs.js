const graph = {
	0: [1, 2],
	1: [0, 3, 4],
	2: [0, 5],
	3: [1],
	4: [1, 5],
	5: [2, 4],
};

// search a value
const bfs = (graph, start, target) => {
	if (!graph[start]) return false;

	const visited = new Set([start]);
	const queue = [start];
	let front = 0;

	while (front < queue.length) {
		const node = queue[front++];
		if (node === target) return true;
		for (const neighbor of graph[node]) {
			if (visited.has(neighbor)) continue;
			queue.push(neighbor);
			visited.add(neighbor);
		}
	}

	return false;
};

const start = 0;
const target = 5;
console.log(bfs(graph, start, target));
