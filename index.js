function getName(node) {
  return node.name
}

function headNode(headLocation, collection) {
  return collection[headLocation]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, headLocation, collection) {
  let node = headNode(headLocation, collection)
  for (let i = 0; i < index; i++) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, headLocation, collection) {
  let address = headLocation
  let node
  for (let i = 0; i < index; i++) {
    address = collection[address].next
  }
  return address
}

function indexAt(node, collection, headLocation) {
  let nextNode = headNode(headLocation, collection)
  let counter = 0
  while (typeof nextNode !== 'undefined') {
    if (nextNode.name === node.name) return counter
    counter += 1
    nextNode = next(nextNode, collection)
  }
}

function insertNodeAt(index, nodeAddress, headLocation, collection) {
  const preNode = nodeAt(index - 1, headLocation, collection)
  const newNode = collection[nodeAddress]
  const nextAddress = addressAt(index, headLocation, collection)
  if (typeof preNode !== 'undefined') preNode.next = nodeAddress
  if (typeof newNode !== 'undefined') newNode.next = nextAddress
}

function deleteNodeAt(index, headLocation, collection) {
  const preNode = nodeAt(index - 1, headLocation, collection)
  const skipAddress = nodeAt(index, headLocation, collection).next
  if (typeof preNode !== 'undefined') preNode.next = skipAddress
}