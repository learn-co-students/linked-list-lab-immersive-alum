//argument is expected as an object with key "name"
function getName(name) {
  return name["name"]
}

function headNode(linkedList, collection) {
  return collection[linkedList]
}

//"next" is a key of each object, and it point to a single object in the collection
function next(node, collection) {
  let nextNode = node.next;
  return collection[nextNode]
}

//index refer how many position after collection[linkedList]
function nodeAt(index, linkedList, collection){
  let currentNode = collection[linkedList]
  for(let i = 0; i < index; i++){
     currentNode = next(currentNode, collection);
  }
  return currentNode;
}

//set index - 1 for nodeAt function to find the one before the target
function addressAt(index, linkedList, collection) {
  if (index === 0){
    return linkedList
  } else {
    let node = nodeAt(index - 1, linkedList, collection)
    return node.next
  }
}

function indexAt(node, collection, linkedList) {
  let currentNode = collection[linkedList]
  let currentIndex = 0;
  while (currentNode !== node) {
    currentNode = next(currentNode, collection);
    currentIndex++;
  }
  return currentIndex
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
  let previousNode = nodeAt(index - 1, linkedList, collection)
  let subsequentNode = nodeAt(index, linkedList, collection)

  let previousNodeIdx = indexAt(previousNode, collection, linkedList)
  let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)
  let previousNodeAddress = addressAt(previousNode, linkedList, collection)
  let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
  previousNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = subsequentNodeAddress
}


function deleteNodeAt(index, linkedList, collection){
  let previousNode;
  let currentNode = collection[linkedList];
  for(let i = 0; i < index; i++){
     previousNode = currentNode
     currentNode = next(currentNode, collection);
  }
  previousNode.next = currentNode.next
}
