function getName(node){
  return node.name
}

function headNode(linkedList,collection){
  return collection[linkedList]//linkedList is a string
}

function next(node, collection){
  const nextAddress = node.next
  return collection[`${nextAddress}`]
}

function nodeAt(idx, linkedList, collection){
  let currentNode = headNode(linkedList, collection)
  for(let i=0; i<idx; i++){
    currentNode = next(currentNode, collection)
  }
  return currentNode
}

function addressAt(idx, linkedList, collection){
  if(idx === 0){
    return linkedList
  } else {
    let node = nodeAt(idx-1, linkedList, collection)
    return node.next
  }
}

function indexAt(node, collection, linkedList){
  let currentNode = headNode(linkedList, collection)
  let idx = 0
  while(currentNode !== node){
    currentNode = next(currentNode, collection)
    idx++
  }
  return idx
}

function insertNodeAt(idx, newNodeAddress, linkedList, collection){
  let previousNode = nodeAt(idx-1, linkedList, collection)
  let nextNode = nodeAt(idx, linkedList, collection)
  let nextNodeAddress = addressAt(idx, linkedList, collection)

  previousNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = nextNodeAddress
}

function deleteNodeAt(idx, linkedList, collection){
  let previousNode = nodeAt(idx-1, linkedList, collection)
  let currentNode = nodeAt(idx, linkedList, collection)

  previousNode.next = currentNode.next
}
