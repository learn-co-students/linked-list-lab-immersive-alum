const getName = node => {
  return node.name
}

const headNode = (linkedList, collection) => {
  return collection[linkedList]
}

const next = (node, collection) => {
  let nextNode = node.next
  return collection[nextNode]
}

const nodeAt = (index, linkedList, collection) => {
  let currentNode = headNode(linkedList, collection)
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection)
  }
  return currentNode;

}

const addressAt = (index, linkedList, collection) => {
  if (index === 0) {
    return linkedList
  } else {
    return nodeAt(index - 1, linkedList, collection).next
  }
}

const indexAt = (node, collection, linkedList) => {
  let currentNode = headNode(linkedList, collection)
  let currentIndex = 0
  while(currentNode !== node) {
    currentIndex++
    currentNode = next(currentNode, collection)
  }
  return currentIndex
}

const insertNodeAt = (index, newNodeAddress, linkedList, collection) => {
  let prevNode = nodeAt(index - 1, linkedList, collection)
  let nextNode = nodeAt(index, linkedList, collection)
  let prevNodeAddress = addressAt(prevNode, linkedList, collection)
  let nextNodeAddress = addressAt(nextNode, linkedList, collection)

  prevNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = nextNodeAddress
}

const deleteNodeAt = (index, linkedList, collection) => {
  let prevNode
  let currentNode = headNode(linkedList, collection)
  for (let i = 0; i < index; i++) {
     prevNode = currentNode
     currentNode = next(currentNode, collection)
  }
  prevNode.next = currentNode.next
}
