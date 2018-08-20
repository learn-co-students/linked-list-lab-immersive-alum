function getName(node){
  return node.name
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(node, collection){
  return collection[node.next]
}

function nodeAt(index, linkedList, collection){
  let nextOne = headNode(linkedList, collection)
  for (let i=0;i<index;i++){
    nextOne = next(nextOne, collection)
  }
  return nextOne
}

function addressAt(index, linkedList, collection){
  if (index===0){
    return linkedList
  }
  let prevNode = nodeAt(index-1, linkedList, collection)
  return prevNode.next
}

function indexAt(node, collection, linkedList){
  let counter = 0
  let head = headNode(linkedList, collection)
  if (head===node){
    return counter
  }
  let nextOne = head
  if (next(nextOne, collection)===node){
    return ++counter
  }
  counter = 1
  while(next(nextOne, collection)!==node){
    counter++
    nextOne = next(nextOne, collection)
  }
  return counter
}

function insertNodeAt(index, address, linkedList, collection){
  let currentNextNode = nodeAt(index, linkedList, collection)
  let currentPrevNode = nodeAt(index-1, linkedList, collection)
  collection[address].next = currentPrevNode.next
  currentPrevNode.next = address
}

function deleteNodeAt(index, linkedList, collection){
  let toBeDeleted = nodeAt(index, linkedList, collection)
  let prevNode = nodeAt(index-1, linkedList, collection)
  prevNode.next = toBeDeleted.next
}
