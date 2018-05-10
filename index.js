let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
  masjdrandm: {name: 'Kirstin', next: 'ntrandm'},
  ntrandm: {name: 'Juliet', next: null}
}

function getName(node){
  return node.name
}

function headNode(list, collection){
  return collection[list]
}

function next(node, collection){
  let next = node.next
  return collection[next]
}

function nodeAt(index, linkedList, collection){
  let node = headNode(linkedList, collection)
  for (let i = 0; i < index; i++){
    node = next(node, collection)
  }
  return node
}


function addressAt(index, linkedList, collection){
  let node = {}
  if (index == 0){
    node = linkedList
  } else {
    node = nodeAt(index-1, linkedList, collection).next
  }
  return node
}

function indexAt(input, collection, linkedList){
  let node = headNode(linkedList, collection)
  let i = 0
  while (node.name != input.name){
    node = next(node, collection)
    i++
  }
  return i
}

function insertNodeAt(index, address, linkedList, collection) {
  let beforeNode = nodeAt(index-1, linkedList, collection)
  let afterNodeAddress = beforeNode.next
  beforeNode.next = address
  let newNode = next(beforeNode, collection)
  newNode.next = afterNodeAddress
}

function deleteNodeAt(index, linkedList, collection) {
  let beforeNode = nodeAt(index-1, linkedList, collection)
  let targetNode = nodeAt(index, linkedList, collection)
  beforeNode.next = targetNode.next
}
