function getName(node){
  return node.name;
}

function headNode(linkedList, collection){
  return collection[linkedList];
}

function next(node, collection){
  return collection[node.next];
}

function nodeAt(nodeNumber, linkedList, collection){
  let node = headNode(linkedList, collection);

  while(nodeNumber > 0){
    node = next(node, collection)
    --nodeNumber;
  }
  return node;
}

function addressAt(nodeNumber, linkedList, collection){
  let node = nodeAt(nodeNumber, linkedList, collection)
  let address;
  Object.keys(collection).forEach(
    key => {
      if(collection[key] === node){
        address = key;
      }
    }
  );
  return address;
}

function indexAt(node, collection, linkedList){
  let lastAddress = Object.keys(collection).length - 1;
  let nodeAddress = lastAddress;
  let currentNode = node;

  while(currentNode.next !== null){
    currentNode = next(currentNode, collection)
    --nodeAddress;
  }
  return nodeAddress;
}

function insertNodeAt(nodeNumber, key, linkedList, collection){
  let previousNode = nodeAt(nodeNumber - 1, linkedList, collection);
  let newNode = collection[key];
  newNode.next = previousNode.next;
  previousNode.next = key;

}

function deleteNodeAt(nodeNumber, linkedList, collection){
    let previousNode = nodeAt(nodeNumber - 1, linkedList, collection);
    let nodeToDelete = nodeAt(nodeNumber, linkedList, collection);
    previousNode.next = nodeToDelete.next

    let key = addressAt(nodeNumber, linkedList, collection)
    delete collection.key;
}
