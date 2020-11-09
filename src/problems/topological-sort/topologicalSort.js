/*
  Topological Sort:
  Sort vertices (nodes) in direct acyclic graph (DAG) in linear order such that
  for every directed edge uv from vertex u to vertex v, u comes before v in the
  ordering.

  Example:
  A    B
   \ / |
    C  E
   /  /
  D  /
   \/
   F
   |
   G

  B E F G C D A is one example answer (DF)
  A C D F G B E is another (DF)
  A B C D E F G is another (BF)
*/

const Node = function (value) {
  this.value = value;
  this.children = [];
  this.inBound = 0;
};

Node.prototype.addChildren = function (...values) {
  this.children = this.children.concat(values);
};

export const createGraph = () => {
  const a = new Node("A");
  const b = new Node("B");
  const c = new Node("C");
  const d = new Node("D");
  const f = new Node("F");
  const g = new Node("G");
  const e = new Node("E");
  a.addChildren(c);
  b.addChildren(c, e);
  c.addChildren(d);
  d.addChildren(f);
  e.addChildren(f);
  f.addChildren(g);
  // g.addChildren(a);
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);
  const five = new Node(5);
  const six = new Node(6);
  one.addChildren(two, three);
  two.addChildren(three);
  four.addChildren(one, five);
  five.addChildren(six);
  six.addChildren(four);
  return [one, two, three, four, five, six];
};

export const topologicalSortBF = (graph) => {
  // 1. Count the incoming nodes for each node
  for (let i = 0; i < graph.length; i++) {
    let vertex = graph[i];
    // Iterate thru the edges of each node and increment inDegree for each edge
    for (let j = 0; j < vertex.children.length; j++) {
      let childNode = vertex.children[j];
      childNode.inBound += 1;
    }
  }
  // 2. Add nodes with inDegree === 0 to the inDegree queue
  let inDegree = [];
  for (let i = 0; i < graph.length; i++) {
    let vertex = graph[i];
    if (vertex.inBound === 0) {
      inDegree.push(vertex);
    }
  }
  // 3. Iterate through inDegree...
  let sorted = [];
  while (inDegree.length > 0) {
    let node = inDegree.shift();
    for (let i = 0; i < node.children.length; i++) {
      let childNode = node.children[i];
      childNode.inBound -= 1;
      if (childNode.inBound === 0) {
        inDegree.push(childNode);
      }
    }
    sorted.push(node);
  }

  if (graph.length !== sorted.length) {
    return [];
  } else {
    return printStack(sorted).reverse();
  }
};

export const topologicalSortDF = (graph) => {
  // Create a stack to put all the nodes in sorted order
  // Create an object to remember all nodes that have already been visited
  let stack = [];
  let visited = {}; // 0: not visited, 1: visiting, 2: left

  // Iterate through the the nodes in the graph
  for (let i = 0; i < graph.length; i++) {
    let node = graph[i];
    visited[node.value] = visited[node.value] || 0;
    if (visited[node.value] === 0) {
      topologicalSortHelperDF(node, visited, stack);
    }
  }

  // Pop off elements off the stack in reverse order to get sorted nodes
  if (stack.length !== graph.length) {
    return [];
  }
  let answer = printStack(stack);
  console.log(answer);
};

const topologicalSortHelperDF = (node, visited, stack) => {
  if (visited[node.value] === 2) {
    return;
  }
  if (visited[node.value] === 1) {
    stack.push(node);
    return;
  }
  // Add the visited node to visited
  visited[node.value] = 1;

  // Iterate through each of the nodes children
  for (let i = 0; i < node.children.length; i++) {
    // Skip over the ones that have been visited
    let childNode = node.children[i];

    // Recurse on the child node
    topologicalSortHelperDF(childNode, visited, stack);
  }

  visited[node.value] = 2;
  // If there are no children or after all the children have been visited, then
  // push the node to the stack
  stack.push(node);
};

export const findCycle = (graph) => {
  // Create white (not visited), black (visited), gray (visiting)
  const whiteSet = new Set();
  const graySet = new Set();
  const blackSet = new Set();
  const mapping = new Map();
  graph.forEach((node) => {
    whiteSet.add(node);
  });
  for (let node of whiteSet) {
    mapping.set(node.value, null);
    if (hasCycle(node, whiteSet, graySet, blackSet, mapping)) {
      return extractCycle(mapping).map((node) => node.value);
    }
  }
  return [];
  // Create dfs mapping - defines child -> parent relationship
  // Add all nodes in graph to whiteSet
  // Iterate through nodes in white set
  // Add node to dfs mapping with null parent
  // if (hasCycle(currentNode, whiteSet, graySet, blackSet))
};

export const hasCycle = (currentNode, whiteSet, graySet, blackSet, mapping) => {
  moveNode(currentNode, whiteSet, graySet);
  for (let i = 0; i < currentNode.children.length; i++) {
    const neighbor = currentNode.children[i];
    if (blackSet.has(neighbor)) {
      continue;
    }
    mapping.set(neighbor, currentNode);
    if (graySet.has(neighbor)) {
      return true;
    }
    if (hasCycle(neighbor, whiteSet, graySet, blackSet, mapping)) {
      return true;
    }
  }
  moveNode(currentNode, whiteSet, blackSet);
  return false;
};

const extractCycle = (mapping) => {
  const cycle = [];
  let child = Array.from(mapping.keys()).pop();
  cycle.push(child);
  while (cycle[0] !== mapping.get(child)) {
    const parent = mapping.get(child);
    cycle.push(parent);
    child = parent;
  }
  cycle.push(mapping.get(child));
  return cycle;
};

const moveNode = (currentNode, sourceSet, destSet) => {
  sourceSet.delete(currentNode);
  destSet.add(currentNode);
};

const printStack = (stack) => {
  let result = [];
  for (let i = stack.length - 1; i >= 0; i--) {
    let node = stack[i];
    result.push(node.value);
  }
  return result;
};

export default Node;
