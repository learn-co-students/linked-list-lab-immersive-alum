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
