function getName(node) {
  return node.name
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, linkedList, collection) {
  let node = collection[linkedList]
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection) {
  let address = linkedList
  let node = collection[address]
  for (let i = 0; i < index; i++) {
    address = node.next
    node = next(node, collection)
  }
  return address
}

function indexAt(targetNode, collection, linkedList) {
  let index = 0
  let node = collection[linkedList]
  while (node.name !== targetNode.name) {
    node = next(node, collection)
    index++
  }
  return index
}

function insertNodeAt(index, newNodeAddress, linkedList, collection) {
  let newNode = collection[newNodeAddress]
  let currentNode = collection[linkedList]
  let previousNode
  if (index === 0) {
    linkedList = newNodeAddress
  } else {
    for (let i = 0; i < index; i++) {
      previousNode = currentNode
      currentNode = collection[currentNode.next]
    }
    newNode.next = previousNode.next
    return previousNode.next = newNodeAddress
  }
}

function deleteNodeAt(index, linkedList, collection) {
  let node = collection[linkedList]
  let previousNode
  if (index === 0) {
    return linkedList = node.next
  } else {
    for (let i = 0; i < index; i++) {
      previousNode = node
      node = collection[node.next]
    }
    return previousNode.next = node.next
  }
}
