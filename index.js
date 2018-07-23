function getName(node) {
  return node.name
}

function headNode(list, collection) {
  return collection[list]
}

function next(node, collection) {
  return collection[node.next]
}

function nodeAt(index, list, collection) {
  let node = headNode(list, collection)
  for (let x = 0; x < index; x++){
     node = next(node, collection)
  }
  return node
}

function addressAt(index, list, collection) {
  if (index == 0) {
    return list
  } else {
    let node = nodeAt(index-1, list, collection)
    return node.next
  }
}

function indexAt(node, collection, list) {
  let current = headNode(list, collection)
  let index = 0
  while (current != node) {
    index++
    current = next(current, collection)
  }
  return index
}

function insertNodeAt(index, address, list, collection){
  let previous = nodeAt(index - 1, list, collection)
  let subsequent = nodeAt(index, list, collection)
  let subsequentAddress = addressAt(subsequent, list, collection)
  previous.next = address
  collection[address].next = subsequentAddress
}

function deleteNodeAt(index, list, collection){
  let previous
  let current = headNode(list, collection)
  for (let x = 0; x < index; x++){
     previous = current
     current = next(current, collection)
  }
  previous.next = current.next
}
