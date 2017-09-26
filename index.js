function headNode(linkedList, collection){
  return collection[linkedList]
};


function getName(node){
  return node.name
};

function next(head, collection){
  return collection[head.next]
};


function nodeAt(index, linkedList, collection){
  let node = collection[linkedList]
    for (var i = 0; i < index; i++){
      node = collection[node.next]
    }
  return node
};


function addressAt(index, linkedList, collection){
  let address;
  let node = collection[linkedList]
    if (index === 0){
      address = linkedList;
    } else {
      for (var i = 0; i < index; i++){
        address = node.next
        node = collection[node.next]
      }
    }
    return address
}

function indexAt(node, collection, linkedList){
  let index = 0;
  let address = linkedList;
  let head = collection[linkedList];
    while (node.name !== head.name){
      index++
      head = collection[head.next]
    }
    return index
  }


function insertNodeAt(index, address, linkedList, collection){
    let previousNode = nodeAt(index -1, linkedList, collection);
    let currentNode = nodeAt(index, linkedList, collection);

    let previousIndex = indexAt(previousNode, collection, linkedList);
    let currentNodeIndex = indexAt(currentNode, collection, linkedList);

    let currentAddress = addressAt(currentNodeIndex, linkedList, collection);
    previousNode.next = address;
    let newNode = collection[address]
    newNode.next = currentAddress;
}

function deleteNodeAt(index, linkedList, collection){
  let currentNode = nodeAt(index, linkedList, collection);
  let previousIndex = indexAt(currentNode, collection, linkedList);
  let previousNode = nodeAt(previousIndex -1, linkedList, collection);
  let currentNext = currentNode.next
  previousNode.next = currentNext;

}
