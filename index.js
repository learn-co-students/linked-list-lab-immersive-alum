function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(head, collection) {
  return collection[head.next];
}

function nodeAt(index, linkedList, collection) {
  let currentNode = headNode(linkedList, collection);
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection);
  }
  return currentNode;
}

function addressAt(index, linkedList, collection) {
  return index > 0
    ? nodeAt(index - 1, linkedList, collection).next
    : linkedList;
}

function indexAt(node, collection, linkedList) {
  for (let i = 0; i < Object.keys(collection).length; i++) {
    if (nodeAt(i, linkedList, collection) === node) {
      return i;
    }
  }
  return -1;
}

function insertNodeAt(index, address, linkedList, collection) {
  let nodeAtIndex = nodeAt(index - 1, linkedList, collection);
  collection[address].next = nodeAtIndex.next;
  nodeAtIndex.next = address;
}

function deleteNodeAt(index, linkedList, collection) {
  let nodeAtIndex = nodeAt(index, linkedList, collection);
  let previousNode = nodeAt(index - 1, linkedList, collection);
  delete collection[addressAt(index, linkedList, collection)];
  previousNode.next = nodeAtIndex.next;
}
// let firstNode = { name: "susie", next: "rkjasj" };
// let secondNode = { name: "sam", next: "asnan" };
// let lastNode = { name: "charlie", next: null };
// let collection = {
//   rkjasj: secondNode,
//   asnan: lastNode,
//   whana: firstNode
// };
//
// let linkedList = "whana";
// console.log(collection);
// deleteNodeAt(1, linkedList, collection);
// console.log(nodeAt(0, linkedList, collection));
// console.log(collection);
