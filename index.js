function getName(node) {
  return node.name
}

function headNode(head, collection) {
  return collection[head]
}

function next (node, collection) {
  return collection[node.next]
}

function nodeAt (index, head, collection) {
  let currentNode = headNode(head, collection)
  for (let i = 0; i < index; i++) {
    currentNode = next(currentNode, collection)
  }
  return currentNode
}

function addressAt (index, head, collection) {
  if (index === 0) {
    return head
  } else {
    const priorNode = nodeAt(index - 1, head, collection)
    return priorNode.next
  }
}

function indexAt (node, collection, head) {
  let currentNode = headNode(head, collection)
  let index = 0
  while (node !== currentNode) {
    index ++
    currentNode = next(currentNode, collection)
  }
  return index
}

function insertNodeAt (index, newAddress, head, collection) {
  const newNode = collection[newAddress]
  const priorNode = nodeAt(index - 1, head, collection)

  newNode.next = addressAt(index, head, collection)
  priorNode.next = newAddress
}

function deleteNodeAt (index, head, collection) {
  const node = nodeAt(index, head, collection)
  const preceedingNode = nodeAt(index - 1, head, collection)

  preceedingNode.next = node.next
}
