function getName(node){
  return node.name
}

function headNode(node, collection){
  return collection[node]
}

function next(node, collection){
  let nextAddress = node.next
  return collection[nextAddress]
}

function nodeAt(index, node, collection){
  let currentNode = headNode(node, collection)
  for(var i = 0; i < index; i++){
    currentNode = next(currentNode, collection)
  }
  return currentNode
}

function addressAt(index, linkedList, collection){
  if (index == 0){
    return linkedList
  } else {
    let node = nodeAt(index - 1, linkedList, collection)
    return node.next
  }
}

function indexAt(node, collection, linkedList){
  let currentNode = headNode(linkedList, collection)
  let index = 0
  while(currentNode != node){
    index++
    currentNode = next(currentNode, collection)
  }
  return index
}

function insertNodeAt(index, newAddress, linkedList, collection){
  let prevNode = nodeAt(index - 1, linkedList, collection)
  let subsequentNode = nodeAt(index, linkedList, collection)

  let prevNodeIndex = indexAt(prevNode, collection, linkedList)
  let subsNodeIndex = indexAt(subsequentNode, collection, linkedList)

  let prevNodeAddress = addressAt(prevNodeIndex, linkedList, collection)
  let subsNodeAddress = addressAt(subsNodeIndex, linkedList, collection)

  prevNode.next = newAddress
  let newNode = collection[newAddress]
  newNode.next = subsNodeAddress
}

function deleteNodeAt(index, linkedList, collection){
  let prevNode
  let currentNode = headNode(linkedList, collection)
  for (var i = 0; i < index; i++){
    prevNode = currentNode
    currentNode = next(currentNode, collection)
  }
  prevNode.next = currentNode.next

}
